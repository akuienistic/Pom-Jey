import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/Pom 4.jpg";
import { Sparkles } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pom Jey - Actor, Comedian, Content Creator"
          className="w-full h-full object-cover object-center md:object-top"
          loading="eager"
        />
        {/* Enhanced Gradient Overlay for better text clarity */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/70 md:from-background/90 md:via-background/70 md:to-background/60" />
        {/* Spotlight Effect */}
        <div className="absolute inset-0 gradient-spotlight opacity-30" />
      </div>

      {/* Content */}
      <div className="relative container text-center pt-24 pb-16">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
          {/* Follower Badge */}
          <div className="badge-pill mx-auto opacity-0 animate-fade-in delay-300">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>65K+ followers</span>
          </div>

          {/* Title */}
          <h1 className="hero-title opacity-0 animate-fade-up delay-100">Pom Jey</h1>

          {/* Subtitle */}
          <p className="hero-subtitle opacity-0 animate-fade-up delay-200">Actor • Comedian • Content Creator</p>

          {/* Punchline */}
          <p className="hero-punchline opacity-0 animate-fade-up delay-300">
            "Turning everyday moments into sharp, shareable comedy."
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-fade-up delay-400">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                <Sparkles className="w-5 h-5 mr-2" />
                Work With Me
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://www.tiktok.com/@pomjey" target="_blank" rel="noopener noreferrer">
                <SiTiktok className="w-5 h-5 mr-2" />
                Follow on TikTok
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute mt-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce-subtle" />
          </div>
        </div>
      </div>
    </section>
  );
}
