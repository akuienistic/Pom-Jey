import { ExternalLink, Play } from "lucide-react";

const highlights = [
  {
    title: "The Office Meeting",
    description: "When the meeting could've been an email — viral skit reaching 2M+ views",
    platform: "TikTok",
    date: "2024",
    link: "https://www.tiktok.com/@pomjey",
  },
  {
    title: "Brand Campaign: TechStart",
    description: "Product launch campaign driving 150K+ engagement in 48 hours",
    platform: "TikTok",
    date: "2024",
    link: "https://www.tiktok.com/@pomjey",
  },
  {
    title: "The Commute Series",
    description: "Weekly series capturing the chaos of public transport — audience favorite",
    platform: "TikTok",
    date: "2024",
    link: "https://www.tiktok.com/@pomjey",
  },
  {
    title: "Live Comedy Night",
    description: "Sold out stand-up set at The Comedy Store — 500+ attendees",
    platform: "Live Event",
    date: "2024",
    link: "https://www.tiktok.com/@pomjey",
  },
  {
    title: "Holiday Campaign",
    description: "Festive brand partnership reaching 3M+ impressions",
    platform: "TikTok",
    date: "2023",
    link: "https://www.tiktok.com/@pomjey",
  },
  {
    title: "The Job Interview",
    description: "Relatable workplace comedy — 1.5M views and counting",
    platform: "TikTok",
    date: "2023",
    link: "https://www.tiktok.com/@pomjey",
  },
];

export function HighlightsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="section-title">Featured Highlights</h2>
          <p className="section-subtitle mx-auto">
            A selection of top-performing content and memorable moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <a
              key={highlight.title}
              href={highlight.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-2xl p-6 border border-border card-hover block opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-video bg-muted rounded-xl mb-5 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <Play className="w-12 h-12 text-primary relative z-10 group-hover:scale-110 transition-transform" />
              </div>

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-poppins font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1 group-hover:text-primary transition-colors" />
              </div>

              <div className="flex items-center gap-3 mt-4 text-xs">
                <span className="px-2 py-1 bg-secondary/20 text-secondary rounded-full">
                  {highlight.platform}
                </span>
                <span className="text-muted-foreground">{highlight.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
