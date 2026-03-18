import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/src/components/SectionHeading';
import { BlogCard } from '@/src/components/BlogCard';
import { blogPosts } from '@/src/data/blog';
import { Search } from 'lucide-react';
import { cn } from '@/src/lib/utils';

import { GradientBackground } from '@/src/components/GradientBackground';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <GradientBackground />
        <div className="absolute inset-0 bg-mesh opacity-10 z-1" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            centered
            subtitle="Insights & News"
            title="The HexagonTech Blog"
            description="Expert perspectives on software engineering, data strategy, and the future of offshoring."
          />

          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold transition-all",
                  activeCategory === cat
                    ? "bg-brand-600 text-white shadow-lg shadow-brand-500/25"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-brand-500/50"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                author={post.author}
                category={post.category}
                image={post.image}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-12 md:p-20 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh opacity-20" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Stay ahead of the curve</h2>
                <p className="text-slate-400 text-lg">
                  Get the latest insights on tech trends and offshoring strategies delivered directly to your inbox.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/10 text-white outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                />
                <button className="px-8 py-4 bg-brand-600 text-white font-bold rounded-2xl hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/25">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
