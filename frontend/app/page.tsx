import HeroSection from "@/components/HeroSection";
import HowItWorks from "./HowItWorks/page";

export default function Home() {
  return (
    <main >
      {/* <h1 className="text-3xl font-bold text-gray-800">Welcome to AgriHire</h1> */}
      <HeroSection></HeroSection>
      <HowItWorks></HowItWorks>
    </main>
    // className="min-h-screen flex items-center justify-center"
  );
}
