
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 brand-font">About <span className="text-crimson">Electancy</span></h1>
          <div className="h-0.5 w-20 bg-crimson mb-12"></div>
          
          <div className="space-y-8 text-lg text-slate-700 leading-relaxed font-light">
            <p>
              Electancy exists at the intersection of data science, psychological profiling, and grassroots political management. We were founded on the principle that modern elections are no longer won by chance or volume alone, but through precision and narrative control.
            </p>
            
            <p>
              As a specialized political consultancy with an operational footprint across 10 Indian states and a track record of 12 successful election cycles, our team brings a unique combination of academic rigor and ground-level intelligence. We understand the complexities of the Indian electoral ecosystem at a scale of 34 Cr voters.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 pt-6 brand-font">Operating Spectrum</h2>
            <p>
              Our capability extends from micro-level booth management to national-level media strategy. This integrated approach ensures that the strategy designed in the war room is the exact strategy executed at the doorstep.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
              <div className="bg-slate-50 p-6 border-l-4 border-crimson shadow-sm group">
                <h3 className="font-bold text-crimson mb-2 brand-font uppercase text-sm tracking-widest">Confidentiality</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider">We maintain the highest standards of discretion as a trusted consultancy. Your strategy remains proprietary.</p>
              </div>
              <div className="bg-slate-50 p-6 border-l-4 border-crimson shadow-sm group">
                <h3 className="font-bold text-crimson mb-2 brand-font uppercase text-sm tracking-widest">Scientific Neutrality</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Our advice is rooted in data and reality, providing objective clarity for leadership decision-making.</p>
              </div>
            </div>

            <p>
              Electancy is not just a service provider; we are strategic partners who operate as an extension of a leader's core team. Our goal is singular: to provide the clarity required to secure an electoral mandate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
