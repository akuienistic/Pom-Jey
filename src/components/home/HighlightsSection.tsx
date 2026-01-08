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
                  src={`https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/${
                    highlight.videoId
                  }~tplv-tiktokx-crop:0:0.webp?x-expires=${Date.now() + 86400000}`}
                  alt={highlight.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to original image if TikTok thumbnail fails
                    const target = e.target as HTMLImageElement;
                    target.src = highlight.image;
                  }}
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
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div
            className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl bg-background rounded-3xl overflow-hidden shadow-2xl border border-border/50 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-primary ml-0.5" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground text-sm sm:text-base">Now Playing</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">TikTok Video</p>
                </div>
              </div>
              <button
                onClick={closeVideoModal}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors group"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </button>
            </div>

            {/* Video Container - Responsive aspect ratio */}
            <div className="relative bg-black">
              <div className="w-full max-h-[60vh] sm:max-h-[70vh] lg:max-h-[80vh]">
                <iframe
                  src={`https://www.tiktok.com/embed/${selectedVideo}?autoplay=1&mute=1`}
                  className="w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  title="TikTok Video"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 bg-card/30 backdrop-blur-sm border-t border-border/50">
              <p className="text-xs sm:text-sm text-muted-foreground text-center">
                Watch more content on{" "}
                <a
                  href="https://www.tiktok.com/@pomjey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  @pomjey
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
