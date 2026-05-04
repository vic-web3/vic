import { motion } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Logo } from "./Logo";
import { useLanguage } from "../contexts/LanguageContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("方法论", "Methodology"), href: "#methodology" },
    { name: t("产品体系", "System"), href: "#system" },
    { name: t("关注机会", "Opportunities"), href: "#opportunities" },
    { name: t("了解我们", "About"), href: "#about" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 pointer-events-none",
        isScrolled
          ? "bg-deep-sea/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo small />
          </div>

            {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-sm font-medium text-grey-blue hover:text-tech-blue transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
            
            <button
              onClick={() => setLanguage(language === "ZH" ? "EN" : "ZH")}
              className="flex items-center gap-2 text-sm font-medium text-grey-blue hover:text-tech-blue transition-colors tracking-wide ml-2"
              title="Switch Language"
            >
              <Globe size={16} />
              <span>{language === "ZH" ? "EN" : "中文"}</span>
            </button>

            <a
              href="#join"
              onClick={(e) => handleSmoothScroll(e, "#join")}
              className="ml-4 px-6 py-2 rounded-full border border-tech-blue/30 text-tech-blue hover:bg-tech-blue/10 transition-all text-sm font-medium"
            >
              Join Us
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-cool-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-deep-sea/95 backdrop-blur-lg border-b border-white/5 py-4 px-4 pointer-events-auto"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-grey-blue hover:text-tech-blue py-2"
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            
            <button
              onClick={() => setLanguage(language === "ZH" ? "EN" : "ZH")}
              className="flex items-center gap-2 text-sm font-medium text-grey-blue hover:text-tech-blue py-2"
            >
              <Globe size={16} />
              <span>{language === "ZH" ? "English" : "中文"}</span>
            </button>

            <a
              href="#join"
              className="px-6 py-3 rounded-full bg-tech-blue/10 border border-tech-blue/30 text-tech-blue text-center text-sm font-medium mt-2"
              onClick={(e) => handleSmoothScroll(e, "#join")}
            >
              Join Us
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
