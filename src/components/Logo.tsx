export function Logo({ small = false, className }: { small?: boolean, className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className || ""}`}>
      {/* Circle Icon reproducing original layout */}
      <div className={`${small ? "h-11 w-11" : "h-14 w-14"} shrink-0 rounded-full bg-gradient-to-b from-[#00D1FF] to-[#0055FF] p-[2px] shadow-[0_0_20px_rgba(0,209,255,0.3)]`}>
        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#030914] relative overflow-hidden">
          <svg viewBox="0 0 100 100" className="w-[85%] h-[85%]" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Whale body stylized */}
            <path d="M15 50 C 30 75, 60 70, 75 45 C 80 35, 87 25, 90 35 C 85 45, 80 50, 70 55 C 50 85, 20 65, 15 50 Z" fill="url(#whale-grad)" stroke="#00D1FF" strokeWidth="1.5" />
            {/* Water Waves */}
            <path d="M 25 75 C 40 90, 60 90, 80 75" stroke="#0055FF" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 35 85 C 50 95, 70 90, 85 75" stroke="#00D1FF" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 18 60 C 30 70, 55 65, 65 50" stroke="#00D1FF" strokeWidth="1.5" />
            {/* Tail */}
            <path d="M 75 45 C 80 35, 82 30, 85 30" stroke="#00D1FF" strokeWidth="1.5" strokeLinecap="round" />
            {/* Eye */}
            <circle cx="35" cy="52" r="1.5" fill="#fff" />
            <defs>
              <linearGradient id="whale-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#00D1FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0055FF" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className={`hidden sm:flex flex-col justify-center`}>
        <div className="text-xl md:text-2xl font-black tracking-[0.1em] text-white leading-none mb-1 mt-1">鲸鱼社区</div>
        <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-[#00D1FF] flex items-center gap-2">
          <span className="w-3 h-[1px] bg-[#00D1FF]/50"></span>
          WHALE COMMUNITY
          <span className="w-3 h-[1px] bg-[#00D1FF]/50"></span>
        </div>
      </div>
    </div>
  );
}
