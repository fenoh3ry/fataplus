import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
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
    alert(`Added ${product.title} to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>{product.title} - Fataplus Marketplace</title>
        <meta name="description" content={`Buy ${product.title} from ${product.vendor}`} />
      </Head>
      
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
              className="bg-brand-600 text-white px-6 py-3 rounded-md font-medium hover:bg-brand-700 transition-colors"
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
  
  // In a real application, fetch the product from Medusa API
  // For now, we'll use mock data
  const mockProducts = [
    {
      id: '1',
      title: 'Organic Rice',
      description: 'Premium quality organic rice grown in the highlands of Madagascar. This rice is cultivated using traditional methods without chemical fertilizers or pesticides, resulting in a superior taste and texture.',
      price: 25.99,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8f