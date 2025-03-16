import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useCart } from '../../contexts/CartContext';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  vendor: string;
  location: string;
  category: string;
  stock: number;
}

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps): JSX.Element {
  const router = useRouter();
  const { addItem } = useCart();

  if (router.isFallback) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden bg-white shadow-md">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-cover"
          />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
          <p className="text-sm text-gray-500 mb-4">
            Sold by <span className="font-medium">{product.vendor}</span> • {product.location}
          </p>
          
          <div className="border-t border-b border-gray-200 py-4 my-4">
            <p className="text-gray-700 mb-4">{product.description}</p>
            
            <div className="flex items-center mb-2">
              <span className="text-gray-600 w-24">Category:</span>
              <span className="text-gray-900">{product.category}</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-gray-600 w-24">Stock:</span>
              <span className="text-gray-900">{product.stock} available</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-6">
            <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// This function gets called at request time
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params || {};
  
  // In a real application, fetch the product from an API or database
  // For now, we'll use mock data
  const mockProducts = [
    {
      id: '1',
      title: 'Organic Rice',
      description: 'Premium quality organic rice grown in the highlands of Madagascar. This rice is cultivated using traditional methods without chemical fertilizers or pesticides, resulting in a superior taste and texture.',
      price: 25.99,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      vendor: 'Highland Farms',
      location: 'Antananarivo',
      category: 'Grains',
      stock: 50,
    },
    {
      id: '2',
      title: 'Fresh Vanilla Beans',
      description: 'Premium Madagascar vanilla beans, known worldwide for their exceptional quality and flavor. These hand-picked vanilla beans are perfect for baking, making extracts, or adding to your favorite recipes.',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      vendor: 'Vanilla Cooperative',
      location: 'Sambava',
      category: 'Spices',
      stock: 25,
    },
    {
      id: '3',
      title: 'Organic Honey',
      description: 'Pure, raw honey collected from the diverse flora of Madagascar. This organic honey is unprocessed and unpasteurized, preserving all its natural enzymes, vitamins, and minerals.',
      price: 15.50,
      image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      vendor: 'Forest Beekeepers',
      location: 'Toamasina',
      category: 'Sweeteners',
      stock: 40,
    },
    {
      id: '4',
      title: 'Handcrafted Basket',
      description: 'Traditional handwoven basket made from sustainable materials by skilled artisans. Each basket is unique and showcases the rich cultural heritage and craftsmanship of Madagascar.',
      price: 45.00,
      image: 'https://images.unsplash.com/photo-1595408076683-d0fc2a0cb4d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      vendor: 'Artisan Collective',
      location: 'Fianarantsoa',
      category: 'Crafts',
      stock: 15,
    },
    {
      id: '5',
      title: 'Coffee Beans',
      description: 'Specialty coffee beans grown in the rich volcanic soil of Madagascar. These beans are carefully harvested and roasted to perfection, offering a smooth, full-bodied flavor with notes of chocolate and citrus.',
      price: 18.75,
      image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      vendor: 'Mountain Coffee Growers',
      location: 'Antsiranana',
      category: 'Beverages',
      stock: 30,
    },
    {
      id: '6',
      title: 'Organic Cocoa Powder',
      description: 'Premium organic cocoa powder made from Madagascar\'s finest cocoa beans. Known for its rich flavor and high quality, this cocoa powder is perfect for baking, hot chocolate, or adding to smoothies.',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      vendor: 'Cocoa Cooperative',
      location: 'Ambanja',
      category: 'Baking',
      stock: 45,
    },
  ];

  const product = mockProducts.find(p => p.id === id);
  
  if (!product) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      product,
    },
  };
};