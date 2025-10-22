import { Tractor } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full py-20 flex justify-start items-center bg-white"
      style={{
        backgroundImage: 'url("/images/homebg.jpg")',
      }}
    >
      {/*Overlay gradient*/}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/30 to-transparent" />
      {/*Content*/}
      <div className="relative max-w-5xl w-full px-8 sm:px-12 lg:px-20 text-left">



        {/* Tagline */}
        <div className="mt-3 flex flex-wrap justify-start items-center gap-3 mb-6 text-green-700 bg-amber-200 rounded-2xl px-3 py-2 max-w-fit">
          <Tractor size={28} className="pl-1" />
          <span className="text-base sm:text-lg font-semibold tracking-wide">
            Connecting Agriculture Communities
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-6 leading-snug">
          Making Farm Equipment <br className="hidden sm:block" />
          <span className="text-yellow-500 block pt-1">
            Accessible for Every Farmer
          </span>
        </h1>

        {/* Description */}
        <p className="text-olive-green-700 font-light text-base sm:text-lg md:text-xl max-w-3xl">
          AgriHire is a digital platform that connects farmers who own farm
          tools (like tractors, ploughs, and irrigation pumps) with farmers who
          need to hire them. Our goal is simple — make it easier for farmers to
          access equipment, save time, and boost productivity.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-start gap-4">
          <button className="bg-green-500 hover:bg-green-600 transition-colors font-semibold text-white px-5 py-3 rounded-2xl shadow-md">
            Find Equipment
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 transition-colors font-semibold text-white px-5 py-3 rounded-2xl shadow-md">
            List Your Tools
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-col sm:flex-row justify-start items-center gap-6 sm:gap-8 text-sm text-gray-600">
          <div className="text-left">
            <div className="text-2xl font-bold text-green-800">500+</div>
            <div>Active Farmers</div>
          </div>
          <div className="hidden sm:block h-12 w-px bg-gray-300" />
          <div className="text-left">
            <div className="text-2xl font-bold text-green-800">1,200+</div>
            <div>Tools Available</div>
          </div>
          <div className="hidden sm:block h-12 w-px bg-gray-300" />
          <div className="text-left">
            <div className="text-2xl font-bold text-green-800">Ksh.2M+</div>
            <div>Saved in Costs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
