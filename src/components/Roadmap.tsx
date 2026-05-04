import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Roadmap() {
  const projects = [
    {
      name: "OG Agent",
      desc: "AI驱动的交易执行系统",
      tags: ["自动化", "套利", "多链"],
      stage: "增长期"
    },
    {
      name: "即将揭晓",
      desc: "更多结构性机会正在分析中...",
      tags: ["?", "?", "?"],
      stage: "研究中"
    }
  ];

  return (
    <section id="opportunities" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="font-display text-sm tracking-[0.2em] text-tech-blue mb-4 uppercase">
            Opportunities
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            我们正在跟踪的机会
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-tech-blue/40 transition-colors group flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black text-white tracking-widest">{item.name}</h3>
                  <p className="text-grey-blue mt-2 font-medium">{item.desc}</p>
                </div>
                <div className="px-3 py-1 rounded-full border border-tech-blue/30 text-tech-blue text-xs font-bold tracking-widest">
                  {item.stage}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-white/5 text-white/70 text-xs font-mono rounded tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto">
                <button className="flex items-center text-tech-blue font-bold tracking-widest group-hover:text-white transition-colors">
                  查看分析 <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-grey-blue tracking-widest font-medium opacity-70">
            *提示：我们不做推荐，只做结构判断与持续跟踪*
          </p>
        </div>
      </div>
    </section>
  );
}
