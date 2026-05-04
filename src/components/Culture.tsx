import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Culture() {
  const { t } = useLanguage();

  const steps = [
    t("进入社区", "Join Community"), 
    t("学习判断逻辑", "Learn Core Logic"), 
    t("识别结构机会", "Identify Structure Ops"), 
    t("参与项目", "Participate in Projects"), 
    t("建立自己的系统", "Build Your System")
  ];

  return (
    <section className="relative py-24 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="font-display text-sm tracking-[0.2em] text-tech-blue mb-4 uppercase">
              User Path
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-10">
              {t("你在这里会经历什么？", "What will you experience here?")}
            </h2>
            
            <div className="space-y-4">
              {steps.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-tech-blue/10 border border-tech-blue/30 flex items-center justify-center text-tech-blue font-bold font-mono text-sm">
                    {idx + 1}
                  </div>
                  <div className="text-lg text-white font-medium tracking-wide">
                    {item}
                  </div>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-tech-blue/40 ml-auto hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full relative"
          >
            <div className="glass-panel p-12 rounded-3xl relative overflow-hidden flex items-center justify-center min-h-[400px] border border-tech-blue/20">
              <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 to-transparent"></div>
              
              <div className="relative text-center space-y-6">
                <p className="text-3xl md:text-4xl font-black text-gradient leading-relaxed tracking-widest block">
                  {t("从信息接收者", "From Information Receiver")}
                  <br/>
                  {t("变成结构理解者", "To Structure Understander")}
                </p>
                <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-tech-blue to-transparent mx-auto mt-8"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
