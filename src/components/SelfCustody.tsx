
const SelfCustody = () => {
  return (
    <section className="py-24 bg-stark-black text-pure-white relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border-4 border-electric-blue"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-lime-green"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-electric-blue text-shadow-neon">
            Your Keys.
            <br />
            <span className="text-lime-green">Your Coins.</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 border-4 border-pure-white bg-pure-white text-stark-black brutalist-shadow">
              <h3 className="text-2xl font-black uppercase mb-4 text-electric-blue">
                Seed Phrase
              </h3>
              <p className="font-mono uppercase tracking-wide text-sm">
                Generate & backup your 12-word recovery phrase. Your wallet, your responsibility.
              </p>
            </div>
            
            <div className="p-8 border-4 border-pure-white bg-pure-white text-stark-black brutalist-shadow">
              <h3 className="text-2xl font-black uppercase mb-4 text-lime-green">
                Privacy First
              </h3>
              <p className="font-mono uppercase tracking-wide text-sm">
                No KYC. No data collection. No third-party custody. Pure sovereignty.
              </p>
            </div>
            
            <div className="p-8 border-4 border-pure-white bg-pure-white text-stark-black brutalist-shadow">
              <h3 className="text-2xl font-black uppercase mb-4 text-electric-blue">
                Full Control
              </h3>
              <p className="font-mono uppercase tracking-wide text-sm">
                You hold the keys. You control the funds. No middlemen. No exceptions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfCustody;
