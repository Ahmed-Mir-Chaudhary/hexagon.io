import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/src/components/SectionHeading';
import { CaseStudyCard } from '@/src/components/CaseStudyCard';
import { caseStudies } from '@/src/data/case-studies';
import { cn } from '@/src/lib/utils';

import { GradientBackground } from '@/src/components/GradientBackground';

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('All');
  const industries = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.industry)))];

  const filteredStudies = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(cs => cs.industry === activeFilter);

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <GradientBackground />
        <div className="absolute inset-0 bg-mesh opacity-10 z-1" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            centered
            subtitle="Case Studies"
            title="Real Results for Real Businesses"
            description="Explore how we've helped companies across the globe overcome technical challenges and achieve their business goals."
          />

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold transition-all",
                  activeFilter === industry
                    ? "bg-brand-600 text-white shadow-lg shadow-brand-500/25"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-brand-500/50"
                )}
              >
                {industry}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                title={study.title}
                description={study.description}
                industry={study.industry}
                image={study.image}
                slug={study.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-12 md:p-20 rounded-[3rem] bg-brand-600 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh opacity-20" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Have a similar project in mind?</h2>
              <p className="text-lg text-brand-100 mb-10">
                Let's discuss how our expertise can help you achieve similar results for your business.
              </p>
              <button className="px-10 py-5 bg-white text-brand-600 font-bold rounded-2xl hover:bg-brand-50 transition-all shadow-xl">
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
