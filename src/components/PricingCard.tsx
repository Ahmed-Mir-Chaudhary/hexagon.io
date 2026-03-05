import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'framer-motion';

interface PricingCardProps {
  tier: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export function PricingCard({ tier, price, description, features, cta, popular }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative p-8 rounded-3xl border transition-all duration-300",
        popular
          ? "bg-slate-900 text-white border-brand-500 shadow-2xl shadow-brand-500/20 scale-105 z-10"
          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-600 text-white text-xs font-bold uppercase tracking-widest rounded-full">
          Most Popular
        </div>
      )}
      <div className="mb-8">
        <h3 className={cn("text-lg font-bold mb-2", popular ? "text-brand-400" : "text-brand-600")}>
          {tier}
        </h3>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-4xl font-display font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-slate-600 dark:text-slate-400">/mo</span>}
        </div>
        <p className={cn("text-sm leading-relaxed", popular ? "text-slate-400" : "text-slate-700 dark:text-slate-400")}>
          {description}
        </p>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check size={18} className={cn("shrink-0", popular ? "text-brand-400" : "text-brand-600")} />
            <span className={popular ? "text-slate-300" : "text-slate-700 dark:text-slate-400"}>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={cn(
          "w-full py-4 rounded-2xl font-bold transition-all",
          popular
            ? "bg-brand-600 hover:bg-brand-700 text-white"
            : "bg-slate-100 dark:bg-slate-800 hover:bg-brand-600 hover:text-white text-slate-900 dark:text-white"
        )}
      >
        {cta}
      </button>
    </motion.div>
  );
}
