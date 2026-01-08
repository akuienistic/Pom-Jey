import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import headshot1 from "@/assets/headshot-1.jpg";
import headshot2 from "@/assets/headshot-2.jpg";
import heroImage from "@/assets/hero-portrait.jpg";

const careerHighlights = [
  { year: "2024", event: "65K+ TikTok followers milestone" },
  { year: "2024", event: "Featured brand ambassador for TechStart Inc." },
  { year: "2024", event: "Sold-out live comedy show at The Comedy Store" },
  { year: "2023", event: "Launched viral 'Commute Series' with 10M+ views" },
  { year: "2023", event: "First major brand campaign partnership" },
  { year: "2022", event: "Started creating content on TikTok" },
];

const philosophy = [
  "Authenticity over perfection — real moments connect more than polished ones.",
  "Comedy is universal — find the truth in everyday chaos.",
  "Collaboration amplifies creativity — the best ideas come from teamwork.",
  "Every platform is a stage — bring the same energy everywhere.",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl">
              <p className="text-primary font-montserrat font-semibold mb-4 opacity-0 animate-fade-up">
                The Story Behind the Comedy
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-foreground mb-6 opacity-0 animate-fade-up delay-100">
                Actor. Comedian.
                <br />
                <span className="text-primary">Content Creator.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up delay-200">
                Pom Jey turns everyday moments into laugh-out-loud characters.
                Actor, writer, and storyteller — built for short-form platforms
                and live stages.
              </p>
            </div>
          </div>
        </section>

        {/* Long Bio */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  From the chaos of everyday life comes comedy gold — at least,
                  that's how Pom Jey sees it. What started as a way to share
                  laughs with friends quickly evolved into a full-blown creative
                  career, with millions of views, brand partnerships, and
                  standing ovations at live venues.
                </p>
                <p>
                  Pom's content is rooted in observation — the absurdity of
                  office culture, the drama of public transport, the universal
                  struggles of adulting. Characters are crafted with care, each
                  one a reflection of someone we all know (or are). The result?
                  Content that doesn't just entertain — it resonates.
                </p>
                <p>
                  Beyond the screen, Pom is a seasoned live performer with
                  experience hosting events, delivering stand-up sets, and
                  bringing energy to any room. Whether it's a 60-second TikTok
                  or a 60-minute stage set, the commitment to quality comedy
                  remains the same.
                </p>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src={headshot1}
                    alt="Pom Jey portrait"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Creative Philosophy */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="section-title mb-10">Creative Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {philosophy.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Timeline */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="container">
            <h2 className="section-title mb-10">Career Highlights</h2>
            <div className="max-w-2xl">
              {careerHighlights.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 py-4 border-b border-border last:border-b-0 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <span className="font-poppins font-bold text-primary w-16 flex-shrink-0">
                    {item.year}
                  </span>
                  <span className="text-foreground">{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="section-title mb-10">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[heroImage, headshot1, headshot2].map((img, index) => (
                <div
                  key={index}
                  className="aspect-[4/5] rounded-2xl overflow-hidden opacity-0 animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                >
                  <img
                    src={img}
                    alt={`Pom Jey portrait ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container text-center">
            <h2 className="section-title mb-6">Let's Create Together</h2>
            <p className="section-subtitle mx-auto mb-10">
              Ready to bring your next project to life? Let's talk.
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

export default About;
