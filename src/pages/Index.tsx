
import Hero from "@/components/Hero";
import SelfCustody from "@/components/SelfCustody";
import LightningFeatures from "@/components/LightningFeatures";
import OnboardingSteps from "@/components/OnboardingSteps";
import DesignPhilosophy from "@/components/DesignPhilosophy";
import WhySigma from "@/components/WhySigma";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SelfCustody />
      <LightningFeatures />
      <OnboardingSteps />
      <DesignPhilosophy />
      <WhySigma />
      <CallToAction />
    </div>
  );
};

export default Index;
