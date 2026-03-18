import React from 'react';
import { SectionHeading } from '@/src/components/SectionHeading';

export default function Privacy() {
  return (
    <div className="pb-24">
      <section className="pt-20 pb-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Legal"
            title="Privacy Policy"
            description="Last updated: March 05, 2026"
          />
          
          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <p>
              At HexagonTech.ai, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            
            <h3 className="text-2xl font-display font-bold text-slate-900 pt-4">1. Information We Collect</h3>
            <p>
              We collect information that you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, phone number, and company information.
            </p>
            
            <h3 className="text-2xl font-display font-bold text-slate-900 pt-4">2. How We Use Your Information</h3>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience. We may also use your information to send you marketing communications that we believe may be of interest to you.
            </p>
            
            <h3 className="text-2xl font-display font-bold text-slate-900 pt-4">3. Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
            </p>
            
            <h3 className="text-2xl font-display font-bold text-slate-900 pt-4">4. Your Rights</h3>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us at privacy@hexagontech.ai.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
