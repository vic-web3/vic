import { motion } from "motion/react";

export function MediaPartners() {
  const partners = [
    "CoinDesk",
    "CoinTelegraph",
    "The Block",
    "Decrypt",
    "Binance Square",
    "PANews",
    "Odaily 星球日报",
    "BlockBeats",
    "深潮 TechFlow",
    "金色财经",
    "链捕手 ChainCatcher",
    "Foresight News"
  ];

  return (
    <section className="relative py-24 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-tech-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-12">
          <div className="font-display text-sm tracking-[0.2em] text-tech-blue mb-4 uppercase">
            Ecosystem
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            合作媒体与生态伙伴
          </h2>
          <p className="text-lg text-grey-blue font-medium max-w-3xl mx-auto tracking-wide">
            我们与全球主流 Web3 媒体与生态保持长期合作与信息协同，共同推动优质项目与行业认知的发展。
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="px-6 py-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-tech-blue/30 transition-all cursor-default"
            >
              <span className="text-white/80 font-bold tracking-wider whitespace-nowrap text-sm md:text-base">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-xl md:text-2xl font-black text-white italic tracking-widest text-shadow-glow">
            "与行业信息源同步，不做信息滞后者"
          </p>
        </div>
      </div>
    </section>
  );
}
