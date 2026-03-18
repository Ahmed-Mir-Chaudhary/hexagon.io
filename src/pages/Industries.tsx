import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/src/components/SectionHeading';
import { industries, industrySolutions } from '@/src/data/industries';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn, slugify } from '@/src/lib/utils';

import { GradientBackground } from '@/src/components/GradientBackground';

export default function Industries() {
  const [search, setSearch] = useState('');

  const filteredIndustries = industries.filter(i => 
    i.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <GradientBackground />
        <div className="absolute inset-0 bg-mesh opacity-10 z-1" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            centered
            subtitle="Industries"
            title="Expertise Across Sectors"
            description="We understand the unique challenges and opportunities within various industries, allowing us to deliver highly relevant solutions."
          />

          {/* Search */}
          <div className="max-w-2xl mx-auto relative mb-16">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search industries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none shadow-sm transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIndustries.map((industry, idx) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-brand-500/50 transition-all group"
              >
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 group-hover:text-brand-600 transition-colors">
                  {industry}
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Common Solutions</div>
                    <div className="flex flex-wrap gap-2">
                      {(industrySolutions[industry] || ["Staff Augmentation", "Custom Software"]).map(sol => (
                        <span key={sol} className="px-3 py-1 rounded-lg bg-slate-100 text-xs font-bold text-slate-600">
                          {sol}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={`/industries/${slugify(industry)}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:gap-3 transition-all"
                  >
                    View Industry Details <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden">
                <img
                  src="https://picsum.photos/seed/global/800/800"
                  alt="Global Impact"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
              <SectionHeading
                subtitle="Global Impact"
                title="Helping Businesses Scale Globally"
                description="Our offshore model isn't just about cost—it's about accessing world-class talent and building resilient, distributed teams that can operate 24/7."
              />
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-display font-bold text-brand-600 mb-2">23+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Countries Supported</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-brand-600 mb-2">15+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-brand-600 mb-2">250+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Active Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-brand-600 mb-2">3k+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
