import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/src/components/SectionHeading';
import { Linkedin, Mail, Twitter } from 'lucide-react';

const leaders = [
  {
    name: 'Osman Malik',
    role: 'Founder and Managing Director',
    image: 'https://picsum.photos/seed/osman/400/400',
    bio: 'Visionary leader with 20+ years in tech strategy and global operations.'
  },
  {
    name: 'Saqib Naseer',
    role: 'Head of Staff Operations',
    image: 'https://picsum.photos/seed/saqib/400/400',
    bio: 'Expert in talent acquisition and building high-performance remote teams.'
  },
  {
    name: 'Zain Shah',
    role: 'Founder and CTO',
    image: 'https://picsum.photos/seed/zain/400/400',
    bio: 'Technical architect specialized in cloud-native systems and AI integration.'
  }
];

const values = [
  { title: 'Passionate', desc: 'We are driven by a deep love for technology and its power to solve complex problems.' },
  { title: 'Respectful', desc: 'We value diversity and foster an inclusive environment for our global teams.' },
  { title: 'Ownership', desc: 'We take full responsibility for our work and the success of our clients.' },
  { title: 'Unified', desc: 'We operate as one team, bridging the gap between offshore and onshore seamlessly.' }
];

import { GradientBackground } from '@/src/components/GradientBackground';

export default function About() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <GradientBackground />
        <div className="absolute inset-0 bg-mesh opacity-10 z-1" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            centered
            subtitle="Our Story"
            title="People, Purpose, Process"
            description="HexagonTech.ai was founded with a simple mission: to connect world-class technical talent with businesses that need to scale efficiently."
          />
          
          <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="https://picsum.photos/seed/team/1200/600"
              alt="HexagonTech Team"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            subtitle="Our Values"
            title="The Principles That Drive Us"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center"
              >
                <h3 className="text-xl font-bold text-brand-600 mb-4">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            subtitle="Leadership"
            title="Meet the Visionaries"
            description="Our leadership team brings decades of combined experience in software engineering and global talent management."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leaders.map((leader, idx) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="aspect-square rounded-3xl overflow-hidden mb-6 relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8 gap-4">
                    <a href="#" className="p-2 rounded-full bg-white text-brand-600 hover:bg-brand-50 transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-white text-brand-600 hover:bg-brand-50 transition-colors">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-1">{leader.name}</h3>
                <div className="text-brand-600 font-bold text-sm uppercase tracking-wider mb-4">{leader.role}</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
