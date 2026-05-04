import { motion } from "motion/react";
import { CheckCircle2, XCircle } from "lucide-react";

export function ContentSystem() {
  const donts = [
    "不追短期热点",
    "不推荐无结构项目",
    "不制造暴富幻觉"
  ];

  return (
    <section id="research" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tech-blue/5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="font-display text-sm tracking-[0.2em] text-tech-blue mb-4 uppercase">
            Community Value
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            为什么选择鲸鱼社区？
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 glass-panel p-10 rounded-3xl"
          >
            <div className="space-y-6">
              {donts.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-grey-blue font-medium text-lg tracking-wide">
                  <XCircle className="w-6 h-6 text-red-400/80" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-10 border-t border-white/10">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-tech-blue shrink-0 mt-1" />
                <div>
                  <div className="text-grey-blue font-medium tracking-wide mb-2">只做一件事：</div>
                  <div className="text-2xl font-bold text-white tracking-widest">帮助你建立判断能力</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="text-center lg:text-left pl-0 lg:pl-12 border-l-0 lg:border-l border-white/10">
              <p className="text-4xl md:text-5xl lg:text-6xl font-black text-gradient leading-tight tracking-widest mb-6">
                不制造幻觉
                <br />
                只提供判断
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
