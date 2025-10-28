import { Footprints, MapPin, Star } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";


interface Equipment {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  featured: boolean;
}


const equipmentData: Equipment[] = [
  {
    id: 1,
    name: "Tractor",
    location: "Naivasha",
    rating: 4.9,
    reviews: 24,
    price: 2000,
    image: '/images/tractor.jpg',
    featured: true,
  },
  {
    id: 2,
    name: "Axial-Flow Harvester",
    location: "Kakamega",
    rating: 5,
    reviews: 18,
    price: 8000,
    image: '/images/axial harvester.jpg',
    featured: true,
  },
  {
    id: 3,
    name: "Irrigation System Kit",
    location: "Isiolo",
    rating: 4.8,
    reviews: 31,
    price: 1000,
    image: '/images/irrigation kit.jpg',
    featured: true,
  },
  {
    id: 4,
    name: "Combine Harvester",
    location: "Nakuru",
    rating: 4.8,
    reviews: 31,
    price: 10000,
    image: '/images/combine harvester.jpg',
    featured: true,
  },
];


function EquipmentCard({ equipment }: { equipment: Equipment }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={equipment.image}
          alt={equipment.name}
          className="w-full h-full object-cover"
        />
        {equipment.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full text-sm font-semibold">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {equipment.name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{equipment.location}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-gray-900">
            {equipment.rating}
          </span>
          <span className="text-gray-500 text-sm">
            ({equipment.reviews} reviews)
          </span>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-green-600 font-bold text-2xl">
              Ksh.{equipment.price}
            </span>
            <span className="text-gray-600">/day</span>
          </div>
          <button className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedEquipment() {
  return (
    <div id="featured-equipment" className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Equipment
          </h2>
          <p className="text-xl text-gray-600">
            Quality farm tools available for rent in your area
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {equipmentData.map((equipment) => (
            <EquipmentCard key={equipment.id} equipment={equipment} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold text-lg hover:border-gray-400 hover:bg-gray-100 transition-colors">
            View All Equipment
          </button>
        </div>
      </div>
    </div>
  );
}
