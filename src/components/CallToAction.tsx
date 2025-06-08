
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Mail } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 bg-stark-black text-pure-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-electric-blue"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-lime-green"></div>
      <div className="absolute top-1/2 left-0 w-2 h-32 bg-electric-blue transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-2 h-32 bg-lime-green transform -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
            <span className="text-electric-blue text-shadow-neon">Join The</span>
            <br />
            <span className="text-lime-green text-shadow-neon">Revolution</span>
          </h2>
          
          <p className="text-xl font-mono uppercase tracking-wide mb-12 text-pure-white/80">
            Be among the first to experience brutalist Bitcoin banking
          </p>
          
          {/* Waitlist Form */}
          <div className="max-w-md mx-auto mb-16">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="YOUR@EMAIL.COM"
                className="flex-1 bg-pure-white text-stark-black border-4 border-pure-white font-mono uppercase tracking-wide placeholder:text-muted-foreground focus:ring-electric-blue focus:border-electric-blue"
              />
              <Button 
                className="bg-electric-blue hover:bg-electric-blue/90 text-pure-white font-black uppercase tracking-wider px-8 border-4 border-electric-blue neon-glow-blue hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-8 mb-16">
            <a 
              href="#" 
              className="p-4 border-4 border-pure-white bg-pure-white text-stark-black hover:bg-electric-blue hover:border-electric-blue hover:text-pure-white transition-all duration-200 brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="p-4 border-4 border-pure-white bg-pure-white text-stark-black hover:bg-lime-green hover:border-lime-green hover:text-pure-white transition-all duration-200 brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <Mail size={24} />
            </a>
          </div>
          
          {/* Footer */}
          <div className="border-t-4 border-pure-white pt-8">
            <p className="font-mono uppercase tracking-wide text-sm text-pure-white/60">
              © 2024 Sigma Wallet. Built with Bitcoin. Powered by Lightning.
            </p>
            <p className="font-mono uppercase tracking-wide text-xs text-pure-white/40 mt-2">
              Not your keys, not your coins. — Sigma Wallet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
