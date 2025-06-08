
const DesignPhilosophy = () => {
  return (
    <section className="py-24 bg-pure-white relative overflow-hidden">
      {/* Large geometric background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="w-96 h-96 border-8 border-stark-black rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
            <span className="text-stark-black">Brutalist</span>
            <br />
            <span className="text-electric-blue text-shadow-neon">By Design</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="text-left">
              <h3 className="text-3xl font-black uppercase mb-6 text-lime-green">
                Function Over Form
              </h3>
              <p className="font-mono uppercase tracking-wide text-sm text-muted-foreground leading-relaxed mb-4">
                Every pixel serves a purpose. No unnecessary decorations. Pure functionality in its rawest form.
              </p>
              <p className="font-mono uppercase tracking-wide text-sm text-muted-foreground leading-relaxed">
                Just like Bitcoin itself — uncompromising, direct, and brutally honest.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="text-3xl font-black uppercase mb-6 text-electric-blue">
                Raw Power
              </h3>
              <p className="font-mono uppercase tracking-wide text-sm text-muted-foreground leading-relaxed mb-4">
                Chunky fonts. High contrast. Neon accents. Mobile-first design that doesn't compromise.
              </p>
              <p className="font-mono uppercase tracking-wide text-sm text-muted-foreground leading-relaxed">
                Built for the next generation of Bitcoin users who value substance over style.
              </p>
            </div>
          </div>
          
          <div className="mt-16 p-8 border-4 border-stark-black bg-stark-black text-pure-white brutalist-shadow">
            <blockquote className="text-2xl font-black uppercase tracking-wide text-lime-green">
              "Form follows function — that has been misunderstood. Form and function should be one."
            </blockquote>
            <cite className="block mt-4 text-sm font-mono uppercase tracking-wider text-pure-white/60">
              — Frank Lloyd Wright
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
