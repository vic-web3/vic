/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CoreValue } from "./components/CoreValue";
import { CommunitySystem } from "./components/CommunitySystem";
import { ContentSystem } from "./components/ContentSystem";
import { Culture } from "./components/Culture";
import { BusinessModel } from "./components/BusinessModel";
import { Partners } from "./components/Partners";
import { MediaPartners } from "./components/MediaPartners";
import { Roadmap } from "./components/Roadmap";
import { CTA } from "./components/CTA";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";

function MainContent() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-[#030712] text-white relative">
      {/* Global Subtle Backgrounds */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-cyber-grid opacity-[0.03]"></div>
        <div className="absolute inset-0 bg-web3-nodes opacity-[0.04]"></div>
        <div className="absolute inset-0 cyber-grain"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
        <Hero />
        <CoreValue />
        <CommunitySystem />
        <Roadmap />
        <Culture />
        <BusinessModel />
        <MediaPartners />
        <ContentSystem />
        <Partners />
        <CTA />
      </main>
      
      <footer className="py-12 border-t border-white/5 text-center relative z-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white tracking-widest mb-2">{t("鲸鱼社区", "Whale Community")}</h3>
            <p className="text-tech-blue font-medium tracking-widest uppercase text-sm">Whale Community</p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://t.me/+1HJZDZWbk7hkNDE1" target="_blank" rel="noopener noreferrer" className="text-grey-blue hover:text-tech-blue transition-colors font-medium tracking-wider">
              {t("Telegram 社区", "Telegram Community")}
            </a>
            <a href="https://x.com/SwapX_DEX" target="_blank" rel="noopener noreferrer" className="text-grey-blue hover:text-tech-blue transition-colors font-medium tracking-wider">
              Twitter (X)
            </a>
          </div>

          <div className="mb-8">
            <p className="text-lg text-white/80 font-medium italic tracking-widest">
              "{t("鲸鱼社区 不是信息源 而是", "Whale Community is not an information source but a ")}<span className="text-tech-blue">{t("认知过滤器", "cognitive filter")}</span>"
            </p>
          </div>

          <p className="text-xs text-grey-blue/60 tracking-widest uppercase mt-8 border-t border-white/5 pt-8">
            © {new Date().getFullYear()} Whale Community. All rights reserved.
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
