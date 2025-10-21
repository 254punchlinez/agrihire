import FeaturedEquipment from "@/components/Featured";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Welcome to AgriHire
      </h1>

      {/* Add your Featured Equipment section here */}
      <FeaturedEquipment />
    </main>
  );
}
