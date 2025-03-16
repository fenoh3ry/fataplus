import React from 'react'; import { cn } from '../../lib/utils/cn'; import { ButtonProps } from '../../types'; export default function Button({ children, className, variant = 'primary', ...props }: ButtonProps): React.ReactElement { return ( <button className={cn( 'px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2', { 'bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500': variant === 'primary', 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500': variant === 'secondary', 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500': variant === 'danger', }, className )} {...props}> {children} </button> ); }
