import { Theater, Megaphone, Mic } from "lucide-react";

const services = [
  {
    icon: Theater,
    title: "Acting & Skits",
    description: "Character-driven short-form comedy that captures attention and delivers laughs.",
  },
  {
    icon: Megaphone,
    title: "Brand Collaborations",
    description: "Campaign creative that converts — authentic content that resonates with your audience.",
  },
  {
    icon: Mic,
    title: "Live & Hosting",
    description: "MC, hosting, and stage performances that bring energy and engagement to any event.",
  },
];

export function WhatIDoSection() {
  return (
    <section className="py-20 md:py-15 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle mx-auto">
            Creating content that entertains, engages, and elevates brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 border border-border card-hover opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
