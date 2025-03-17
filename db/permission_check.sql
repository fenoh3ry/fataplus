-- Permission checking stored procedure for Fataplus AI

-- Create a function to check if a user has permission to perform an action on a resource
CREATE OR REPLACE FUNCTION public.check_permission(
  p_user_id UUID,
  p_resource_type TEXT,
  p_resource_id UUID,
  p_action TEXT
) 
RETURNS BOOLEAN AS $$
DECLARE
  v_is_permitted BOOLEAN := FALSE;
  v_resource_owner UUID;
BEGIN
  -- Check if user exists
  IF p_user_id IS NULL THEN
    RETURN FALSE;
  END IF;
  
  -- Check based on resource type
  CASE p_resource_type
    -- User Profiles
    WHEN 'user_profile' THEN
      IF p_action = 'view' OR p_action = 'update' THEN
        -- Users can only view or update their own profile
        RETURN p_user_id = p_resource_id;
      END IF;
    
    -- Farms
    WHEN 'farm' THEN
      IF p_action = 'view' THEN
        -- Anyone can view farms
        RETURN TRUE;
      ELSIF p_action IN ('update', 'delete') THEN
        -- Only farm owner can update or delete
        SELECT user_id INTO v_resource_owner FROM public.farms WHERE id = p_resource_id;
        RETURN p_user_id = v_resource_owner;
      ELSIF p_action = 'create' THEN
        -- Any authenticated user can create a farm
        RETURN TRUE;
      END IF;
    
    -- Products
    WHEN 'product' THEN
      IF p_action = 'view' THEN
        -- Anyone can view products
        RETURN TRUE;
      ELSIF p_action IN ('update', 'delete') THEN
        -- Only product owner can update or delete
        SELECT user_id INTO v_resource_owner FROM public.products WHERE id = p_resource_id;
        RETURN p_user_id = v_resource_owner;
      ELSIF p_action = 'create' THEN
        -- Any authenticated user can create a product
        RETURN TRUE;
      END IF;
    
    -- Orders
    WHEN 'order' THEN
      IF p_action IN ('view', 'update') THEN
        -- Only order owner can view or update their orders
        SELECT user_id INTO v_resource_owner FROM public.orders WHERE id = p_resource_id;
        RETURN p_user_id = v_resource_owner;
      ELSIF p_action = 'create' THEN
        -- Any authenticated user can create an order
        RETURN TRUE;
      END IF;
    
    -- Order Items
    WHEN 'order_item' THEN
      IF p_action IN ('view', 'create') THEN
        -- Check if user owns the parent order
        SELECT o.user_id INTO v_resource_owner 
        FROM public.orders o
        JOIN public.order_items oi ON o.id = oi.order_id
        WHERE oi.id = p_resource_id;
        
        RETURN p_user_id = v_resource_owner;
      END IF;
    
    -- Learning Modules
    WHEN 'learning_module' THEN
      IF p_action = 'view' THEN
        -- Any authenticated user can view learning modules
        RETURN TRUE;
      END IF;
    
    -- User Module Progress
    WHEN 'module_progress' THEN
      IF p_action IN ('view', 'update', 'create') THEN
        -- Users can only manage their own progress
        SELECT user_id INTO v_resource_owner FROM public.user_module_progress WHERE id = p_resource_id;
        RETURN p_user_id = v_resource_owner;
      END IF;
    
    -- Default case
    ELSE
      RETURN FALSE;
  END CASE;
  
  -- If we reach here, permission is denied
  RETURN FALSE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Example usage:
-- SELECT public.check_permission('user-uuid', 'farm', 'farm-uuid', 'update');

-- Create a function to check if the current user has permission
CREATE OR REPLACE FUNCTION public.current_user_can(
  p_resource_type TEXT,
  p_resource_id UUID,
  p_action TEXT
) 
RETURNS BOOLEAN AS $$
BEGIN
  RETURN public.check_permission(auth.uid(), p_resource_type, p_resource_id, p_action);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Example usage in application code:
-- SELECT public.current_user_can('farm', 'farm-uuid', 'update');

-- Create a function to throw an error if permission is denied
CREATE OR REPLACE FUNCTION public.enforce_permission(
  p_resource_type TEXT,
  p_resource_id UUID,
  p_action TEXT
) 
RETURNS VOID AS $$
BEGIN
  IF NOT public.current_user_can(p_resource_type, p_resource_id, p_action) THEN
    RAISE EXCEPTION 'Permission denied: % % %', p_action, p_resource_type, p_resource_id;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Example usage in a stored procedure:
-- BEGIN
--   PERFORM public.enforce_permission('farm', farm_id, 'update');
--   -- If we get here, the user has permission, so continue with the operation
--   UPDATE farms SET name = new_name WHERE id = farm_id;
-- END;