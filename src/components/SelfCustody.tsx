
import { useState } from "react";

const SelfCustody = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      title: "Seed Phrase",
      description: "Generate & backup your 12-word recovery phrase. Your wallet, your responsibility.",
      color: "electric-blue",
      icon: "🔑"
    },
    {
      title: "Privacy First", 
      description: "No KYC. No data collection. No third-party custody. Pure sovereignty.",
      color: "lime-green",
      icon: "🛡️"
    },
    {
      title: "Full Control",
      description: "You hold the keys. You control the funds. No middlemen. No exceptions.",
      color: "electric-blue", 
      icon: "⚡"
    }
  ];

  return (
    <section className="py-24 bg-stark-black text-pure-white relative overflow-hidden">
      {/* Interactive background elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border-4 border-electric-blue pulse-neon hover:border-lime-green transition-colors duration-500 cursor-pointer"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-lime-green hover:bg-electric-blue transition-colors duration-500 cursor-pointer rotate-hover"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-electric-blue text-shadow-neon hover:text-lime-green transition-colors duration-500 cursor-default">
            Your Keys.
            <br />
            <span className="text-lime-green hover:text-electric-blue transition-colors duration-500">Your Coins.</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`p-8 border-4 border-pure-white bg-pure-white text-stark-black brutalist-shadow cursor-pointer transform transition-all duration-300 hover:scale-105 hover:rotate-1 ${hoveredCard === index ? 'translate-x-2 translate-y-2 shadow-none' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => console.log(`${feature.icon} ${feature.title} clicked!`)}
              >
                <div className="text-4xl mb-4 hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className={`text-2xl font-black uppercase mb-4 text-${feature.color} hover:animate-pulse`}>
                  {feature.title}
                </h3>
                <p className="font-mono uppercase tracking-wide text-sm hover:text-gray-600 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfCustody;
