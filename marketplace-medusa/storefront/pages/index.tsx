import React, { useState } from 'react';
import Head from 'next/head';
import ProductCard from '../components/ProductCard';
import SearchFilter from '../components/SearchFilter';
import { useCart } from '../contexts/CartContext';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  // This would be replaced with actual API calls to Medusa
  const products = [
    {
      id: 1,
      title: "Organic Rice (5kg)",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendor: "Rakoto Farms",
      location: "Antananarivo",
      category: "Grains"
    },
    {
      id: 2,
      title: "Fresh Tomatoes (1kg)",
      price: 3.49,
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendor: "Soamiely Produce",
      location: "Toamasina",
      category: "Vegetables"
    },
    {
      id: 3,
      title: "Vanilla Beans (50g)",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1611411704476-9a1bf244d7b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendor: "Soa Spices",
      location: "Sambava",
      category: "Spices"
    }
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
  };

  // Filter products based on search query and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Fataplus Marketplace</title>
        <meta name="description" content="Buy and sell agricultural products from Malagasy farmers" />
      </Head>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Agricultural Marketplace</h1>
      
      <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found. Try a different search or category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              vendor={product.vendor}
              location={product.location}
            />
          ))}
        </div>
      )}
    </div>
  );
}