import { motion } from "motion/react";
import { ArrowRight, Hexagon, Link } from "lucide-react";
import React from "react";
import { WhaleImage } from "./WhaleImage";

export function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Glows (Keeping just glows, removing grid/grain) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-deep-sea z-10 opacity-50"></div>
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-tech-blue/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-dark-blue/60 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col z-30 relative"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0B1121]/80 border border-tech-blue/30 backdrop-blur-md mb-8 w-fit shadow-[0_0_15px_rgba(0,209,255,0.15)]">
              <Hexagon className="w-4 h-4 text-tech-blue" />
              <span className="text-sm font-mono text-tech-blue tracking-wide uppercase font-bold">AI Engine & Web3 Community</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
              <span className="block mb-2">看懂趋势的人</span>
              <span className="block text-gradient-blue text-4xl sm:text-5xl lg:text-5xl mt-4">才有资格参与市场</span>
            </h1>

            <div className="text-lg md:text-xl text-cool-white/80 max-w-xl leading-relaxed mb-6 font-medium space-y-2">
              <p className="font-bold text-tech-blue">鲸鱼社区｜Web3结构性机会研究平台</p>
              <p>用认知筛选项目，用系统参与市场</p>
            </div>

            <p className="text-sm md:text-base text-grey-blue max-w-xl leading-relaxed mb-10 font-bold tracking-wide">
              不是谁喊得响谁赚钱
              <br />
              而是谁看得更深
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://t.me/+1HJZDZWbk7hkNDE1" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-tech-blue text-deep-sea rounded-full font-bold overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,209,255,0.4)]">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 block tracking-wide">加入社区</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface border border-tech-blue/30 text-cool-white rounded-full font-medium hover:bg-surface-hover hover:border-tech-blue/60 transition-all shadow-[inset_0_0_15px_rgba(0,209,255,0.05)]">
                <span className="tracking-wide text-sm font-bold">开始探索</span>
              </a>
            </div>

            <div className="mt-12 pt-8 flex items-center gap-8 border-t border-white/10">
              <div>
                <div className="text-2xl font-black text-tech-blue font-mono">100%</div>
                <div className="text-xs text-grey-blue tracking-widest uppercase font-bold mt-1">On-Chain</div>
              </div>
              <div className="w-[1px] h-8 bg-white/10"></div>
              <div>
                <div className="text-2xl font-black text-white font-mono">AI</div>
                <div className="text-xs text-grey-blue tracking-widest uppercase font-bold mt-1">Driven</div>
              </div>
              <div className="w-[1px] h-8 bg-white/10"></div>
              <div>
                <div className="text-2xl font-black text-white font-mono">Web3</div>
                <div className="text-xs text-grey-blue tracking-widest uppercase font-bold mt-1">Native</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: IP Mascot */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:ml-auto w-full flex items-center justify-center max-w-[600px] mx-auto"
          >
            <WhaleImage />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
