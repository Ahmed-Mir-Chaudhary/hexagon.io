import React from 'react';
import { SectionHeading } from '@/src/components/SectionHeading';

export default function Terms() {
  return (
    <div className="pb-24">
      <section className="pt-20 pb-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Legal"
            title="Terms of Service"
            description="Last updated: March 05, 2026"
          />
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              By accessing or using the HexagonTech.ai website or services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
            
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white pt-4">1. Use of Services</h3>
            <p>
              You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of any account information and for all activities that occur under your account.
            </p>
            
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white pt-4">2. Intellectual Property</h3>
            <p>
              All content on the HexagonTech.ai website, including text, graphics, logos, and software, is the property of HexagonTech.ai or its licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written permission.
            </p>
            
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white pt-4">3. Limitation of Liability</h3>
            <p>
              In no event shall HexagonTech.ai be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or services.
            </p>
            
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white pt-4">4. Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law principles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
