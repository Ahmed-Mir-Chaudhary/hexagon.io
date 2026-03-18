import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/src/components/SectionHeading';
import { Linkedin, Mail, Twitter, Hexagon, Cloud, Code2, Database, Users, Cpu } from 'lucide-react';

const leaders = [
  {
    name: 'Muhammad Imran Shafiq',
    role: 'Founder and Managing Director',
    image: '/images/ceo.jpg',
    bio: 'Visionary leader with 20+ years in tech strategy and global operations.'
  },
  {
    name: 'Saqib Naseer',
    role: 'Head of Staff Operations',
    image: '/images/saqib.png',
    bio: 'Expert in talent acquisition and building high-performance remote teams.'
  },
  {
    name: 'Syed Zaheer',
    role: 'Founder and CTO',
    image: '/images/cto.webp',
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
      <section className="pt-32 pb-12 relative overflow-hidden">
        <GradientBackground />
        <div className="absolute inset-0 bg-mesh opacity-10 z-1" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-sm font-bold mb-6"
              >
                Our Story
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
              >
                People, Purpose, <span className="text-gradient">Process</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 leading-relaxed mb-8"
              >
                HexagonTech.ai was founded with a simple mission: to connect world-class
                technical talent with businesses that need to scale efficiently.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                {['Data Engineering', 'Cloud Solutions', 'Staff Augmentation', 'AI & ML'].map((tag, i) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right side - Animated bento grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-full max-w-lg mx-auto lg:ml-auto"
            >
              {/* Row 1 */}
              <div className="flex gap-3 mb-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex-[2] p-5 rounded-2xl bg-white shadow-lg border border-slate-100"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                      <Users size={18} />
                    </div>
                    <span className="font-bold text-slate-900 text-sm">250+ Clients</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">Trusted across 23+ countries worldwide</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex-1 p-4 rounded-2xl bg-brand-600 shadow-lg flex flex-col items-center justify-center text-white gap-1.5"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Hexagon size={28} className="fill-brand-500" strokeWidth={1.5} />
                  </motion.div>
                  <span className="text-[10px] font-bold opacity-80 tracking-wider">15+ YRS</span>
                </motion.div>
              </div>

              {/* Row 2 */}
              <div className="flex gap-3 mb-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex-1 py-5 rounded-2xl bg-slate-900 shadow-lg text-white flex flex-col items-center justify-center gap-1.5"
                >
                  <Cloud size={22} className="text-brand-400" />
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider">CLOUD</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex-1 py-5 rounded-2xl bg-white shadow-lg border border-slate-100 flex flex-col items-center justify-center gap-1.5"
                >
                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
                    <Database size={22} className="text-brand-600" />
                  </motion.div>
                  <span className="text-[10px] font-bold text-slate-500 tracking-wider">DATA</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex-1 py-5 rounded-2xl bg-white shadow-lg border border-slate-100 flex flex-col items-center justify-center gap-1.5"
                >
                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
                    <Code2 size={22} className="text-brand-600" />
                  </motion.div>
                  <span className="text-[10px] font-bold text-slate-500 tracking-wider">SOFTWARE</span>
                </motion.div>
              </div>

              {/* Row 3 */}
              <div className="flex gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex-[2] px-5 py-4 rounded-2xl bg-gradient-to-r from-brand-50 to-white shadow-lg border border-brand-100 flex items-center"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-1.5 shrink-0">
                      {['O', 'S', 'Z', '+'].map((letter) => (
                        <div key={letter} className="w-7 h-7 rounded-full bg-brand-200 border-2 border-white flex items-center justify-center">
                          <span className="text-[10px] font-bold text-brand-700">{letter}</span>
                        </div>
                      ))}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-900">3,000+ Projects</p>
                      <p className="text-[10px] text-slate-500">World-class engineering</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="flex-1 py-4 rounded-2xl bg-slate-900 shadow-lg flex flex-col items-center justify-center gap-1.5"
                >
                  <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                    <Cpu size={22} className="text-brand-400" />
                  </motion.div>
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider">AI/ML</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
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
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center"
              >
                <h3 className="text-xl font-bold text-brand-600 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-50">
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
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-1">{leader.name}</h3>
                <div className="text-brand-600 font-bold text-sm uppercase tracking-wider mb-4">{leader.role}</div>
                <p className="text-slate-600 leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
