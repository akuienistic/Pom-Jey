import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, Theater, Megaphone, Mic, Lightbulb, Clapperboard, Rocket } from "lucide-react";

const workTypes = [
  {
    icon: Theater,
    title: "Acting & Skits",
    description: "Character-driven short-form comedy for TikTok, Instagram Reels, and YouTube Shorts.",
    deliverables: ["Original character skits", "Scripted comedy scenes", "Trending format adaptations"],
  },
  {
    icon: Megaphone,
    title: "Brand Collaborations",
    description: "Authentic branded content that resonates with your target audience and drives results.",
    deliverables: ["Sponsored content creation", "Product integration videos", "Campaign concepts & scripting"],
  },
  {
    icon: Mic,
    title: "Live & Hosting",
    description: "MC duties, stand-up performances, and event hosting with energy and professionalism.",
    deliverables: ["Event MC & hosting", "Stand-up comedy sets", "Corporate entertainment"],
  },
];

const process = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Concept",
    description: "We start with your goals. What story do you want to tell? Who are we reaching? We brainstorm ideas that align with your brand.",
  },
  {
    icon: Clapperboard,
    step: "02",
    title: "Create",
    description: "From scripting to filming to editing — I handle the creative execution. You stay in the loop with reviews and feedback.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deliver",
    description: "Polished content delivered on time, optimized for your platforms. Ready to post and perform.",
  },
];

const selectedHighlights = [
  {
    title: "TechStart Product Launch",
    description: "Created a series of comedic skits introducing their new app feature. Campaign reached 2M+ users with 8% engagement rate.",
    platform: "TikTok Campaign",
    link: "https://www.tiktok.com/@pomjey",
  },
  {
    title: "The Commute Chronicles",
    description: "Original series documenting the absurdity of public transport. 10M+ views across the series with strong audience retention.",
    platform: "TikTok Series",
    link: "https://www.tiktok.com/@pomjey",
  },
  {
    title: "Comedy Night at The Store",
    description: "Sold-out live comedy performance. 500+ attendees, featured in local press coverage.",
    platform: "Live Event",
    link: "https://www.tiktok.com/@pomjey",
  },
  {
    title: "Holiday Campaign 2023",
    description: "Seasonal brand partnership delivering festive comedy content. 3M+ impressions, 50K+ shares.",
    platform: "Brand Partnership",
    link: "https://www.tiktok.com/@pomjey",
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl">
              <p className="text-primary font-montserrat font-semibold mb-4 opacity-0 animate-fade-up">
                What I Offer
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-foreground mb-6 opacity-0 animate-fade-up delay-100">
                Creative Work
                <br />
                <span className="text-primary">That Delivers</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up delay-200">
                From viral content to live performances — comedy that connects
                with audiences and achieves your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Work */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="container">
            <h2 className="section-title mb-10">Types of Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {workTypes.map((type, index) => (
                <div
                  key={type.title}
                  className="bg-background rounded-2xl p-8 border border-border opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <type.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-foreground mb-3">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.deliverables.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="section-title mb-10">The Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div
                  key={step.step}
                  className="relative opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                >
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-0.5 bg-border" />
                  )}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="font-poppins font-bold text-3xl text-muted-foreground/30">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Highlights */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="container">
            <h2 className="section-title mb-10">Selected Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {selectedHighlights.map((highlight, index) => (
                <a
                  key={highlight.title}
                  href={highlight.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-background rounded-2xl p-8 border border-border card-hover block opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-poppins font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground flex-shrink-0 group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {highlight.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full">
                    {highlight.platform}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <h2 className="section-title mb-6">Ready to Get Started?</h2>
            <p className="section-subtitle mx-auto mb-10">
              Let's discuss your next campaign or project.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Work With Me</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
