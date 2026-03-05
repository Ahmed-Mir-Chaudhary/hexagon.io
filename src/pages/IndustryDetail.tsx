import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { industries, industrySolutions } from '@/src/data/industries';
import { caseStudies } from '@/src/data/case-studies';
import { services } from '@/src/data/services';
import { slugify } from '@/src/lib/utils';
import { GradientBackground } from '@/src/components/GradientBackground';
import { SectionHeading } from '@/src/components/SectionHeading';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Briefcase, Lightbulb, TrendingUp } from 'lucide-react';

export default function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  const industryName = industries.find(name => slugify(name) === slug);
  
  if (!industryName) {
    return <Navigate to="/industries" replace />;
  }
  
  const solutions = industrySolutions[industryName] || [];
  const relatedCaseStudies = caseStudies.filter(cs => cs.industry === industryName);
  
  // Find related services (this is a bit arbitrary, maybe just show top services)
  const relatedServices = services.slice(0, 3);

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <GradientBackground />
        <div className="absolute inset-0 bg-mesh opacity-10 z-1" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            centered
            subtitle="Industry Expertise"
            title={industryName}
            description={`Tailored technology solutions designed specifically for the ${industryName} sector.`}
          />
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                subtitle="Solutions"
                title={`How we help ${industryName}`}
                description="Our deep domain expertise allows us to address the unique challenges and opportunities in your industry."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {solutions.map((solution, idx) => (
                  <motion.div 
                    key={solution} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                  >
                    <CheckCircle2 className="text-brand-600 shrink-0" size={20} />
                    <span className="font-medium text-slate-700 dark:text-slate-300">{solution}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <img 
                  src={`https://picsum.photos/seed/${slug}/800/450`} 
                  alt={industryName}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Industry Impact</div>
                    <div className="text-xl font-display font-bold text-slate-900 dark:text-white">Proven Results</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              subtitle="Success Stories"
              title="Proven Results"
              description={`See how we've helped other organizations in the ${industryName} space.`}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {relatedCaseStudies.map((cs) => (
                <Link 
                  key={cs.id} 
                  to={`/case-studies/${cs.slug}`}
                  className="group block p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 transition-all shadow-sm hover:shadow-xl"
                >
                  <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                    <img src={cs.image} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-600 transition-colors">{cs.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">{cs.description}</p>
                  <div className="flex items-center text-brand-600 font-bold gap-2">
                    Read Case Study <ArrowRight size={18} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            subtitle="Our Expertise"
            title="Relevant Services"
            description="Explore our core services that drive innovation in your industry."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {relatedServices.map((service) => (
              <Link 
                key={service.id} 
                to={`/services/${service.slug}`}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">{service.description}</p>
                <div className="flex items-center text-brand-600 font-bold gap-2 text-sm">
                  Learn More <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to transform your {industryName} business?
          </h2>
          <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how our technical expertise can help you achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-brand-600 rounded-full font-bold hover:bg-brand-50 transition-colors shadow-lg"
            >
              Get Started
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
