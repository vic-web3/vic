import { motion } from "motion/react";
import { Filter, TrendingUp, Handshake, Repeat } from "lucide-react";

export function BusinessModel() {
  const models = [
    {
      icon: <Filter className="w-8 h-8 text-tech-blue" />,
      title: "项目筛选",
      en: "Project Filtering",
      desc: "持续筛选市场中的结构性机会，基于模型，而不是情绪。"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-tech-blue" />,
      title: "用户成长",
      en: "User Growth",
      desc: "从认知 → 判断 → 参与，形成长期用户路径。"
    },
    {
      icon: <Handshake className="w-8 h-8 text-tech-blue" />,
      title: "社区协同",
      en: "Community Synergy",
      desc: "通过社群与产品，连接用户与市场机会。"
    },
    {
      icon: <Repeat className="w-8 h-8 text-tech-blue" />,
      title: "价值循环",
      en: "Value Loop",
      desc: "当用户参与系统时：获得认知与机会，系统获得增长与反馈。"
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-deep-sea">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="mb-16">
          <div className="font-display text-sm tracking-[0.2em] text-tech-blue mb-4 uppercase">
            Business Model
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            我们如何运转
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center transition-all hover:border-tech-blue/30 group"
            >
              <div className="w-16 h-16 rounded-full bg-tech-blue/10 border border-tech-blue/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white tracking-widest">{item.title}</h3>
              <p className="text-[10px] text-grey-blue/60 tracking-widest uppercase mb-4 mt-1">{item.en}</p>
              <p className="text-sm font-medium text-grey-blue leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="inline-block px-10 py-5 bg-[#050505] rounded-full border border-white/10 text-xl font-bold tracking-widest text-white shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            这是一个<span className="text-tech-blue mx-2">用户与系统</span>共同成长的循环
          </p>
        </div>

      </div>
    </section>
  );
}
