import React from 'react';
import { Globe, Users, TrendingDown, Clock } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Global Offices', value: 2, suffix: '', icon: Globe },
  { label: 'Customer Satisfaction', value: 100, suffix: '%', icon: Users },
  { label: 'Cost Savings', value: 70, suffix: '%', icon: TrendingDown },
  { label: 'Avg Response Time', value: 3, suffix: 'm', icon: Clock },
];

export function StatsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center group hover:border-brand-500/30 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-100 text-brand-600 mb-6 group-hover:scale-110 transition-transform">
                <stat.icon size={24} />
              </div>
              <div className="text-4xl font-display font-bold text-slate-900 mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-medium text-slate-600 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
