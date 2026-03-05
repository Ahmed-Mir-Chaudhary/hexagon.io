import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface BlogCardProps {
  key?: React.Key;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
  className?: string;
}

export function BlogCard({ title, excerpt, date, author, category, image, slug, className }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        "group flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-brand-500/30 transition-all duration-300",
        className
      )}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
            {category}
          </span>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Calendar size={12} />
            {date}
          </div>
        </div>
        <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 line-clamp-2 group-hover:text-brand-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3 leading-relaxed flex-1">
          {excerpt}
        </p>
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-brand-600 transition-colors"
        >
          Read Article <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
