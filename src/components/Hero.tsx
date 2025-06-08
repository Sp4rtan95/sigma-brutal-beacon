
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-pure-white relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-electric-blue brutalist-border brutalist-shadow rotate-12 opacity-20"></div>
      <div className="absolute bottom-32 right-32 w-24 h-24 bg-lime-green brutalist-border brutalist-shadow -rotate-12 opacity-20"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-stark-black brutalist-border"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-8 leading-none">
            <span className="block text-stark-black">A Brutalist</span>
            <span className="block text-electric-blue text-shadow-neon animate-neon-pulse">Bitcoin</span>
            <span className="block text-lime-green text-shadow-neon animate-neon-pulse">Lightning</span>
            <span className="block text-stark-black">Wallet</span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-bold uppercase tracking-wide mb-12 text-stark-black">
            <span className="block mb-2">— On Your Terms —</span>
          </div>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-muted-foreground font-mono uppercase tracking-wide leading-relaxed">
            Self-custody • Lightning-fast • Privacy-first • Brutally simple
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-electric-blue hover:bg-electric-blue/90 text-pure-white font-black uppercase tracking-wider px-12 py-6 text-xl brutalist-border brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 neon-glow-blue"
            >
              Join Waitlist
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-4 border-stark-black bg-pure-white text-stark-black hover:bg-stark-black hover:text-pure-white font-black uppercase tracking-wider px-12 py-6 text-xl brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
