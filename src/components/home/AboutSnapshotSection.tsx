import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import headshot from "@/assets/headshot-1.jpg";

export function AboutSnapshotSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative opacity-0 animate-fade-up">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={headshot}
                alt="Pom Jey headshot"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="opacity-0 animate-fade-up delay-200">
            <h2 className="section-title mb-6">The Story</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Pom Jey turns everyday moments into laugh-out-loud characters.
              Actor, writer, and storyteller — built for short-form platforms
              and live stages.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From viral TikTok skits to brand campaigns and live comedy nights,
              Pom brings authentic energy and sharp comedic timing to every
              project. Whether it's a 60-second video or a 60-minute set, the
              goal is always the same: make people laugh, and make the message
              stick.
            </p>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/about">Read Full Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
