import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface ServiceCardProps {
  key?: React.Key;
  title: string;
  description: string;
  icon: string;
  slug: string;
  className?: string;
}

export function ServiceCard({ title, description, icon, slug, className }: ServiceCardProps) {
  const IconComponent = (Icons as any)[icon] || Icons.Code;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        "group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-brand-500/10",
        className
      )}
    >
      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
        <IconComponent size={28} />
      </div>
      <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3 leading-relaxed">
        {description}
      </p>
      <Link
        to={`/services/${slug}`}
        className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:gap-3 transition-all"
      >
        Learn More <Icons.ArrowRight size={16} />
      </Link>
    </motion.div>
  );
}
