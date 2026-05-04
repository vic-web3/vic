import { useEffect, useState } from "react";

export function Logo({ small = false, className }: { small?: boolean, className?: string }) {
  const [dataUrl, setDataUrl] = useState<string>("/logo.png");

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;
      
      ctx.drawImage(img, 0, 0);
      try {
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i+1];
          const b = data[i+2];
          
          // Detect red background (high R, notably lower G and B)
          if (r > 80 && g < 100 && b < 100) {
            const maxGB = Math.max(g, b);
            const redIntensity = r - maxGB;
            
            // If the red dominates the green and blue channels
            if (redIntensity > 30) {
              let alpha = 255 - (redIntensity * 2.5);
              if (alpha < 0) alpha = 0;
              
              data[i+3] = data[i+3] * (alpha / 255);
              
              // Neutralize red fringes to prevent a red halo
              if (alpha > 0) {
                 data[i] = 255;
                 data[i+1] = 255;
                 data[i+2] = 255;
              }
            }
          }
        }
        ctx.putImageData(imgData, 0, 0);
        setDataUrl(canvas.toDataURL());
      } catch (e) {
        console.error("Canvas error:", e);
      }
    };
    // Ensure image refreshes
    img.src = "/logo.png?" + new Date().getTime();
  }, []);

  return (
    <div className={`flex items-center gap-3 ${className || ""}`}>
      <img 
        src={dataUrl} 
        alt="Whale Community Logo" 
        className={`${small ? "h-14 sm:h-16" : "h-24 sm:h-28"} w-auto object-contain transition-opacity duration-300`} 
      />
    </div>
  );
}
