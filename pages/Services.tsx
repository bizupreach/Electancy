
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, PenTool, Share2, BarChart, UserCheck } from 'lucide-react';
// Added missing Link import from react-router-dom
import { Link } from 'react-router-dom';

const ServicePillar: React.FC<{
  title: string;
  icon: React.ReactNode;
  description: string;
  points: string[];
  index: number;
}> = ({ title, icon, description, points, index }) => (
  <motion.article 
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="bg-white border-b border-slate-100 py-24 group overflow-hidden"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}>
        <div className="flex-1">
          <div className="flex items-center mb-8">
            <div className="mr-6 p-5 bg-slate-50 text-slate-300 group-hover:text-crimson group-hover:bg-red-50 transition-all duration-500 rounded-full">
              {/* Fix: cast icon to React.ReactElement<any> to resolve TypeScript error with 'size' prop */}
              {React.cloneElement(icon as React.ReactElement<any>, { size: 48 })}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 brand-font group-hover:translate-x-2 transition-transform duration-500">{title}</h2>
          </div>
          <p className="text-xl text-slate-500 leading-relaxed font-light mb-10 max-w-2xl">
            {description}
          </p>
        </div>
        
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {points.map((point, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.02 }}
              className="bg-[#fcfcfc] border border-slate-100 p-6 shadow-sm hover:border-crimson/20 transition-all flex items-start"
            >
              <span className="text-crimson font-bold mr-4 text-xs mt-1 tracking-tighter">0{idx + 1}.</span>
              <p className="text-slate-800 text-sm font-medium leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.article>
);

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      <header className="py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 brand-font"
          >
            Core <span className="text-crimson">Consultancy</span> Pillars
          </motion.h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Specialized strategic capabilities designed for high-stakes leadership in complex political ecosystems.
          </p>
          <div className="h-0.5 w-24 bg-crimson mx-auto mt-12"></div>
        </div>
      </header>

      <section>
        <ServicePillar 
          index={0}
          title="Data Intelligence"
          icon={<Database />}
          description="Deep mathematical modeling and behavioral analytics used to predict electoral outcomes and reveal swing-voter clusters."
          points={[
            "Electoral math & margin-of-victory analysis",
            "Micro-demographic voter profiling",
            "Turnout optimization & predictive modeling",
            "Booth-level candidate benchmarking"
          ]}
        />

        <ServicePillar 
          index={1}
          title="Campaign Design"
          icon={<Layout />}
          description="Sophisticated end-to-end strategic roadmaps that synchronize ground operations with central narrative goals."
          points={[
            "Full-cycle electoral campaign architecture",
            "Intelligent resource allocation strategy",
            "Opposition risk mapping & counter-plans",
            "War-room operational infrastructure design"
          ]}
        />

        <ServicePillar 
          index={2}
          title="Narrative Command"
          icon={<PenTool />}
          description="Meticulous control over the political story, ensuring the candidate's voice remains the dominant force in the ecosystem."
          points={[
            "Central core-theme & agenda development",
            "Messaging hierarchy & narrative architecture",
            "Strategic issue-based steering mechanisms",
            "Hyper-local sentiment & dialect alignment"
          ]}
        />

        <ServicePillar 
          index={3}
          title="Social Electioneering"
          icon={<Share2 />}
          description="Targeted digital mobilization strategies that convert online engagement into tangible ground-level votes."
          points={[
            "Grassroots digital army mobilization",
            "Platform-specific influencer management",
            "Socio-digital demographic hyper-targeting",
            "Digital cluster management & sentiment control"
          ]}
        />

        <ServicePillar 
          index={4}
          title="Media Analytics"
          icon={<BarChart />}
          description="Real-time monitoring systems for traditional and digital media to anticipate shifts in the public mood."
          points={[
            "Sentiment tracking across media ecosystems",
            "Real-time media impact performance audits",
            "Predictive digital trend forecasting",
            "Crisis monitoring & rapid-response triggers"
          ]}
        />

        <ServicePillar 
          index={5}
          title="Brand Management"
          icon={<UserCheck />}
          description="Elite leadership persona building combined with aggressive reputation protection for senior political figures."
          points={[
            "Leadership persona auditing & positioning",
            "Reputation risk mitigation & audits",
            "Proactive legacy architecture design",
            "Public perception & trust mapping audits"
          ]}
        />
      </section>

      <footer className="py-40 bg-slate-900 text-white text-center">
        <h3 className="text-4xl font-bold mb-10 brand-font">Ready for a Strategic Audit?</h3>
        {/* Fixed Link reference errors */}
        <Link 
          to="/contact" 
          className="inline-flex items-center justify-center px-10 py-5 bg-crimson text-white font-bold uppercase tracking-widest text-xs transition-all hover:bg-white hover:text-crimson"
        >
          Begin In-Depth Inquiry
        </Link>
      </footer>
    </div>
  );
};

export default Services;
