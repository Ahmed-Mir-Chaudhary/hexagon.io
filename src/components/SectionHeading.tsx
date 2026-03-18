import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  centered = false,
  className,
  light = false
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "max-w-3xl mb-12 md:mb-16",
      centered && "mx-auto text-center",
      className
    )}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-bold uppercase tracking-widest text-brand-600 mb-4"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            "text-lg md:text-xl leading-relaxed",
            light ? "text-slate-300" : "text-slate-700"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
