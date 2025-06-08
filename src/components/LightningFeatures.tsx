
import { QrCode, ArrowDown, ArrowUp, FileText } from "lucide-react";

const LightningFeatures = () => {
  const features = [
    {
      icon: ArrowUp,
      title: "Send",
      description: "Instant payments to anyone, anywhere"
    },
    {
      icon: ArrowDown,
      title: "Receive",
      description: "Generate invoices in seconds"
    },
    {
      icon: QrCode,
      title: "QR Codes",
      description: "Scan to pay or share your address"
    },
    {
      icon: FileText,
      title: "Low Fees",
      description: "Micropayments without the overhead"
    }
  ];

  return (
    <section className="py-24 bg-pure-white relative overflow-hidden">
      {/* Geometric decorations */}
      <div className="absolute top-20 left-0 w-32 h-4 bg-lime-green"></div>
      <div className="absolute bottom-20 right-0 w-32 h-4 bg-electric-blue"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-center">
            <span className="text-stark-black">Built For</span>
            <br />
            <span className="text-electric-blue text-shadow-neon">Lightning</span>
          </h2>
          
          <div className="w-32 h-2 bg-lime-green mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group p-8 border-4 border-stark-black bg-pure-white hover:bg-stark-black hover:text-pure-white transition-all duration-300 brutalist-shadow hover:translate-x-2 hover:translate-y-2 hover:shadow-none"
              >
                <div className="mb-6">
                  <feature.icon 
                    size={48} 
                    className="text-electric-blue group-hover:text-lime-green transition-colors duration-300" 
                  />
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 tracking-wider">
                  {feature.title}
                </h3>
                <p className="font-mono uppercase tracking-wide text-sm text-muted-foreground group-hover:text-pure-white/80">
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

export default LightningFeatures;
