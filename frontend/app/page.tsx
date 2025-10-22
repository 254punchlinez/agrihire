import HeroSection from "@/components/HeroSection";
import HowItWorks from "./HowItWorks/page";
import FeaturedEquipment from "@/components/Featured";
import Earnings from "@/components/Earnings";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <HeroSection />
      <HowItWorks />
      <FeaturedEquipment />
      <Earnings />
    </main>
  );
}
