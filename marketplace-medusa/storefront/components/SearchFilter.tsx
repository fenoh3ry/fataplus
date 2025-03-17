import React, { useState } from 'react';

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilter: (category: string) => void;
  className?: string;
}

export default function SearchFilter({ onSearch, onFilter, className }: SearchFilterProps): React.ReactElement {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    'All Products',
    'Grains',
    'Vegetables',
    'Fruits',
    'Spices',
    'Dairy',
    'Other'
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className={`mb-8 ${className || ''}`}>
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-grow">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-brand-600 text-white p-1 rounded-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <select 
            className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
            onChange={(e) => onFilter(e.target.value)}
            defaultValue="All Products"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}