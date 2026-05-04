import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function CommunitySystem() {
  const { t } = useLanguage();

  const layers = [
    {
      name: "Whale Research",
      cnName: t("免费层", "Free Tier"),
      features: [t("项目分析", "Project Analysis"), t("市场判断", "Market Judgement"), t("机会筛选", "Opportunity Filtering")]
    },
    {
      name: "Whale System",
      cnName: t("核心层", "Core Tier"),
      features: [t("用户成长路径", "Growth Path"), t("策略参与入口", "Strategy Access"), t("项目跟踪体系", "Tracking System")]
    },
    {
      name: "Whale Pro",
      cnName: t("进阶层", "Pro Tier"),
      features: [t("深度策略", "Deep Strategy"), t("核心社群", "Core Community"), t("高级机会优先权", "Priority Access")]
    }
  ];

  return (
    <section id="system" className="relative py-24 border-t border-border overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tech-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="font-display text-sm tracking-[0.2em] text-tech-blue mb-4 uppercase">
            Product System
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            {t("我们的产品体系", "Our Product System")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {layers.map((layer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl p-[1px]">
                <div className="absolute inset-0 bg-[#050505] rounded-2xl"></div>
              </div>
              
              <div className="relative h-full glass-panel p-8 rounded-2xl flex flex-col items-center text-center transition-transform group-hover:-translate-y-1">
                <div className="font-display text-tech-blue font-bold tracking-widest text-xs mb-2 opacity-80">
                  TIER 0{idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-white italic font-display mb-1">{layer.name}</h3>
                <h4 className="text-sm font-medium text-white/70 mb-8">{layer.cnName}</h4>
                
                <div className="space-y-4 flex-grow border-t border-border pt-6 mt-2 w-full flex flex-col items-center">
                  {layer.features.map((feature, fIdx) => (
                    <div key={fIdx} className="text-grey-blue font-medium tracking-wide">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="inline-block px-8 py-3 glass-panel rounded-full text-lg md:text-xl font-bold text-white tracking-widest">
            {t("从认知到参与，", "From cognition to participation, ")} <span className="text-tech-blue">{t("建立完整的用户路径", "building a complete user path")}</span>。
          </p>
        </div>

      </div>
    </section>
  );
}
