
import { useState, useEffect } from "react";

interface PreLoaderProps {
  onLoadingComplete: () => void;
}

const PreLoader = ({ onLoadingComplete }: PreLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [glitchIntensity, setGlitchIntensity] = useState(0);
  const [currentText, setCurrentText] = useState("");

  const loadingTexts = [
    "INITIALIZING...",
    "LOADING BRUTALISM...",
    "PREPARING CHAOS...",
    "ACTIVATING NEON...",
    "ΣIGMA LOADING...",
    "ALMOST THERE...",
    "WELCOME TO BRUTALISM"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 3 + 1;
        
        // Update text based on progress
        const textIndex = Math.floor((newProgress / 100) * loadingTexts.length);
        setCurrentText(loadingTexts[Math.min(textIndex, loadingTexts.length - 1)]);
        
        // Increase glitch intensity as we get closer to 100%
        setGlitchIntensity(newProgress / 100);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 1000);
          return 100;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-stark-black flex items-center justify-center overflow-hidden">
      {/* Crazy background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 via-stark-black to-lime-green/20 animate-pulse"></div>
      
      {/* Glitch overlay */}
      <div 
        className="absolute inset-0 bg-repeat opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40z'/%3E%3C/g%3E%3C/svg%3E")`,
          animation: `glitch-bg ${2 - glitchIntensity}s linear infinite`
        }}
      ></div>

      {/* Main image with crazy effects */}
      <div className="relative z-10 flex flex-col items-center">
        <div 
          className="relative mb-8 transform"
          style={{
            animation: `crazy-spin ${3 - glitchIntensity * 2}s linear infinite, glitch-position ${0.5 - glitchIntensity * 0.3}s ease-in-out infinite`
          }}
        >
          {/* Multiple overlapping images for glitch effect */}
          <img 
            src="/lovable-uploads/2d170105-3196-40c6-a600-34b89f1f6ba4.png"
            alt="Loading"
            className="w-48 h-48 md:w-64 md:h-64 object-cover border-8 border-electric-blue brutalist-shadow"
            style={{
              filter: `hue-rotate(${progress * 3.6}deg) saturate(${1 + glitchIntensity * 2}) contrast(${1 + glitchIntensity})`
            }}
          />
          
          {/* Glitch duplicates */}
          <img 
            src="/lovable-uploads/2d170105-3196-40c6-a600-34b89f1f6ba4.png"
            alt=""
            className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 object-cover border-8 border-lime-green opacity-50 mix-blend-screen"
            style={{
              transform: `translate(${Math.sin(progress * 0.1) * glitchIntensity * 10}px, ${Math.cos(progress * 0.1) * glitchIntensity * 10}px)`,
              filter: `hue-rotate(${180 + progress * 3.6}deg)`
            }}
          />
          
          <img 
            src="/lovable-uploads/2d170105-3196-40c6-a600-34b89f1f6ba4.png"
            alt=""
            className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 object-cover border-8 border-neon-purple opacity-30 mix-blend-multiply"
            style={{
              transform: `translate(${Math.cos(progress * 0.15) * glitchIntensity * -8}px, ${Math.sin(progress * 0.15) * glitchIntensity * -8}px)`,
              filter: `invert(${glitchIntensity})`
            }}
          />
        </div>

        {/* Loading text with crazy effects */}
        <div className="text-center mb-8">
          <h1 
            className="text-4xl md:text-6xl font-black uppercase text-electric-blue mb-4"
            style={{
              animation: `glitch-text ${1 - glitchIntensity * 0.8}s ease-in-out infinite`,
              textShadow: `0 0 20px currentColor, ${glitchIntensity * 5}px ${glitchIntensity * 5}px 0px #ff0000, ${glitchIntensity * -5}px ${glitchIntensity * -5}px 0px #00ff00`
            }}
          >
            {currentText}
          </h1>
        </div>

        {/* Brutal progress bar */}
        <div className="w-80 md:w-96 h-8 border-4 border-pure-white bg-stark-black relative overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-electric-blue via-lime-green to-neon-purple transition-all duration-300 relative"
            style={{ width: `${progress}%` }}
          >
            {/* Moving pattern overlay */}
            <div 
              className="absolute inset-0 bg-repeat opacity-50"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3C/g%3E%3C/svg%3E")`,
                animation: `slide-progress 0.5s linear infinite`
              }}
            ></div>
          </div>
          
          {/* Progress percentage */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span 
              className="text-pure-white font-black text-xl"
              style={{
                textShadow: "2px 2px 0px black",
                animation: progress > 90 ? "pulse 0.1s ease-in-out infinite" : "none"
              }}
            >
              {Math.floor(progress)}%
            </span>
          </div>
        </div>

        {/* Random floating elements */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-electric-blue border-2 border-pure-white"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animation: `float-random-${i} ${2 + i * 0.5}s ease-in-out infinite`,
              opacity: glitchIntensity * 0.8
            }}
          ></div>
        ))}
      </div>

      {/* Screen distortion overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)`,
          animation: progress > 80 ? "screen-distort 0.1s linear infinite" : "none"
        }}
      ></div>
    </div>
  );
};

export default PreLoader;
