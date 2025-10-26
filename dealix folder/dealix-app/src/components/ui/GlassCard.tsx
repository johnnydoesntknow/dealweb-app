import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  animate?: boolean;
}

export const GlassCard = ({ 
  children, 
  className, 
  hover = false, 
  onClick,
  animate = true 
}: GlassCardProps) => {
  const baseClasses = 'glass-card p-6';
  const hoverClasses = hover ? 'glass-card-hover cursor-pointer' : '';
  
  const CardComponent = animate ? motion.div : 'div';
  
  return (
    <CardComponent
      className={clsx(baseClasses, hoverClasses, className)}
      onClick={onClick}
      {...(animate && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
      })}
    >
      {children}
    </CardComponent>
  );
};