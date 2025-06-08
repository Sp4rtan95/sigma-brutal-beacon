
import { QrCode, ArrowDown, ArrowUp, FileText } from "lucide-react";
import { useState } from "react";

const LightningFeatures = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: ArrowUp,
      title: "Send",
      description: "Instant payments to anyone, anywhere",
      color: "electric-blue"
    },
    {
      icon: ArrowDown,
      title: "Receive", 
      description: "Generate invoices in seconds",
      color: "lime-green"
    },
    {
      icon: QrCode,
      title: "QR Codes",
      description: "Scan to pay or share your address",
      color: "electric-blue"
    },
    {
      icon: FileText,
      title: "Low Fees",
      description: "Micropayments without the overhead",
      color: "lime-green"
    }
  ];

  return (
    <section className="py-24 bg-pure-white relative overflow-hidden">
      {/* Interactive decorations */}
      <div className="absolute top-20 left-0 w-32 h-4 bg-lime-green hover:w-40 transition-all duration-500 cursor-pointer"></div>
      <div className="absolute bottom-20 right-0 w-32 h-4 bg-electric-blue hover:w-40 transition-all duration-500 cursor-pointer"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-center">
            <span className="text-stark-black hover:animate-pulse cursor-default">Built For</span>
            <br />
            <span className="text-electric-blue text-shadow-neon hover:text-lime-green transition-colors duration-500 cursor-default">Lightning</span>
          </h2>
          
          <div className="w-32 h-2 bg-lime-green mx-auto mb-16 hover:w-48 transition-all duration-500 cursor-pointer"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`group p-8 border-4 border-stark-black bg-pure-white hover:bg-stark-black hover:text-pure-white transition-all duration-300 brutalist-shadow cursor-pointer transform ${hoveredFeature === index ? 'translate-x-2 translate-y-2 shadow-none scale-105' : 'hover:scale-105'}`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                onClick={() => console.log(`⚡ ${feature.title} feature clicked!`)}
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <feature.icon 
                    size={48} 
                    className={`text-${feature.color} group-hover:text-lime-green transition-colors duration-300 hover:animate-bounce`}
                  />
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 tracking-wider group-hover:animate-pulse">
                  {feature.title}
                </h3>
                <p className="font-mono uppercase tracking-wide text-sm text-muted-foreground group-hover:text-pure-white/80 transition-colors duration-300">
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
