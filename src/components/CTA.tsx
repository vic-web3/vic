import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CTA() {
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
            你现在要做的<br/>只有一件事
          </h2>
          
          <div className="mb-16">
            <p className="text-2xl md:text-4xl text-grey-blue font-bold leading-relaxed tracking-wider">
              如果你看到这里<br />
              你已经比大多数人<br />
              <span className="text-white">更接近市场的本质</span>
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="relative w-[140px] h-[140px] flex items-center justify-center group">
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl group-hover:bg-cyan-400/30 transition-all duration-1000"></div>
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-cyan-300 via-blue-500 to-indigo-900 shadow-xl flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-500 z-10">🐋</div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <a 
              href="https://t.me/+1HJZDZWbk7hkNDE1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-tech-blue text-deep-sea rounded-full font-black text-lg md:text-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,209,255,0.4)] tracking-widest uppercase"
            >
              <span>加入鲸鱼社区</span>
              <ArrowRight size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
