
import React from 'react';
import { Briefcase, BarChart4, Globe, Zap } from 'lucide-react';

const ComparisonItem: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="mb-12 last:mb-0 group">
    <div className="flex items-center mb-4">
      <div className="text-slate-400 group-hover:text-crimson transition-all mr-4">
        {/* Fix: cast icon to React.ReactElement<any> to resolve TypeScript error with 'size' prop */}
        {React.cloneElement(icon as React.ReactElement<any>, { size: 24 })}
      </div>
      <h3 className="text-xl font-bold text-slate-900 brand-font">
        {title}
      </h3>
    </div>
    <p className="text-slate-600 leading-relaxed pl-10 font-light">
      {desc}
    </p>
  </div>
);

const WhyElectancy: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 brand-font leading-tight">The Distinction of <br/><span className="text-crimson">Senior Advisory.</span></h1>
            <div className="h-0.5 w-20 bg-crimson mb-12"></div>
            <p className="text-lg text-slate-700 leading-relaxed mb-8 font-light">
              Political consulting is often mistaken for PR or digital marketing. Electancy operates at a different level—the level of decision support.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed font-light">
              We provide senior leadership with the intelligence needed to decide where to spend every resource effectively for maximum electoral swing.
            </p>
          </div>

          <div className="bg-[#f8f9fa] p-12 border border-slate-200 shadow-sm">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-12 border-b border-slate-200 pb-4">Core Differentiators</h2>
            
            <ComparisonItem 
              title="Beyond PR Agencies" 
              icon={<Globe />}
              desc="While PR focuses on coverage, we focus on conversion. We manage perceptions specifically to move vote shares." 
            />
            
            <ComparisonItem 
              title="Beyond Survey Firms" 
              icon={<BarChart4 />}
              desc="Data without strategy is noise. We provide a contextualized roadmap based on verified, proprietary intelligence." 
            />
            
            <ComparisonItem 
              title="Integrated Ecosystem" 
              icon={<Zap />}
              desc="We unify data, ground intelligence, and media into a single strategic loop from the booth to the war room." 
            />

            <ComparisonItem 
              title="Advisory Mindset" 
              icon={<Briefcase />}
              desc="We act as strategic partners defined by tough questions, honest assessments, and quantifiable outcomes." 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyElectancy;
