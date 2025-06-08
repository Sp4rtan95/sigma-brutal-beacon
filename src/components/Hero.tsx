
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-pure-white relative overflow-hidden">
      {/* Interactive background elements with mouse parallax */}
      <div 
        className="absolute top-10 left-10 w-40 h-40 bg-electric-blue brutalist-border brutalist-shadow rotate-12 z-10 float-animation transition-transform duration-300 hover:scale-110 cursor-pointer"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) rotate(12deg)`
        }}
        onClick={() => console.log('🔵 Blue box clicked!')}
      ></div>
      
      <div 
        className="absolute bottom-20 right-20 w-32 h-32 bg-lime-green brutalist-border brutalist-shadow -rotate-45 z-10 bounce-gentle hover:rotate-0 transition-transform duration-500 cursor-pointer"
        style={{
          transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px) rotate(-45deg)`
        }}
        onClick={() => console.log('🟢 Green box clicked!')}
      ></div>
      
      <div className="absolute top-1/3 right-10 w-24 h-24 bg-stark-black brutalist-border z-10 pulse-neon hover:bg-electric-blue transition-colors duration-300 cursor-pointer"></div>
      <div className="absolute bottom-1/3 left-20 w-28 h-28 border-8 border-stark-black bg-pure-white brutalist-shadow rotate-45 z-10 rotate-hover"></div>
      
      {/* Overlapping rectangles with hover effects */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-64 h-16 bg-neon-purple brutalist-border brutalist-shadow rotate-3 opacity-80 z-5 hover:opacity-100 hover:scale-105 transition-all duration-300"></div>
      <div className="absolute bottom-32 left-1/3 w-48 h-12 bg-electric-blue brutalist-border brutalist-shadow -rotate-2 opacity-70 z-5 hover:opacity-100 hover:-rotate-1 transition-all duration-300"></div>
      
      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="max-w-6xl mx-auto">
          {/* Animated headline with staggered appearance */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
              <span 
                className={`block text-stark-black bg-pure-white px-4 py-2 border-8 border-stark-black brutalist-shadow mb-4 inline-block transform -rotate-1 glitch-effect transition-all duration-700 ${isVisible ? 'animate-[slide-in-left_0.8s_ease-out]' : 'opacity-0'}`}
              >
                A Brutalist
              </span>
              <span 
                className={`block text-pure-white bg-electric-blue px-4 py-2 border-8 border-stark-black brutalist-shadow mb-4 inline-block transform rotate-1 neon-glow-blue hover:animate-pulse transition-all duration-700 delay-200 ${isVisible ? 'animate-[slide-in-right_0.8s_ease-out]' : 'opacity-0'}`}
              >
                Bitcoin
              </span>
              <span 
                className={`block text-stark-black bg-lime-green px-4 py-2 border-8 border-stark-black brutalist-shadow mb-4 inline-block transform -rotate-1 neon-glow-green hover:scale-105 transition-all duration-700 delay-400 ${isVisible ? 'animate-[slide-in-left_0.8s_ease-out]' : 'opacity-0'}`}
              >
                Lightning
              </span>
              <span 
                className={`block text-pure-white bg-stark-black px-4 py-2 border-8 border-stark-black brutalist-shadow inline-block transform rotate-1 hover:bg-electric-blue transition-all duration-700 delay-600 ${isVisible ? 'animate-[slide-in-right_0.8s_ease-out]' : 'opacity-0'}`}
              >
                Wallet
              </span>
            </h1>
          </div>
          
          {/* Interactive subheading */}
          <div className="mb-12">
            <div className={`bg-pure-white border-6 border-stark-black brutalist-shadow p-6 inline-block transform rotate-1 max-w-2xl hover:rotate-0 hover:scale-105 transition-all duration-500 ${isVisible ? 'animate-[fade-in-up_1s_ease-out_0.8s_both]' : 'opacity-0'}`}>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-wide text-stark-black mb-4 hover:text-electric-blue transition-colors duration-300">
                — On Your Terms —
              </h2>
              <p className="text-lg md:text-xl text-stark-black font-mono uppercase tracking-wide leading-relaxed hover:text-lime-green transition-colors duration-300">
                Self-custody • Lightning-fast • Privacy-first • Brutally simple
              </p>
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center ${isVisible ? 'animate-[fade-in-up_1s_ease-out_1.2s_both]' : 'opacity-0'}`}>
            <Button 
              size="lg" 
              className="bg-electric-blue hover:bg-electric-blue/90 text-pure-white font-black uppercase tracking-wider px-16 py-8 text-2xl border-6 border-stark-black brutalist-shadow hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-200 neon-glow-blue transform -rotate-1 hover:rotate-0 hover:scale-105"
              onClick={() => console.log('🚀 Join Waitlist clicked!')}
            >
              Join Waitlist
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-6 border-stark-black bg-lime-green text-stark-black hover:bg-stark-black hover:text-lime-green font-black uppercase tracking-wider px-16 py-8 text-2xl brutalist-shadow hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-200 transform rotate-1 hover:rotate-0 neon-glow-green hover:scale-105"
              onClick={() => console.log('📖 Learn More clicked!')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced decorative elements with animations */}
      <div className="absolute top-20 right-1/4 w-4 h-32 bg-stark-black transform rotate-45 hover:bg-electric-blue transition-colors duration-300 cursor-pointer float-animation"></div>
      <div className="absolute bottom-20 left-1/4 w-4 h-24 bg-electric-blue transform -rotate-12 hover:bg-lime-green transition-colors duration-300 cursor-pointer bounce-gentle"></div>
      <div className="absolute top-1/2 left-5 w-6 h-6 bg-lime-green brutalist-border hover:w-8 hover:h-8 transition-all duration-300 cursor-pointer"></div>
      <div className="absolute top-1/4 right-5 w-8 h-8 bg-neon-purple brutalist-border hover:rotate-45 transition-transform duration-300 cursor-pointer"></div>
    </section>
  );
};

export default Hero;
