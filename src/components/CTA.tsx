import { motion } from "motion/react";
import { ArrowRight, BrainCircuit, Activity, Network, Binary } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section id="join" className="relative py-32 border-t border-white/5 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tech-blue/10 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-display text-sm tracking-[0.2em] text-tech-blue mb-4 uppercase">
            Join Us
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight">
            {t("你现在要做的", "There is only one thing")}<br/>
            {t("只有一件事", "left for you to do")}
          </h2>
          
          <div className="mb-10">
            <p className="text-2xl md:text-4xl text-grey-blue font-bold leading-relaxed tracking-wider">
              {t("如果你看到这里", "If you have read this far,")}<br />
              {t("你已经比大多数人", "you are already closer")}<br />
              <span className="text-white">{t("更接近市场的本质", "to the nature of the market than most.")}</span>
            </p>
          </div>

          <div className="flex justify-center mt-12">
            <a 
              href="https://t.me/+1HJZDZWbk7hkNDE1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 text-black font-bold text-xl md:text-2xl rounded-full transition-all overflow-hidden"
              style={{
                background: '#0a7eff', // Like the image
                boxShadow: '0 0 0 2px rgba(255,255,255,0.9), 0 0 20px rgba(10, 126, 255, 0.5)'
              }}
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span>{t("加入鲸鱼社区", "Join Whale Community")}</span>
              <ArrowRight size={24} />
            </a>
          </div>
        </motion.div>

        {/* Dynamic AI Elements at the bottom */}
        <motion.div 
          className="mt-24 max-w-3xl mx-auto relative h-32 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {/* Laser Scanning Line */}
          <div className="absolute inset-0 overflow-hidden rounded-xl border border-tech-blue/20 bg-gradient-to-b from-tech-blue/5 to-transparent backdrop-blur-sm">
            <motion.div 
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-tech-blue to-transparent opacity-40 shadow-[0_0_10px_#00D1FF]"
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 209, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 209, 255, 1) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
          </div>

          <div className="relative z-10 w-full px-8 flex justify-between items-center text-tech-blue/70 font-mono text-sm font-bold">
            <div className="flex flex-col items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <BrainCircuit size={20} />
              </motion.div>
              <span className="text-[10px] tracking-widest">AI CORE</span>
            </div>

            <motion.div 
              className="h-[1px] w-1/4 bg-gradient-to-r from-transparent via-tech-blue/50 to-transparent relative"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
              <motion.div 
                className="absolute top-1/2 -mt-[2px] w-1 h-1 bg-tech-blue shadow-[0_0_8px_#00D1FF] rounded-full"
                animate={{ left: ['0%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>

            <div className="flex flex-col items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <Network size={20} />
              </motion.div>
              <span className="text-[10px] tracking-widest">NETWORK</span>
            </div>

             <motion.div 
              className="h-[1px] w-1/4 bg-gradient-to-r from-transparent via-tech-blue/50 to-transparent relative"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
            >
              <motion.div 
                className="absolute top-1/2 -mt-[2px] w-1 h-1 bg-tech-blue shadow-[0_0_8px_#00D1FF] rounded-full"
                animate={{ left: ['100%', '0%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>

            <div className="flex flex-col items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Activity size={20} />
              </motion.div>
              <span className="text-[10px] tracking-widest">SYNCING</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
