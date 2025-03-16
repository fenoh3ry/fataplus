import React, { useState } from "react";
import Head from "next/head";
import ProductCard from "../components/marketplace/ProductCard";
import SearchFilter from "../components/marketplace/SearchFilter";

export default function MarketplacePage(): JSX.Element {
  const allProducts = [
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
    },
    {
      id: 4,
      title: "Cassava (2kg)",
      price: 4.50,
      image: "https://images.unsplash.com/photo-1591034906592-6a3be12fbd41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendor: "Andry Farms",
      location: "Fianarantsoa",
      category: "Vegetables"
    },
    {
      id: 5,
      title: "Coffee Beans (500g)",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendor: "Highland Coffee",
      location: "Antananarivo",
      category: "Other"
    },
    {
      id: 6,
      title: "Organic Honey (350ml)",
      price: 7.50,
      image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendor: "Bee Natural",
      location: "Mahajanga",
      category: "Other"
    },
    {
      id: 7,
      title: "Fresh Mangoes (1kg)",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendor: "Tropical Fruits",
      location: "Toliara",
      category: "Fruits"
    },
    {
      id: 8,
      title: "Zebu Milk (1L)",
      price: 2.50,
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendor: "Highland Dairy",
      location: "Antsirabe",
      category: "Dairy"
    }
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const filteredProducts = allProducts.filter(product => {
    // Filter by search query
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by category
    const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Head>
        <title>Marketplace - Fataplus AI</title>
        <meta name="description" content="Buy and sell agricultural products" />
      </Head>
      <div className="py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Agricultural Marketplace</h1>
        <p className="text-lg text-gray-600 mb-8">
          Connect with farmers and vendors across Madagascar to buy and sell agricultural products.
        </p>
        
        <SearchFilter
          onSearch={handleSearch}
          onFilter={handleFilter}
        />
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No products found matching your criteria.</p>
            <button
              className="mt-4 px-4 py-2 bg-brand-600 text-white rounded-md hover:bg-brand-700 transition-colors"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Products");
              }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
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
    </>
  );
}
