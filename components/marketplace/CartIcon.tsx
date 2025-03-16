import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../../contexts/CartContext';

const CartIcon: React.FC = () => {
  const { items, itemCount, total, removeItem } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Shopping cart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50 overflow-hidden">
          <div className="p-3 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-700">Your Cart</h3>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {items.length > 0 ? (
              <ul className="py-2">
                {items.map((item) => (
                  <li key={item.id} className="flex px-4 py-3 border-b border-gray-100">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-3 flex flex-1 flex-col">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3 className="text-sm">{item.title}</h3>
                        <p className="ml-1">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {item.quantity}</p>
                        <button
                          type="button"
                          className="font-medium text-red-600 hover:text-red-500"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeItem(item.id);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="py-6 px-4 text-center text-gray-500">
                Your cart is empty
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-gray-200 px-4 py-3">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-3">
                <p>Subtotal</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <Link href="/cart">
                <a
                  className="block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  View Cart
                </a>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartIcon; 