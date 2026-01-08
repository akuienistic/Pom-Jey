import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, Play } from "lucide-react";
import pom1 from "@/assets/Pom 1.jpg";
import pom2 from "@/assets/Pom 2.jpg";
import pom3 from "@/assets/Pom 3.jpg";
import pom4 from "@/assets/Pom 4.jpg";
import pom5 from "@/assets/Pom 5.jpg";
import pomJey from "@/assets/Pom Jey.jpg";

const topPosts = [
  {
    title: "The Monday Meeting",
    description: "When the weekly sync takes an unexpected turn. 2.3M views, 180K likes.",
    metrics: "2.3M views • 180K likes",
    link: "https://www.tiktok.com/@pomjey",
    image: pom1,
  },
  {
    title: "Bus Stop Chronicles",
    description: "Every public transport user knows this feeling. 1.8M views, 120K likes.",
    metrics: "1.8M views • 120K likes",
    link: "https://www.tiktok.com/@pomjey",
    image: pom2,
  },
  {
    title: "The Interview",
    description: "When they ask 'where do you see yourself in 5 years'. 1.5M views, 95K likes.",
    metrics: "1.5M views • 95K likes",
    link: "https://www.tiktok.com/@pomjey",
    image: pom3,
  },
  {
    title: "Tech Support Call",
    description: "Have you tried turning it off and on again? 1.2M views, 88K likes.",
    metrics: "1.2M views • 88K likes",
    link: "https://www.tiktok.com/@pomjey",
    image: pom4,
  },
  {
    title: "The Office Kitchen",
    description: "Nobody admits to burning the popcorn. 980K views, 72K likes.",
    metrics: "980K views • 72K likes",
    link: "https://www.tiktok.com/@pomjey",
    image: pom5,
  },
  {
    title: "Family Group Chat",
    description: "When your aunt discovers emojis. 850K views, 65K likes.",
    metrics: "850K views • 65K likes",
    link: "https://www.tiktok.com/@pomjey",
    image: pomJey,
  },
];

const testimonials = [
  {
    quote:
      "Working with Pom Jey was an absolute pleasure. The content exceeded our expectations and drove real results for our campaign.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
  },
  {
    quote:
      "Pom brought incredible energy to our corporate event. Guests couldn't stop talking about the entertainment!",
    author: "Michael Chen",
    role: "Events Manager",
    company: "EventsPlus",
  },
  {
    quote: "Creative, professional, and delivers on time. Pom is our go-to for any comedy content needs.",
    author: "Emma Williams",
    role: "Brand Manager",
    company: "Lifestyle Co.",
  },
];

const socialLinks = [
  { name: "TikTok", url: "https://www.tiktok.com/@pomjey", followers: "65K+", primary: true },
  { name: "Instagram", url: "https://www.instagram.com/pomjey", followers: "15K+", primary: false },
  { name: "Facebook", url: "https://www.facebook.com/pomjey", followers: "8K+", primary: false },
];

const Media = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl">
              <p className="text-primary font-montserrat font-semibold mb-4 opacity-0 animate-fade-up">
                Content & Coverage
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-foreground mb-6 opacity-0 animate-fade-up delay-100">
                Media &
                <br />
                <span className="text-primary">Highlights</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up delay-200">
                Top-performing content, testimonials from collaborators, and where to follow the latest.
              </p>
            </div>
          </div>
        </section>

        {/* Top Performing Posts */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="container">
            <h2 className="section-title mb-10">Top Performing Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topPosts.map((post, index) => (
                <a
                  key={post.title}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-background rounded-2xl overflow-hidden border border-border card-hover block opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                >
                  {/* Thumbnail */}
                  <div className="aspect-video bg-muted overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <Play className="w-14 h-14 text-white absolute inset-0 m-auto z-10 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-poppins font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-primary font-medium">{post.metrics}</span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="section-title mb-10">What Collaborators Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.author}
                  className="bg-card rounded-2xl p-8 border border-border opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <blockquote className="text-foreground leading-relaxed mb-6">"{testimonial.quote}"</blockquote>
                  <div>
                    <p className="font-montserrat font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="container">
            <h2 className="section-title mb-10">Follow Along</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group rounded-2xl p-8 border card-hover block text-center opacity-0 animate-fade-up ${
                    social.primary ? "bg-primary/10 border-primary/30" : "bg-background border-border"
                  }`}
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <h3
                    className={`font-poppins font-bold text-2xl mb-2 ${
                      social.primary ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {social.name}
                  </h3>
                  <p className="text-muted-foreground text-lg font-medium">{social.followers} followers</p>
                  <p className="text-muted-foreground text-sm mt-4 group-hover:text-foreground transition-colors">
                    View Profile →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <h2 className="section-title mb-6">Want to Collaborate?</h2>
            <p className="section-subtitle mx-auto mb-10">Let's create content that gets noticed.</p>
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

export default Media;
