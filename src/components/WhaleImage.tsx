import { motion } from "motion/react";

export function WhaleImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full h-full flex items-center justify-center p-4"
    >
      {/* Dynamic Glow Behind Image */}
      <div className="absolute inset-20 bg-tech-blue/20 rounded-full blur-[80px] animate-pulse"></div>
      
      {/* 
        This uses standard HTML img. 
        Place `ip.png` or `whale.png` in the /public directory.
      */}
      <img 
        src="/ip.png" 
        alt="Whale Mascot" 
        className="relative z-10 w-full max-w-[500px] h-auto object-contain drop-shadow-[0_0_40px_rgba(0,209,255,0.3)] animate-[float_6s_ease-in-out_infinite]"
        onError={(e) => {
          // Fallback if image not found
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
        }}
      />
      
      {/* Fallback UI if image isn't loaded */}
      <div className="fallback-text hidden absolute inset-0 flex items-center justify-center text-tech-blue/50 font-mono text-sm tracking-widest border border-tech-blue/20 rounded-2xl bg-tech-blue/5 backdrop-blur-sm">
        [ WHALE MASCOT ASSET MISSING ]
        <br/>
        Please upload 'ip.png' to /public
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </motion.div>
  );
}
