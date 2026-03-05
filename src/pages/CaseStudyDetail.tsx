import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { caseStudies } from '@/src/data/case-studies';
import { SectionHeading } from '@/src/components/SectionHeading';
import { ArrowLeft, CheckCircle2, Layout, ArrowRight } from 'lucide-react';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies.find(s => s.slug === slug);

  if (!study) return <Navigate to="/404" />;

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-20 pb-32 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 mb-12 hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} /> Back to Case Studies
          </Link>
          
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-6">
              {study.industry}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              {study.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="-mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-900">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {study.content.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">The Challenge</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {study.content.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">Our Approach</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {study.content.approach}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">The Solution</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  {study.content.solution}
                </p>
                <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h4 className="text-xl font-bold mb-6">Key Impact Metrics</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {study.content.impact.map((item, idx) => (
                      <div key={idx} className="flex gap-3">
                        <CheckCircle2 size={20} className="text-brand-600 shrink-0 mt-1" />
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Sidebar) */}
            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-slate-900 text-white">
                <h3 className="text-xl font-bold mb-6">Project Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {study.content.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-lg bg-white/10 text-xs font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="mt-10 w-full py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  Start Your Project <ArrowRight size={18} />
                </Link>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Ready to Scale?</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                  Learn how we can help you achieve similar results with our dedicated engineering teams.
                </p>
                <Link to="/contact" className="text-brand-600 font-bold text-sm hover:underline">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
