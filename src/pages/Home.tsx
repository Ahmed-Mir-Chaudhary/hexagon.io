import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle2, Play } from 'lucide-react';
import { SectionHeading } from '@/src/components/SectionHeading';
import { StatsSection } from '@/src/components/StatsSection';
import { ServiceCard } from '@/src/components/ServiceCard';
import { CaseStudyCard } from '@/src/components/CaseStudyCard';
import { BlogCard } from '@/src/components/BlogCard';
import { PricingCard } from '@/src/components/PricingCard';
import { FAQAccordion } from '@/src/components/FAQAccordion';
import { GradientBackground } from '@/src/components/GradientBackground';
import { AnimatedCounter } from '@/src/components/AnimatedCounter';
import { services } from '@/src/data/services';
import { caseStudies } from '@/src/data/case-studies';
import { blogPosts } from '@/src/data/blog';
import { faqs } from '@/src/data/faqs';
import { industries } from '@/src/data/industries';
import { cn, slugify } from '@/src/lib/utils';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-28 pb-8 lg:pt-36 lg:pb-12">
        <GradientBackground />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-transparent via-transparent to-slate-950/10 pointer-events-none z-1" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-left max-w-3xl mr-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-sm font-bold mb-4"
            >
              <Star size={16} className="fill-brand-600" />
              Rated 5 out of 5 from 15 reviews
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
            >
              Impactful Solutions for <span className="text-gradient">Data, Cloud & Software</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed"
            >
              We source, hire and manage the best offshore technical talent. 
              Hire remote developers and engineers by the day, week or month.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-start gap-4"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white font-bold rounded-2xl shadow-xl shadow-brand-500/25 hover:bg-brand-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Schedule a Free Consultation <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                View Services
              </Link>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* Free Trial Banner */}
      <section className="bg-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2 text-white">
            <CheckCircle2 size={20} className="text-brand-200 shrink-0" />
            <span className="font-semibold">Hire and pay nothing for the first 7 days. Zero cost. Zero commitment.</span>
          </div>
          <Link to="/contact" className="shrink-0 px-6 py-2.5 bg-white text-brand-600 font-bold rounded-full hover:bg-brand-50 transition-colors text-sm shadow-lg">
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Why Staff Augmentation */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-brand-600/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            centered
            light
            subtitle="Why Staff Augmentation"
            title="The Smart Way to Scale Your Tech Team"
            description="Bridge the talent gap with our flexible, cost-effective, and high-quality engineering solutions."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Time + Cost Saving', desc: 'Reduce hiring time by 70% and operational costs by up to 60% compared to local recruitment.', icon: 'Clock' },
              { title: 'Tailored Teams', desc: 'We handpick developers who match your technical requirements and company culture perfectly.', icon: 'Target' },
              { title: 'No Geo Limits', desc: 'Access the top 1% of technical talent globally without being restricted by your local market.', icon: 'Globe' },
              { title: 'Flexible Cost', desc: 'Pay only for what you need. Scale your team up or down with just 30 days notice.', icon: 'DollarSign' },
              { title: 'Full Control', desc: 'The developers work directly with you, following your processes and using your tools.', icon: 'Settings' },
              { title: 'Scalable Workforce', desc: 'From a single developer to a full-squad, we grow as your business requirements evolve.', icon: 'TrendingUp' },
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-brand-500/50 transition-all group backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-900/30 text-brand-400 flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  {/* Dynamic icon loading would go here */}
                  <Star size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <SectionHeading
              className="mb-0"
              subtitle="Our Expertise"
              title="Comprehensive Tech Solutions"
              description="From staff augmentation to full-cycle software development, we've got you covered."
            />
            <Link
              to="/services"
              className="px-6 py-3 font-bold text-brand-600 border border-brand-200 rounded-2xl hover:bg-brand-50 transition-all"
            >
              View All Services
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
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

      {/* Industries Preview */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            centered
            light
            subtitle="Industries We Serve"
            title="Tailored Solutions for Every Sector"
            description="We bring deep domain expertise to help businesses across various industries thrive in the digital age."
          />
          
          {/* Honeycomb hexagon grid - absolute positioned for pixel-perfect nesting */}
          {(() => {
            const hexW = 148;
            const hexH = 130;
            const gap = 6;
            const colStep = hexW + gap;
            const rowStep = hexH * 0.75 + gap;

            // All items including Contact Us CTA
            const allItems = [
              ...industries.map((name) => ({ label: name, href: `/industries/${slugify(name)}`, type: 'industry' as const })),
              { label: 'Contact Us', href: '/contact', type: 'cta' as const },
            ];

            // Colored hexagon indices (0-based) for visual variety
            const coloredIndices = new Set([1, 4, 6, 7, 10, 13]);

            // Layout: 3, 4, 5, 4 = 16 items, symmetric diamond
            const gridLayout = [
              { items: allItems.slice(0, 3), cols: [1, 2, 3], offset: false },
              { items: allItems.slice(3, 7), cols: [0, 1, 2, 3], offset: true },
              { items: allItems.slice(7, 12), cols: [0, 1, 2, 3, 4], offset: false },
              { items: allItems.slice(12, 16), cols: [0, 1, 2, 3], offset: true },
            ];

            const totalW = 5 * colStep + colStep / 2;
            const totalH = gridLayout.length * rowStep + hexH * 0.25;

            return (
              <div
                className="hidden md:block relative mx-auto"
                style={{ width: `${totalW}px`, height: `${totalH}px` }}
              >
                {gridLayout.map((row, rowIdx) =>
                  row.items.map((item, i) => {
                    const col = row.cols[i];
                    const x = col * colStep + (row.offset ? colStep / 2 : 0);
                    const y = rowIdx * rowStep;
                    const globalIdx = gridLayout.slice(0, rowIdx).reduce((a, r) => a + r.items.length, 0) + i;
                    const isColored = coloredIndices.has(globalIdx);
                    const isCta = item.type === 'cta';

                    const outerBg = isCta
                      ? 'bg-brand-500 group-hover:bg-brand-400'
                      : isColored
                        ? 'bg-brand-600/30 group-hover:bg-brand-400/50'
                        : 'bg-white/10 group-hover:bg-brand-400/40';
                    const innerBg = isCta
                      ? 'bg-brand-600 group-hover:bg-brand-500'
                      : isColored
                        ? 'bg-brand-900/60 group-hover:bg-brand-600/30'
                        : 'bg-slate-900 group-hover:bg-brand-600/20';
                    const textColor = isCta
                      ? 'text-white font-extrabold text-sm'
                      : isColored
                        ? 'text-brand-200 group-hover:text-white'
                        : 'text-slate-300 group-hover:text-white';

                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: globalIdx * 0.04, type: 'spring', stiffness: 160 }}
                        className="absolute"
                        style={{ left: `${x}px`, top: `${y}px`, width: `${hexW}px`, height: `${hexH}px` }}
                      >
                        <Link
                          to={item.href}
                          className="group block w-full h-full relative"
                        >
                          <div
                            className={`w-full h-full flex items-center justify-center ${outerBg} transition-all duration-300`}
                            style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                          >
                            <div
                              className={`absolute inset-[2px] flex items-center justify-center ${innerBg} transition-all duration-300`}
                              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                            >
                              <span className={`text-xs font-bold tracking-wide transition-colors text-center px-3 leading-tight ${textColor}`}>
                                {item.label}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })
                )}
              </div>
            );
          })()}

          {/* Mobile: simple wrap */}
          <div className="flex md:hidden flex-wrap justify-center gap-3">
            {industries.map((industry, idx) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
              >
                <Link
                  to={`/industries/${slugify(industry)}`}
                  className="group block"
                >
                  <div
                    className="w-28 h-24 flex items-center justify-center bg-white/10 group-hover:bg-brand-400/30 transition-all duration-300 relative"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <div
                      className="absolute inset-[2px] flex items-center justify-center bg-slate-900 group-hover:bg-brand-700/30 transition-all duration-300"
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    >
                      <span className="text-[10px] font-bold text-slate-300 group-hover:text-white text-center px-3 leading-tight">
                        {industry}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-brand-600 rounded-full hover:bg-brand-500 transition-all shadow-lg shadow-brand-500/20"
            >
              Explore Industry Solutions <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            subtitle="Insights & Success"
            title="Featured Case Studies & Blogs"
          />
          
          <div className="space-y-16">
            {/* Case Studies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.slice(0, 2).map((study) => (
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
            
            {/* Blogs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {blogPosts.map((post) => (
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
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-brand-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Successful Projects', value: 3000, suffix: '+' },
              { label: 'Countries Supported', value: 23, suffix: '+' },
              { label: 'Active Clients', value: 250, suffix: '+' },
              { label: 'Years of Experience', value: 15, suffix: '+' },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-5xl md:text-6xl font-display font-bold mb-4">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </div>
                <p className="text-brand-100 font-medium uppercase tracking-widest text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview - Commented out for now
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            subtitle="Pricing Plans"
            title="Flexible Engagement Models"
            description="Choose the plan that best fits your project requirements and budget."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              tier="Starter"
              price="$2,500"
              description="Perfect for small projects or specific task-based needs."
              features={['Part-time developer (20h/week)', 'Direct communication', 'Weekly progress reports', 'Standard support']}
              cta="Get Started"
            />
            <PricingCard
              popular
              tier="Growth"
              price="$4,500"
              description="Ideal for growing teams needing dedicated full-time support."
              features={['Full-time developer (40h/week)', 'Priority onboarding', 'Daily stand-ups', 'Dedicated account manager', 'Replacement guarantee']}
              cta="Hire Now"
            />
            <PricingCard
              tier="Enterprise"
              price="Custom"
              description="For large-scale operations requiring multiple dedicated squads."
              features={['Multiple dedicated squads', 'Custom SLA & Security', 'On-site visits available', '24/7 Premium support', 'Custom billing options']}
              cta="Talk to Sales"
            />
          </div>
        </div>
      </section>
      */}

      {/* FAQ Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            subtitle="FAQ"
            title="Common Questions"
            description="Everything you need to know about working with HexagonTech.ai"
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-12 md:p-20 rounded-[3rem] bg-slate-900 text-white overflow-hidden text-center">
            <div className="absolute inset-0 bg-mesh opacity-20" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to build your team?</h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                Join 250+ companies that trust HexagonTech.ai to scale their engineering capabilities.
                Start your 7-day free trial today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-10 py-5 bg-brand-600 text-white font-bold rounded-2xl shadow-xl shadow-brand-500/25 hover:bg-brand-700 hover:-translate-y-1 transition-all"
                >
                  Get Started Now
                </Link>
                <Link
                  to="/about"
                  className="w-full sm:w-auto px-10 py-5 bg-white/10 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/20 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
