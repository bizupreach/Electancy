
import React from 'react';
import { Mail, ShieldCheck, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-white min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 brand-font">Secure <span className="text-crimson">Inquiries</span></h1>
            <div className="h-0.5 w-20 bg-crimson mx-auto mb-12"></div>
            <p className="text-xl text-slate-700 leading-relaxed font-light max-w-2xl mx-auto">
              Electancy prioritizes absolute confidentiality. We operate with high-level professional discretion across all political engagements.
            </p>
          </div>

          <div className="bg-[#f8f9fa] border border-slate-200 shadow-2xl p-8 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start group">
                <div className="mb-6 text-slate-400 group-hover:text-crimson transition-colors">
                  <Mail size={36} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-widest text-[10px] mb-2">Direct Communication</h4>
                  <a href="mailto:contact@electancy.in" className="text-xl text-crimson font-bold hover:underline">
                    contact@electancy.in
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start group">
                <div className="mb-6 text-slate-400 group-hover:text-crimson transition-colors">
                  <MapPin size={36} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-widest text-[10px] mb-2">Operational Base</h4>
                  <p className="text-xl text-slate-700 font-bold">New Delhi, India</p>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start group">
                <div className="mb-6 text-slate-400 group-hover:text-crimson transition-colors">
                  <ShieldCheck size={36} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-widest text-[10px] mb-2">Privacy Protocol</h4>
                  <p className="text-xl text-slate-700 font-bold">Strict NDA Standards</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-slate-200 text-center">
              <p className="text-sm text-slate-500 font-light leading-relaxed max-w-xl mx-auto italic">
                "We do not disclose our client list under any circumstances. All initial consultations are handled with the highest level of professional privacy."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
