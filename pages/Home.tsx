
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Database, Layout, PenTool, Share2, BarChart, UserCheck, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroVisual from '../components/HeroVisual';

const Home: React.FC = () => {
  const services = [
    { icon: <Database />, title: "Data Intelligence", desc: "Predictive behavioral analytics and margin analysis across constituencies." },
    { icon: <Layout />, title: "Campaign Design", desc: "Strategic architecture for end-to-end ground and war-room operations." },
    { icon: <PenTool />, title: "Narrative Command", desc: "Dominant leadership positioning and meticulous message control." },
    { icon: <Share2 />, title: "Social Electioneering", desc: "Digital mobilization strategies translated into ground-level electoral gains." },
    { icon: <BarChart />, title: "Media Analytics", desc: "Real-time ecosystem monitoring and sentiment tracking for rapid response." },
    { icon: <UserCheck />, title: "Brand Management", desc: "Long-term legacy architecture and proactive reputation protection for leaders." }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-white grid-bg">
        <HeroVisual />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 leading-[0.9] mb-10 brand-font">
              Defining the <br /><span className="text-crimson">Political Standard.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl font-light">
              Electancy is India's most discreet political consultancy, delivering ground-level intelligence and data-driven dominance for senior leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-5 bg-crimson text-white font-bold uppercase tracking-widest text-xs transition-all hover:bg-black shadow-2xl"
              >
                Inquire Privately
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-10 py-5 border border-slate-900 text-slate-900 font-bold uppercase tracking-widest text-xs transition-all hover:bg-slate-50"
              >
                View Capabilities
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
          <ChevronRight size={32} className="rotate-90" />
        </div>
      </section>

      {/* Authority Snapshot */}
      <section className="bg-slate-900 py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {[
              { val: "12+", label: "Elections Won" },
              { val: "34 Cr", label: "Voters Analyzed" },
              { val: "10", label: "Indian States" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="brand-font text-5xl md:text-7xl font-bold mb-4 text-white">{stat.val}</div>
                <div className="text-slate-400 uppercase tracking-[0.3em] text-[10px] font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with Animation */}
      <section className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24 text-center">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-crimson mb-6">Consultancy Spectrum</h2>
            <h3 className="text-5xl font-bold text-slate-900 brand-font">Strategic Pillars</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-12 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex items-center mb-8">
                  <div className="text-slate-300 group-hover:text-crimson transition-colors duration-500 mr-6">
                    {/* Fix: cast service.icon to React.ReactElement<any> to resolve TypeScript error with 'size' prop */}
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 40 })}
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 brand-font group-hover:text-crimson transition-colors">
                    {service.title}
                  </h4>
                </div>
                <p className="text-slate-500 leading-relaxed mb-8 font-light text-lg">
                  {service.desc}
                </p>
                <Link to="/services" className="text-crimson font-bold text-xs uppercase tracking-[0.2em] flex items-center group-hover:pl-2 transition-all">
                  Full Details <ChevronRight size={14} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-10 brand-font leading-tight">Secure your <br/><span className="text-crimson italic underline decoration-1 underline-offset-8">Constituency.</span></h2>
            <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
              We provide senior-level decision support that integrates ground reality with predictive analytics. Professionalism and total discretion are guaranteed.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-12 py-6 bg-slate-900 text-white font-bold uppercase tracking-widest text-xs transition-all hover:bg-crimson shadow-2xl"
            >
              Consult With Our Partners
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
