import { ExternalLink, Play, X } from "lucide-react";
import headshot1 from "@/assets/Pom 1.jpg";
import headshot2 from "@/assets/Pom 2.jpg";
import pomJey1 from "@/assets/Pom 3.jpg";
import { useState } from "react";

const highlights = [
  {
    title: "The Office Meeting",
    description: "When the meeting could've been an email — viral skit reaching 2M+ views",
    platform: "TikTok",
    date: "2024",
    link: "https://www.tiktok.com/@pomjey",
    image: headshot1,
    videoId: "7575472592333720888",
  },
  {
    title: "Brand Campaign: TechStart",
    description: "Product launch campaign driving 150K+ engagement in 48 hours",
    platform: "TikTok",
    date: "2024",
    link: "https://www.tiktok.com/@pomjey",
    image: headshot2,
    videoId: "7568028943568162060",
  },
  {
    title: "The Commute Series",
    description: "Weekly series capturing the chaos of public transport — audience favorite",
    platform: "TikTok",
    date: "2024",
    link: "https://www.tiktok.com/@pomjey",
    image: pomJey1,
    videoId: "7579370789837737227",
  },
  {
    title: "Live Comedy Night",
    description: "Sold out stand-up set at The Comedy Store — 500+ attendees",
    platform: "Live Event",
    date: "2024",
    link: "https://www.tiktok.com/@pomjey",
    image: headshot1,
    videoId: "7539425441992412421",
  },
  {
    title: "Holiday Campaign",
    description: "Festive brand partnership reaching 3M+ impressions",
    platform: "TikTok",
    date: "2023",
    link: "https://www.tiktok.com/@pomjey",
    image: headshot2,
    videoId: "7532069689581686021",
  },
  {
    title: "The Job Interview",
    description: "Relatable workplace comedy — 1.5M views and counting",
    platform: "TikTok",
    date: "2023",
    link: "https://www.tiktok.com/@pomjey",
    image: pomJey1,
    videoId: "7523566296433298694",
  },
];

export function HighlightsSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideoModal = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="section-title">Featured Highlights</h2>
          <p className="section-subtitle mx-auto">A selection of top-performing content and memorable moments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className="group bg-card rounded-2xl p-6 border border-border card-hover block opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 100}ms`, animationFillMode: "forwards" }}
            >
              {/* Thumbnail */}
              <div
                className="aspect-video bg-muted rounded-xl mb-5 overflow-hidden relative cursor-pointer"
                onClick={() => openVideoModal(highlight.videoId)}
              >
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <Play className="w-12 h-12 text-white absolute inset-0 m-auto z-10 group-hover:scale-110 transition-transform" />
              </div>

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-poppins font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
                </div>
                <a
                  href={highlight.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0 mt-1"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-3 mt-4 text-xs">
                <span className="px-2 py-1 bg-secondary/20 text-secondary rounded-full">{highlight.platform}</span>
                <span className="text-muted-foreground">{highlight.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeVideoModal}>
          <div
            className="relative w-full max-w-2xl bg-background rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.tiktok.com/embed/${selectedVideo}`}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                title="TikTok Video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
