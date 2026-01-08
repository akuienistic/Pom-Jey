import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-6">
            Ready to Create Something Great?
          </h2>
          <p className="section-subtitle mx-auto mb-10">
            Let's discuss your next campaign, event, or creative project. I'm
            here to bring your vision to life with comedy that connects.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              <Sparkles className="w-5 h-5 mr-2" />
              Work With Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
