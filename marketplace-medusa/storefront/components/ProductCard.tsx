import React from "react";
import Link from "next/link";
import { useCart } from "../contexts/CartContext";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  vendor: string;
  location: string;
  className?: string;
}

export default function ProductCard({ id, title, price, image, vendor, location, className }: ProductCardProps): React.ReactElement {
  const { addItem } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: id.toString(),
      title,
      price,
      image,
    });
  };
  
  return (
    <div className={`bg-white rounded-lg shadow-soft overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1 ${className || ''}`}>
      <Link href={`/product/${id}`} className="block">
        <div className="h-48 bg-gray-200">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-brand-600 font-bold mt-1">${price.toFixed(2)}</p>
          <div className="mt-3 flex items-center text-sm text-gray-500">
            <span>{vendor}</span>
            <span className="mx-2">•</span>
            <span>{location}</span>
          </div>
          <button 
            onClick={handleAddToCart}
            className="mt-4 w-full bg-brand-600 text-white py-2 px-4 rounded-md hover:bg-brand-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
}