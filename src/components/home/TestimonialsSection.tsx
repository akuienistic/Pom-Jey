const testimonials = [
  {
    quote: "Pom Jey brought incredible energy and creativity to our campaign. The content performed beyond expectations.",
    author: "Marketing Director",
    company: "TechStart Inc.",
  },
  {
    quote: "Professional, creative, and a joy to work with. Pom delivered exactly what we needed, on time and on brand.",
    author: "Brand Manager",
    company: "Lifestyle Co.",
  },
  {
    quote: "The audience loved every moment. Pom's hosting style is engaging, authentic, and perfectly on-point.",
    author: "Event Coordinator",
    company: "EventsPlus",
  },
];

const brandLogos = [
  "TechStart",
  "Lifestyle Co",
  "CreativeHub",
  "EventsPlus",
  "MediaFlow",
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-card border-y border-border">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="section-title">What They Say</h2>
          <p className="section-subtitle mx-auto">
            Trusted by brands and event organizers.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.company}
              className="bg-background rounded-2xl p-8 border border-border opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 100}ms`, animationFillMode: 'forwards' }}
            >
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-montserrat font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brandLogos.map((brand) => (
            <span
              key={brand}
              className="font-montserrat font-semibold text-muted-foreground/50 text-lg hover:text-muted-foreground transition-colors"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
