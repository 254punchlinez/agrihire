import { Search, MessageSquare, Handshake, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Search,
    title: "Browse Equipment",
    description: "Find the tools you need in your area — from tractors and harvesters to water pumps and tillers. Search by location, price, or tool type.",
    color: "text-primary",
  },
  {
    icon: MessageSquare,
    title: "Connect with Owners",
    description: "Chat directly with equipment owners to confirm availability, pricing, and pick-up details.",
    color: "text-secondary",
  },
  {
    icon: Handshake,
    title: "Rent & Use",
    description: "Book the equipment for your preferred date, use it for your farm tasks, and return it when done, hassle-free.",
    color: "text-accent",
  },
  {
    icon: Shield,
    title: "Rate & Review",
    description: "Share feedback about your experience to help other farmers make informed choices and build trust within the community.",
    color: "text-primary",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get the equipment you need in four simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-border bg-card hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -mr-16 -mt-16" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  
                  <div className="text-3xl font-bold text-muted-foreground/20 mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
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

// export default function HowItWorks(){
//   return(
// <div>
//   <div>
//     <h1>How It Works</h1>
//     <p>Get the equipment you need in four simple steps</p>
//   </div>
// </div>
//   )
// }