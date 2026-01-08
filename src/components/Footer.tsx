import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/media", label: "Media" },
  { to: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.tiktok.com/@pomjey", icon: TikTokIcon, label: "TikTok" },
  { href: "https://www.instagram.com/pomjey", icon: Instagram, label: "Instagram" },
  { href: "https://www.facebook.com/pomjey", icon: Facebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="text-center">
            <Link
              to="/"
              className="font-poppins font-bold text-2xl text-foreground hover:text-primary transition-colors flex items-center justify-center gap-2"
            >
              <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <circle cx="16" cy="16" r="16" fill="hsl(45, 100%, 70%)"/>
                <text x="16" y="22" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="hsl(218, 38%, 10%)">PJ</text>
              </svg>
              Pom Jey
            </Link>
            <p className="mt-3 text-muted-foreground text-sm max-w-xs mx-auto">
              Turning everyday moments into sharp, shareable comedy. Available
              for brand collaborations, acting, and live appearances.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-montserrat font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-secondary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="text-center">
            <h4 className="font-montserrat font-semibold text-foreground mb-4">
              Follow Me
            </h4>
            <ul className="flex flex-row justify-center gap-4">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-primary transition-colors bg-muted rounded-full p-2 hover:bg-accent flex items-center justify-center"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Pom Jey. All rights reserved. | Designed and built by{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61572703111798"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors font-medium"
            >
              Simon Star Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
