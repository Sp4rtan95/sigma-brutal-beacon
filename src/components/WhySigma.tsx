
const WhySigma = () => {
  const benefits = [
    "Self-Custody: Your keys, your Bitcoin",
    "Lightning Fast: Instant payments, minimal fees", 
    "Clean UX: Brutalist design, maximum usability",
    "Privacy-Focused: No KYC, no tracking, no compromise",
    "Open Source: Transparent, auditable, trustless",
    "Mobile-First: Built for the smartphone generation"
  ];

  return (
    <section className="py-24 bg-lime-green text-stark-black relative overflow-hidden">
      {/* Geometric decorations */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-stark-black"></div>
      <div className="absolute top-10 right-10 w-16 h-16 border-4 border-stark-black"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-stark-black"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-stark-black">
            Why Sigma?
          </h2>
          
          <div className="w-32 h-2 bg-stark-black mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 border-4 border-stark-black bg-pure-white text-stark-black brutalist-shadow hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-electric-blue border-2 border-stark-black flex items-center justify-center group-hover:bg-lime-green transition-colors duration-200">
                    <span className="text-pure-white font-black text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="font-mono uppercase tracking-wide text-sm font-bold text-left">
                    {benefit}
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

export default WhySigma;
