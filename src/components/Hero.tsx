import { motion } from "motion/react";
import { ArrowRight, Hexagon, Link } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { WhaleImage } from "./WhaleImage";

function AIParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const particles = Array.from({ length: 50 }).map(() => {
      const startX = Math.random() * width;
      const startY = Math.random() * height;
      return {
        x: startX,
        y: startY,
        baseX: startX,
        baseY: startY,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2 + 0.5,
      };
    });

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        // Natural drift
        p.baseX += p.vx;
        p.baseY += p.vy;

        if (p.baseX < 0 || p.baseX > width) p.vx *= -1;
        if (p.baseY < 0 || p.baseY > height) p.vy *= -1;

        // Interaction with mouse
        const dx = mouseX - p.baseX;
        const dy = mouseY - p.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let targetX = p.baseX;
        let targetY = p.baseY;

        const maxDist = 200;
        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          // Cluster gently towards mouse
          targetX += (dx / dist) * force * 30;
          targetY += (dy / dist) * force * 30;
        }

        p.x += (targetX - p.x) * 0.1;
        p.y += (targetY - p.y) * 0.1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        // Highlight particle if near mouse
        const distanceToMouse = Math.sqrt((mouseX - p.x) ** 2 + (mouseY - p.y) ** 2);
        const opacity = distanceToMouse < 200 ? 0.4 + 0.4 * (1 - distanceToMouse / 200) : 0.4;
        ctx.fillStyle = `rgba(0, 209, 255, ${opacity})`;
        ctx.fill();
      });

      // Draw networking lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 209, 255, ${0.15 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-70" />;
}

import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

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
      
      <AIParticles />

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
              <span className="block mb-2">{t("看懂趋势的人", "Those Who Understand Trends")}</span>
              <span className="block text-gradient-blue text-4xl sm:text-5xl lg:text-5xl mt-4">{t("才有资格参与市场", "Are Qualified to Trade")}</span>
            </h1>

            <div className="text-lg md:text-xl text-cool-white/80 max-w-xl leading-relaxed mb-10 font-medium space-y-2">
              <p className="font-bold text-tech-blue">{t("鲸鱼社区｜Web3结构性机会研究平台", "Whale Community | Web3 Structural Opportunities Platform")}</p>
              <p>{t("用认知筛选项目，用系统参与市场", "Filter projects with cognition, participate systematically")}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://t.me/+1HJZDZWbk7hkNDE1" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-tech-blue text-deep-sea rounded-full font-bold overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,209,255,0.4)]">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 block tracking-wide">{t("加入社区", "Join Community")}</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface border border-tech-blue/30 text-cool-white rounded-full font-medium hover:bg-surface-hover hover:border-tech-blue/60 transition-all shadow-[inset_0_0_15px_rgba(0,209,255,0.05)]">
                <span className="tracking-wide text-sm font-bold">{t("开始探索", "Explore Now")}</span>
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
