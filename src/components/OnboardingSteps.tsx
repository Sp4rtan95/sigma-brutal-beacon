
import { useState } from "react";

const OnboardingSteps = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      title: "Create Wallet",
      description: "Generate your wallet with military-grade encryption",
      emoji: "🔐"
    },
    {
      number: "02", 
      title: "Restore from Seed",
      description: "Import existing wallet with 12-word recovery phrase",
      emoji: "🌱"
    },
    {
      number: "03",
      title: "Back Up Securely",
      description: "Store your seed phrase offline. Never lose access.",
      emoji: "💾"
    }
  ];

  return (
    <section className="py-24 bg-stark-black text-pure-white relative overflow-hidden">
      {/* Interactive geometric elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-32 bg-electric-blue hover:h-40 transition-all duration-500 cursor-pointer"></div>
      <div className="absolute bottom-0 left-1/4 w-16 h-16 border-4 border-lime-green rotate-45 hover:rotate-90 transition-transform duration-500 cursor-pointer"></div>
      <div className="absolute bottom-0 right-1/4 w-16 h-16 border-4 border-electric-blue -rotate-45 hover:-rotate-90 transition-transform duration-500 cursor-pointer"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-center">
            <span className="text-lime-green text-shadow-neon hover:animate-pulse cursor-default">Get Started</span>
            <br />
            <span className="text-pure-white hover:text-electric-blue transition-colors duration-500 cursor-default">In Seconds</span>
          </h2>
          
          <div className="w-32 h-2 bg-electric-blue mx-auto mb-16 hover:w-48 transition-all duration-500 cursor-pointer"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="text-center relative cursor-pointer"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => console.log(`${step.emoji} Step ${step.number} clicked!`)}
              >
                {/* Interactive connection line */}
                {index < steps.length - 1 && (
                  <div className={`hidden md:block absolute top-16 -right-4 w-8 h-1 bg-electric-blue z-10 transition-all duration-500 ${activeStep === index ? 'bg-lime-green w-12' : ''}`}></div>
                )}
                
                <div className="relative">
                  <div className={`w-32 h-32 mx-auto mb-6 border-4 border-pure-white bg-electric-blue flex items-center justify-center brutalist-shadow transition-all duration-300 hover:scale-110 hover:rotate-12 ${activeStep === index ? 'bg-lime-green scale-110 rotate-12' : ''}`}>
                    <span className="text-4xl font-black text-pure-white">
                      {step.number}
                    </span>
                  </div>
                  
                  <div className={`absolute -top-2 -right-2 text-2xl transition-all duration-300 ${activeStep === index ? 'scale-125 animate-bounce' : ''}`}>
                    {step.emoji}
                  </div>
                  
                  <h3 className={`text-2xl font-black uppercase mb-4 tracking-wider text-lime-green transition-all duration-300 ${activeStep === index ? 'text-electric-blue animate-pulse' : ''}`}>
                    {step.title}
                  </h3>
                  
                  <p className={`font-mono uppercase tracking-wide text-sm text-pure-white/80 max-w-xs mx-auto transition-all duration-300 ${activeStep === index ? 'text-pure-white scale-105' : ''}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSteps;
