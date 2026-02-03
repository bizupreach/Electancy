
import React from 'react';

const ProcessStep: React.FC<{ num: string; title: string; desc: string }> = ({ num, title, desc }) => (
  <div className="relative pl-12 pb-20 border-l border-slate-200 last:border-0 last:pb-0">
    <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 bg-crimson text-white flex items-center justify-center text-xs font-bold ring-8 ring-white shadow-xl">
      {num}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4 brand-font">{title}</h3>
    <p className="text-slate-600 leading-relaxed font-light">{desc}</p>
  </div>
);

const Process: React.FC = () => {
  return (
    <div className="py-24 bg-[#f1f1f1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 brand-font">The <span className="text-crimson">Campaign Flow</span></h1>
          <div className="h-0.5 w-16 bg-crimson mx-auto mb-8"></div>
          <p className="text-lg text-slate-500 max-w-xl mx-auto font-light">
            A methodical, phased approach to electoral preparation and execution.
          </p>
        </div>

        <div className="bg-white p-16 border border-slate-100 shadow-lg">
          <ProcessStep 
            num="01" 
            title="Political Landscape Assessment" 
            desc="Deep-dive into the constituency's history, socio-economic factors, and existing power structures." 
          />
          <ProcessStep 
            num="02" 
            title="Ground & Media Intelligence" 
            desc="Simultaneous research across the physical constituency and the digital narrative ecosystem." 
          />
          <ProcessStep 
            num="03" 
            title="Data Analysis & Scenario Planning" 
            desc="Processing intelligence to build 'What-If' scenarios based on turnout, swings, and shifts." 
          />
          <ProcessStep 
            num="04" 
            title="Strategy & Narrative Design" 
            desc="Codifying the central campaign theme and localizing it for specific voter segments." 
          />
          <ProcessStep 
            num="05" 
            title="Campaign Execution Support" 
            desc="Direct management of the media, PR, and ground operations to ensure strategy alignment." 
          />
          <ProcessStep 
            num="06" 
            title="Feedback & Course Correction" 
            desc="Continuous monitoring and rapid adjustments based on real-time campaign performance." 
          />
        </div>
      </div>
    </div>
  );
};

export default Process;
