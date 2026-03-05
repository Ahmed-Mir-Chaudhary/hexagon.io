import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/src/components/SectionHeading';
import { ContactForm } from '@/src/components/ContactForm';
import { Mail, Phone, MapPin, Clock, Calendar, Users } from 'lucide-react';

const offices = [
  {
    country: 'United Kingdom',
    address: '118 North Street, Leeds LS2 7PN',
    phone: '+44 20 8079 2080',
    email: 'uk@hexagontech.ai',
    image: 'https://picsum.photos/seed/leeds/400/300'
  },
  {
    country: 'Pakistan',
    address: 'Defence Raya Golf Resort, DHA Phase 6 Lahore',
    phone: '+92 42 3572 1234',
    email: 'pk@hexagontech.ai',
    image: 'https://picsum.photos/seed/lahore/400/300'
  }
];

const steps = [
  { title: 'Schedule a call', desc: 'Book a 15-minute discovery call with our solutions team.', icon: Calendar },
  { title: 'Determine requirements', desc: 'We analyze your technical needs and team structure.', icon: Users },
  { title: 'Build your team', desc: 'We handpick and onboard your new offshore developers.', icon: Clock }
];

import { GradientBackground } from '@/src/components/GradientBackground';

export default function Contact() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <GradientBackground />
        <div className="absolute inset-0 bg-mesh opacity-10 z-1" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            centered
            subtitle="Contact Us"
            title="Let's Build Something Great"
            description="Ready to scale your engineering team? Reach out to us today and discover how our offshore solutions can transform your business."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ContactForm />
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-8">What Happens Next?</h3>
                <div className="space-y-8">
                  {steps.map((step, idx) => (
                    <div key={step.title} className="flex gap-6">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900 text-white">
                <h3 className="text-xl font-bold mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  <a href="tel:+442080792080" className="flex items-center gap-4 hover:text-brand-400 transition-colors">
                    <Phone size={20} className="text-brand-400" />
                    <span className="font-medium">+44 20 8079 2080</span>
                  </a>
                  <a href="mailto:contact@hexagontech.ai" className="flex items-center gap-4 hover:text-brand-400 transition-colors">
                    <Mail size={20} className="text-brand-400" />
                    <span className="font-medium">contact@hexagontech.ai</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            subtitle="Our Locations"
            title="Global Presence, Local Support"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office) => (
              <div key={office.country} className="group rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.country}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">{office.country}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <MapPin size={18} className="text-brand-600 shrink-0 mt-1" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <Phone size={18} className="text-brand-600 shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <Mail size={18} className="text-brand-600 shrink-0" />
                      <span>{office.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
