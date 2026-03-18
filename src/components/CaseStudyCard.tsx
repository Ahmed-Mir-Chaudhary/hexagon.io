import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface CaseStudyCardProps {
  key?: React.Key;
  title: string;
  description: string;
  industry: string;
  image: string;
  slug: string;
  className?: string;
}

export function CaseStudyCard({ title, description, industry, image, slug, className }: CaseStudyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500",
        className
      )}
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/90 text-brand-600 rounded-full backdrop-blur-sm">
            {industry}
          </span>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-brand-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 mb-8 line-clamp-2 leading-relaxed">
          {description}
        </p>
        <Link
          to={`/case-studies/${slug}`}
          className="flex items-center justify-between w-full p-4 rounded-2xl bg-slate-50 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300"
        >
          <span className="font-bold text-sm">View Case Study</span>
          <ArrowUpRight size={20} />
        </Link>
      </div>
    </motion.div>
  );
}
