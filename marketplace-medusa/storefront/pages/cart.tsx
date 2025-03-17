import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useCart } from '../contexts/CartContext';

export default function CartPage() {
  const { items, updateQuantity, removeItem, total } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Your Cart - Fataplus Marketplace</title>
        <meta name="description" content="View and manage your shopping cart" />
      </Head>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-soft">
          <p className="text-gray-500 mb-6">Your cart is empty</p>
          <Link href="/" className="bg-brand-600 text-white px-6 py-3 rounded-md font-medium hover:bg-brand-700 transition-colors">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-soft overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {items.map((item) => (
                  <li key={item.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center">
                    <div className="h-24 w-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="sm:ml-4 flex-grow mt-4 sm:mt-0">
                      <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                      <p className="text-brand-600 font-bold mt-1">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex items-center">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-4 text-gray-400 hover:text-red-500"
                        aria-label="Remove item"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-soft p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              <div className="border-t border-b border-gray-200 py-4 my-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900 font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900 font-medium">Calculated at checkout</span>
                </div>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-lg font-bold text-brand-600">${total.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-brand-600 text-white py-3 rounded-md font-medium hover:bg-brand-700 transition-colors"
                onClick={() => alert('Checkout functionality will be implemented with Medusa')}
              >
                Proceed to Checkout
              </button>
              <Link href="/" className="block text-center mt-4 text-brand-600 hover:text-brand-700">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}