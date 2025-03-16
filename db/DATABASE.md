# Fataplus AI Database Schema

This document outlines the database schema used for the Fataplus AI platform, an agritech ecosystem designed for Malagasy farmers.

## Overview

The database is designed using Supabase, a PostgreSQL-based backend-as-a-service platform. It incorporates Row Level Security (RLS) to ensure data privacy and security based on user authentication.

## Tables

### user_profiles

Extends the default Supabase auth.users table with additional profile information.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key, references auth.users(id) |
| full_name | TEXT | User's full name |
| avatar_url | TEXT | URL to user's avatar image |
| phone | TEXT | Contact phone number |
| location | TEXT | User's location/region |
| farmer_type | TEXT | Type of farming (crop, livestock, etc.) |
| bio | TEXT | Short user biography |
| created_at | TIMESTAMP | When the profile was created |
| updated_at | TIMESTAMP | When the profile was last updated |

### farms

Stores information about farms registered by users.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| user_id | UUID | References auth.users(id) |
| name | TEXT | Name of the farm |
| location | TEXT | Farm location |
| latitude | NUMERIC | Geographic latitude |
| longitude | NUMERIC | Geographic longitude |
| size | NUMERIC | Size of the farm (in hectares) |
| main_crop | TEXT | Main crop grown on the farm |
| description | TEXT | Description of the farm |
| created_at | TIMESTAMP | When the farm was registered |
| updated_at | TIMESTAMP | When the farm details were last updated |

### products

Marketplace products offered by farmers.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| user_id | UUID | References auth.users(id) |
| farm_id | UUID | References farms(id) |
| title | TEXT | Product title |
| description | TEXT | Product description |
| price | NUMERIC | Price per unit |
| image_url | TEXT | Product image URL |
| category | TEXT | Product category |
| available_quantity | INTEGER | Quantity available for sale |
| unit | TEXT | Unit of measurement (kg, piece, etc.) |
| is_organic | BOOLEAN | Whether the product is organic |
| created_at | TIMESTAMP | When the product was listed |
| updated_at | TIMESTAMP | When the product was last updated |

### orders

User orders from the marketplace.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| user_id | UUID | References auth.users(id) |
| status | TEXT | Order status (pending, processing, shipped, delivered, cancelled) |
| total_amount | NUMERIC | Total order amount |
| shipping_address | TEXT | Shipping address |
| created_at | TIMESTAMP | When the order was placed |
| updated_at | TIMESTAMP | When the order was last updated |

### order_items

Individual items within an order.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| order_id | UUID | References orders(id) |
| product_id | UUID | References products(id) |
| quantity | INTEGER | Quantity ordered |
| price_per_unit | NUMERIC | Price per unit at time of order |
| total_price | NUMERIC | Total price for this item |
| created_at | TIMESTAMP | When the item was added to the order |

### learning_modules

Educational content for farmers.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| title | TEXT | Module title |
| description | TEXT | Module description |
| content | TEXT | Module content (can be JSON or HTML) |
| image_url | TEXT | Featured image URL |
| order_index | INTEGER | Display order of modules |
| difficulty_level | TEXT | beginner, intermediate, advanced |
| created_at | TIMESTAMP | When the module was created |
| updated_at | TIMESTAMP | When the module was last updated |

### user_module_progress

Tracks user progress through learning modules.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| user_id | UUID | References auth.users(id) |
| module_id | UUID | References learning_modules(id) |
| progress | INTEGER | Percentage completed (0-100) |
| completed | BOOLEAN | Whether the module is fully completed |
| last_accessed | TIMESTAMP | When the user last accessed this module |
| created_at | TIMESTAMP | When the user started this module |
| updated_at | TIMESTAMP | When the progress was last updated |

## Row Level Security (RLS)

All tables have Row Level Security enabled with policies that:

1. Restrict read access to appropriate data (personal data only visible to the owner)
2. Restrict write operations to the data owner (user can only modify their own data)
3. Allow public access where appropriate (e.g., public product listings)

## Triggers

- `handle_new_user`: Automatically creates a user_profile record when a new user signs up 