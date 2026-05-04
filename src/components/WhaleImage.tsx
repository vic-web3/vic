import { motion } from "motion/react";
import { BrainCircuit, Activity, Zap, Shield, Binary, Network } from "lucide-react";
import React, { useEffect, useState } from "react";

function DynamicYield({ initialYield }: { initialYield: number }) {
  const [currentYield, setCurrentYield] = useState(initialYield);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fluctuate by -0.15% to +0.15%
      const fluctuation = (Math.random() - 0.5) * 0.3;
      setCurrentYield(prev => {
        let next = prev + fluctuation;
        if (next < initialYield - 0.4) next = initialYield - 0.4;
        if (next > initialYield + 0.4) next = initialYield + 0.4;
        return next;
      });
    }, 1500 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, [initialYield]);

  return <span>+{currentYield.toFixed(2)}%</span>;
}

export function WhaleImage() {
  const aiAgents = [
    { name: "AGENT-α", type: "ARB", state: "EXECUTED", yield: 1.24, time: "12ms", top: "10%", left: "-10%", delay: 0, icon: <Zap size={12} className="text-tech-blue" /> },
    { name: "AGENT-β", type: "SCAN", state: "ANALYZING", yield: 0.89, time: "8ms", top: "80%", left: "-5%", delay: 1.2, icon: <Binary size={12} className="text-tech-blue" /> },
    { name: "AGENT-γ", type: "EXEC", state: "DETECTED", yield: 2.15, time: "15ms", top: "15%", left: "75%", delay: 0.8, icon: <BrainCircuit size={12} className="text-tech-blue" /> },
    { name: "AGENT-δ", type: "SYNC", state: "SETTLED", yield: 3.42, time: "5ms", top: "65%", left: "85%", delay: 2.1, icon: <Shield size={12} className="text-tech-blue" /> },
  ];

  const getStateColors = (state: string) => {
    switch (state) {
      case 'EXECUTED':
        return { 
          bg: 'rgba(74, 222, 128, 0.15)', bgActive: 'rgba(74, 222, 128, 0.4)', 
          border: 'rgba(74, 222, 128, 0.3)', borderActive: 'rgba(74, 222, 128, 0.8)', 
          text: 'text-green-400' 
        };
      case 'ANALYZING':
        return { 
          bg: 'rgba(168, 85, 247, 0.15)', bgActive: 'rgba(168, 85, 247, 0.4)', 
          border: 'rgba(168, 85, 247, 0.3)', borderActive: 'rgba(168, 85, 247, 0.8)', 
          text: 'text-purple-400' 
        };
      case 'DETECTED':
        return { 
          bg: 'rgba(250, 204, 21, 0.15)', bgActive: 'rgba(250, 204, 21, 0.4)', 
          border: 'rgba(250, 204, 21, 0.3)', borderActive: 'rgba(250, 204, 21, 0.8)', 
          text: 'text-yellow-400' 
        };
      case 'SETTLED':
        return { 
          bg: 'rgba(0, 209, 255, 0.15)', bgActive: 'rgba(0, 209, 255, 0.4)', 
          border: 'rgba(0, 209, 255, 0.3)', borderActive: 'rgba(0, 209, 255, 0.8)', 
          text: 'text-tech-blue' 
        };
      default:
        return { 
          bg: 'rgba(255, 255, 255, 0.1)', bgActive: 'rgba(255, 255, 255, 0.3)', 
          border: 'rgba(255, 255, 255, 0.2)', borderActive: 'rgba(255, 255, 255, 0.6)', 
          text: 'text-white' 
        };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      className="relative w-full max-w-[500px] mx-auto aspect-square flex items-center justify-center p-8"
    >
      
      {/* AI Network Background Vibe (Replaces the solid rings) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <svg className="w-[120%] h-[120%] opacity-30 origin-center" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path 
            d="M 50 10 Q 70 30 90 50 T 50 90 T 10 50 T 50 10" 
            fill="none" 
            stroke="#00D1FF" 
            strokeWidth="0.2" 
            strokeDasharray="1 2"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ rotate: { duration: 60, repeat: Infinity, ease: "linear" }, scale: { duration: 10, repeat: Infinity, ease: "easeInOut" } }}
            style={{ transformOrigin: "50% 50%" }}
          />
          <motion.path 
            d="M 50 20 Q 80 50 50 80 T 50 20" 
            fill="none" 
            stroke="#00D1FF" 
            strokeWidth="0.3" 
            strokeDasharray="2 4"
            animate={{ rotate: -360, scale: [1, 1.05, 1] }}
            transition={{ rotate: { duration: 45, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
            style={{ transformOrigin: "50% 50%" }}
          />
          <motion.circle 
            cx="50" cy="50" r="30" 
            fill="none" 
            stroke="#00D1FF" 
            strokeWidth="0.1" 
            strokeDasharray="4 4"
            animate={{ r: [30, 32, 30], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Floating Arbitrage Agents */}
      {aiAgents.map((agent, index) => {
        const colors = getStateColors(agent.state);
        return (
        <motion.div
           key={index}
           className="absolute z-20 flex flex-col p-3.5 rounded-xl bg-[#030712]/80 border border-tech-blue/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,209,255,0.15)] min-w-[135px]"
          style={{ top: agent.top, left: agent.left }}
          animate={{
            y: [-8, 8, -8],
            boxShadow: [
              "0 0 10px rgba(0,209,255,0.1)",
              "0 0 25px rgba(0,209,255,0.25)",
              "0 0 10px rgba(0,209,255,0.1)"
            ]
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: agent.delay },
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: agent.delay }
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-tech-blue/20">
             <div className="flex items-center gap-1.5 text-[9px] text-grey-blue font-mono font-bold tracking-wider">
               {agent.icon}
               <span className="opacity-90">{agent.name}</span>
               <span className="text-tech-blue/70 ml-0.5">// {agent.type}</span>
             </div>
          </div>
          
          {/* Body */}
          <div className="flex items-end justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[8px] text-white/40 mb-1 tracking-wider uppercase font-mono">Live Yield</span>
              <motion.span 
                 className={`font-mono font-black text-xl leading-none ${colors.text} drop-shadow-[0_0_8px_currentColor]`}
              >
                <DynamicYield initialYield={agent.yield} />
              </motion.span>
            </div>
            
            <div className="flex flex-col items-end gap-1.5">
              <motion.span 
                className={`text-[8px] px-1.5 py-0.5 rounded ${colors.text} font-bold tracking-wider uppercase drop-shadow-[0_0_5px_currentColor]`}
                style={{ backgroundColor: colors.bg, border: `1px solid ${colors.border}` }}
                animate={{ 
                  backgroundColor: [colors.bg, colors.bgActive, colors.bg],
                  borderColor: [colors.border, colors.borderActive, colors.border]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: agent.delay }}
              >
                {agent.state}
              </motion.span>
              <span className="text-[9px] text-tech-blue/60 font-mono">{agent.time}</span>
            </div>
          </div>
        </motion.div>
      )})}

      {/* Floating Processing Nodes */}
      <motion.div 
        className="absolute top-[30%] left-[20%] w-8 h-8 rounded-full bg-tech-blue/10 border border-tech-blue/30 flex items-center justify-center backdrop-blur-sm z-10"
        animate={{ y: [-15, 15, -15], opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Network size={14} className="text-tech-blue" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-[30%] right-[20%] w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center backdrop-blur-sm z-10"
        animate={{ y: [15, -15, 15], opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Activity size={16} className="text-purple-400" />
      </motion.div>

      {/* IP Image */}
      <div className="relative z-30 w-full max-w-[340px] flex flex-col items-center">
        <motion.img 
          src="/鲸鱼-x.png" 
          alt="Whale Mascot" 
          className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(0,209,255,0.4)]"
          animate={{ 
            y: [-12, 12, -12],
          }}
          transition={{ 
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = '/ip.png';
          }}
        />
        {/* Core Under-glow for IP */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-tech-blue/20 blur-[70px] rounded-full -z-10" />
      </div>
    </motion.div>
  );
}
