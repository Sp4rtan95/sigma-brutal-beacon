
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Mail } from "lucide-react";
import { useState } from "react";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log(`📧 Waitlist signup: ${email}`);
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-stark-black text-pure-white relative overflow-hidden">
      {/* Interactive background elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-electric-blue hover:h-4 transition-all duration-300 cursor-pointer"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-lime-green hover:h-4 transition-all duration-300 cursor-pointer"></div>
      <div className="absolute top-1/2 left-0 w-2 h-32 bg-electric-blue transform -translate-y-1/2 hover:w-4 transition-all duration-300 cursor-pointer"></div>
      <div className="absolute top-1/2 right-0 w-2 h-32 bg-lime-green transform -translate-y-1/2 hover:w-4 transition-all duration-300 cursor-pointer"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
            <span className="text-electric-blue text-shadow-neon hover:animate-pulse cursor-default">Join The</span>
            <br />
            <span className="text-lime-green text-shadow-neon hover:animate-pulse cursor-default">Revolution</span>
          </h2>
          
          <p className="text-xl font-mono uppercase tracking-wide mb-12 text-pure-white/80 hover:text-pure-white transition-colors duration-300">
            Be among the first to experience brutalist Bitcoin banking
          </p>
          
          {/* Interactive Waitlist Form */}
          <div className="max-w-md mx-auto mb-16">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="YOUR@EMAIL.COM"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-pure-white text-stark-black border-4 border-pure-white font-mono uppercase tracking-wide placeholder:text-muted-foreground focus:ring-electric-blue focus:border-electric-blue hover:scale-105 transition-transform duration-200"
                required
              />
              <Button 
                type="submit"
                className={`bg-electric-blue hover:bg-electric-blue/90 text-pure-white font-black uppercase tracking-wider px-8 border-4 border-electric-blue neon-glow-blue hover:translate-x-1 hover:translate-y-1 transition-all duration-200 ${isSubscribed ? 'bg-lime-green border-lime-green' : ''}`}
                disabled={isSubscribed}
              >
                {isSubscribed ? '✓ Joined!' : 'Join Waitlist'}
              </Button>
            </form>
          </div>
          
          {/* Enhanced Social Links */}
          <div className="flex justify-center gap-8 mb-16">
            <a 
              href="#" 
              className={`p-4 border-4 border-pure-white bg-pure-white text-stark-black hover:bg-electric-blue hover:border-electric-blue hover:text-pure-white transition-all duration-200 brutalist-shadow cursor-pointer transform ${hoveredSocial === 'github' ? 'translate-x-1 translate-y-1 shadow-none scale-110' : 'hover:scale-110'}`}
              onMouseEnter={() => setHoveredSocial('github')}
              onMouseLeave={() => setHoveredSocial(null)}
              onClick={() => console.log('🐙 GitHub clicked!')}
            >
              <Github size={24} className="hover:animate-spin transition-transform duration-500" />
            </a>
            <a 
              href="#" 
              className={`p-4 border-4 border-pure-white bg-pure-white text-stark-black hover:bg-lime-green hover:border-lime-green hover:text-pure-white transition-all duration-200 brutalist-shadow cursor-pointer transform ${hoveredSocial === 'mail' ? 'translate-x-1 translate-y-1 shadow-none scale-110' : 'hover:scale-110'}`}
              onMouseEnter={() => setHoveredSocial('mail')}
              onMouseLeave={() => setHoveredSocial(null)}
              onClick={() => console.log('📧 Mail clicked!')}
            >
              <Mail size={24} className="hover:animate-bounce transition-transform duration-500" />
            </a>
          </div>
          
          {/* Interactive Footer */}
          <div className="border-t-4 border-pure-white pt-8 hover:border-electric-blue transition-colors duration-500">
            <p className="font-mono uppercase tracking-wide text-sm text-pure-white/60 hover:text-pure-white/80 transition-colors duration-300">
              © 2024 Sigma Wallet. Built with Bitcoin. Powered by Lightning.
            </p>
            <p className="font-mono uppercase tracking-wide text-xs text-pure-white/40 mt-2 hover:text-lime-green transition-colors duration-300 cursor-default">
              Not your keys, not your coins. — Sigma Wallet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
