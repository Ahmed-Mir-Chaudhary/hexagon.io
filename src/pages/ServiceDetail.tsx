import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '@/src/data/services';
import { SectionHeading } from '@/src/components/SectionHeading';
import { ArrowLeft, CheckCircle2, Clock, Cpu, Layout, ArrowRight } from 'lucide-react';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) return <Navigate to="/404" />;

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-20 pb-32 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 mb-12 hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} /> Back to Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-6">
                {service.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                {service.content.overview}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-brand-600 text-white font-bold rounded-2xl shadow-xl shadow-brand-500/25 hover:bg-brand-700 transition-all"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={`https://picsum.photos/seed/${service.slug}/800/600`}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
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
                <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-8">What You Get</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.content.whatYouGet.map((item, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex gap-4">
                      <CheckCircle2 size={24} className="text-brand-600 shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-8">Sample Deliverables</h2>
                <div className="space-y-4">
                  {service.content.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                      <Layout size={20} className="text-brand-600" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Sidebar) */}
            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-slate-900 text-white">
                <h3 className="text-xl font-bold mb-6">Service Details</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Clock size={20} className="text-brand-400 shrink-0 mt-1" />
                    <div>
                      <div className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">Timeline</div>
                      <div className="font-medium">{service.content.timeline}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Cpu size={20} className="text-brand-400 shrink-0 mt-1" />
                    <div>
                      <div className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">Tech Stack</div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {service.content.techStack.map(tech => (
                          <span key={tech} className="px-3 py-1 rounded-lg bg-white/10 text-xs font-bold">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="mt-10 w-full py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  Get a Quote <ArrowRight size={18} />
                </Link>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Need Help?</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                  Not sure if this is the right service for you? Talk to our experts for a free consultation.
                </p>
                <Link to="/contact" className="text-brand-600 font-bold text-sm hover:underline">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
