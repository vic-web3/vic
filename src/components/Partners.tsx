import { motion } from "motion/react";
import { AlertTriangle } from "lucide-react";

export function Partners() {
  const risks = [
    "所有机会都伴随风险",
    "所有收益都来自判断",
    "所有决策由用户自行承担"
  ];

  return (
    <section id="partners" className="relative py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-10 md:p-16 rounded-3xl relative overflow-hidden max-w-4xl mx-auto border-accent-orange/20"
        >
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-64 h-64 bg-accent-orange/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-accent-orange/10 border border-accent-orange/30 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-accent-orange" />
            </div>
          </div>

          <div className="font-display text-sm tracking-[0.2em] text-accent-orange mb-4 uppercase">
            Disclaimer
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-10">
            风险提示
          </h2>
          
          <div className="space-y-4 mb-12">
            {risks.map((item, idx) => (
              <p key={idx} className="text-xl md:text-2xl font-medium text-grey-blue tracking-wider">
                {item}
              </p>
            ))}
          </div>

          <div className="inline-block px-10 py-4 bg-[#050505] rounded-2xl border border-white/5">
            <p className="text-2xl md:text-3xl font-black text-white tracking-widest">
              我们提供的是判断<br className="sm:hidden" />
              <span className="hidden sm:inline">，</span><br />
              <span className="text-accent-orange">不是结果</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
