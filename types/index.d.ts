export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
  className?: string;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface LearningModuleProps {
  title: string;
  description: string;
  progress: number;
  image?: string;
}

// Database types
export interface UserProfile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  phone: string | null;
  location: string | null;
  farmer_type: string | null;
  bio: string | null;
  created_at: string;
  updated_at: string;
}

export interface Farm {
  id: string;
  user_id: string;
  name: string;
  location: string;
  latitude: number | null;
  longitude: number | null;
  size: number | null;
  main_crop: string | null;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  user_id: string;
  farm_id: string | null;
  title: string;
  description: string | null;
  price: number;
  image_url: string | null;
  category: string;
  available_quantity: number;
  unit: string;
  is_organic: boolean;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total_amount: number;
  shipping_address: string | null;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string | null;
  quantity: number;
  price_per_unit: number;
  total_price: number;
  created_at: string;
}

export interface LearningModule {
  id: string;
  title: string;
  description: string | null;
  content: string | null;
  image_url: string | null;
  order_index: number | null;
  difficulty_level: 'beginner' | 'intermediate' | 'advanced' | null;
  created_at: string;
  updated_at: string;
}

export interface UserModuleProgress {
  id: string;
  user_id: string;
  module_id: string;
  progress: number;
  completed: boolean;
  last_accessed: string;
  created_at: string;
  updated_at: string;
}
