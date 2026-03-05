import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/src/components/SectionHeading';
import { ServiceCard } from '@/src/components/ServiceCard';
import { services } from '@/src/data/services';
import { cn } from '@/src/lib/utils';
import { Shield, Zap, Award, CheckCircle2 } from 'lucide-react';

import { GradientBackground } from '@/src/components/GradientBackground';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'All' | 'Engineering' | 'Data' | 'Cloud' | 'QA' | 'AI'>('All');
  const categories = ['All', 'Engineering', 'Data', 'Cloud', 'QA', 'AI'];

  const filteredServices = activeTab === 'All' 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <GradientBackground />
        <div className="absolute inset-0 bg-mesh opacity-10 z-1" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            centered
            subtitle="Our Services"
            title="World-Class Technical Expertise"
            description="We provide a wide range of services to help you build, scale, and optimize your digital products."
          />

          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat as any)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold transition-all",
                  activeTab === cat
                    ? "bg-brand-600 text-white shadow-lg shadow-brand-500/25"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-brand-500/50"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            subtitle="Engagement Models"
            title="How We Work Together"
            description="Choose the model that best aligns with your project scope and management style."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Staff Augmentation',
                desc: 'Individual developers or engineers who join your existing team and work under your direct management.',
                features: ['Direct management', 'Full-time commitment', 'Seamless integration', 'Flexible scaling']
              },
              {
                title: 'Dedicated Squad',
                desc: 'A self-managed team including PM, developers, and QA, focused entirely on your product roadmap.',
                features: ['Managed delivery', 'End-to-end ownership', 'Agile methodology', 'Regular reporting']
              },
              {
                title: 'Project Delivery',
                desc: 'Fixed-scope projects where we take full responsibility for delivering a specific outcome or product.',
                features: ['Fixed timeline', 'Defined budget', 'Milestone-based', 'Turnkey solution']
              }
            ].map((model, idx) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">{model.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">{model.desc}</p>
                <ul className="space-y-4">
                  {model.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={18} className="text-brand-600" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Quality */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                light
                subtitle="Security & Quality"
                title="Uncompromising Standards"
                description="We prioritize the security of your data and the quality of our code above all else."
              />
              <div className="space-y-8">
                {[
                  { title: 'Data Privacy', desc: 'Strict adherence to GDPR, HIPAA, and SOC2 standards to ensure your data is always protected.', icon: Shield },
                  { title: 'Code Quality', desc: 'Rigorous code reviews, automated testing, and continuous integration are part of our DNA.', icon: Award },
                  { title: 'Rapid Delivery', desc: 'Efficient workflows and agile practices allow us to deliver high-quality results at speed.', icon: Zap },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden">
                <img
                  src="https://picsum.photos/seed/security/800/800"
                  alt="Security and Quality"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 p-8 rounded-3xl bg-brand-600 shadow-2xl">
                <div className="text-4xl font-display font-bold mb-1">99.9%</div>
                <div className="text-brand-100 text-sm font-bold uppercase tracking-wider">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
