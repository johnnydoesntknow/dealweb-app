import type { ReactNode } from 'react';
import { clsx } from 'clsx';

interface BadgeTagProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  className?: string;
}

export const BadgeTag = ({ 
  children, 
  variant = 'default',
  className 
}: BadgeTagProps) => {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium';
  
  const variantClasses = {
    default: 'bg-white/10 text-white border border-white/20',
    success: 'bg-dealix-electric-green/20 text-dealix-electric-green border border-dealix-electric-green/30',
    warning: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
    error: 'bg-red-500/20 text-red-400 border border-red-500/30',
    info: 'bg-dealix-aqua-green/20 text-dealix-aqua-green border border-dealix-aqua-green/30',
  };
  
  return (
    <span className={clsx(baseClasses, variantClasses[variant], className)}>
      {children}
    </span>
  );
};