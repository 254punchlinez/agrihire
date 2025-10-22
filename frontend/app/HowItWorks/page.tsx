import { Search, MessageSquare, Handshake, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Search,
    title: "Browse Equipment",
    description:
      "Find the tools you need in your area — from tractors and harvesters to water pumps and tillers. Search by location, price, or tool type.",
    iconColor: "text-yellow-600 bg-gray-100",
  },
  {
    icon: MessageSquare,
    title: "Connect with Owners",
    description:
      "Chat directly with equipment owners to confirm availability, pricing, and pick-up details.",
    iconColor: "text-green-600 bg-gray-100",
  },
  {
    icon: Handshake,
    title: "Rent & Use",
    description:
      "Book the equipment for your preferred date, use it for your farm tasks, and return it when done, hassle-free.",
    iconColor: "text-yellow-600 bg-gray-100",
  },
  {
    icon: Shield,
    title: "Rate & Review",
    description:
      "Share feedback about your experience to help other farmers make informed choices and build trust within the community.",
    iconColor: "text-orange-600 bg-gray-100",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Get the equipment you need in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${step.iconColor}`}
                  >
                    <step.icon className="w-6 h-6" />
                  </div>

                  <div className="text-3xl font-bold text-gray-300 mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {step.title}
                  </h3>

                  <p className="text-emerald-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
