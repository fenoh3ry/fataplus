import React from 'react'; import { cn } from '../../lib/utils/cn'; import { CardProps } from '../../types'; export default function Card({ children, className, ...props }: CardProps): React.ReactElement { return ( <div className={cn( 'bg-white rounded-lg shadow-soft p-6 animate-fade-in', className )} {...props}> {children} </div> ); }
