import { motion } from "motion/react";
import { Combine, Clock, ShieldAlert } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function CoreValue() {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Combine className="w-6 h-6 text-tech-blue" />,
      title: t("结构模型 (Structure)", "Structure Model"),
      desc: t("分析项目的资金结构、收益逻辑与可持续性，判断是否具备长期运行基础。", "Analyze fund structure, yield logic, and sustainability to judge long-term viability.")
    },
    {
      icon: <Clock className="w-6 h-6 text-tech-blue" />,
      title: t("阶段模型 (Timing)", "Timing Model"),
      desc: t("不是所有项目都能参与，关键在于进入与退出的时机。", "Not all projects are actionable; the key lies in entry and exit timing.")
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-accent-orange" />,
      title: t("风险模型 (Risk)", "Risk Model"),
      desc: t("识别波动来源、系统性风险与流动性风险。", "Identify sources of volatility, systemic risk, and liquidity risk.")
    }
  ];

  return (
    <section id="methodology" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <div className="font-display text-sm tracking-[0.2em] text-tech-blue mb-4 uppercase">
            {t("Methodology", "Methodology")}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            {t("我们如何判断机会？", "How We Identify Opportunities?")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-8 rounded-2xl bg-white/[0.02] border border-border hover:border-white/20 transition-colors group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                {item.icon}
              </div>
              <div className="relative z-10 flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-border">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{item.title}</h3>
                <p className="text-grey-blue leading-relaxed text-sm md:text-base font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <blockquote className="inline-block border-l-4 border-tech-blue pl-6 py-2 text-left">
            <p className="text-2xl font-medium text-white/90 italic tracking-wide">
              "{t("我们不是预测市场，", "We don't predict the market,")}<br />
              <span className="text-tech-blue font-bold not-italic">{t("我们理解结构。", "we understand structure.")}</span>"
            </p>
          </blockquote>
        </div>

      </div>
    </section>
  );
}
