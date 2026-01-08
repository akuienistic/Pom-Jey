import { Link } from "react-router-dom";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/media", label: "Media" },
  { to: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.tiktok.com/@pomjey", label: "TikTok" },
  { href: "https://www.instagram.com/pomjey", label: "Instagram" },
  { href: "https://www.facebook.com/pomjey", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-poppins font-bold text-2xl text-foreground hover:text-primary transition-colors"
            >
              Pom Jey
            </Link>
            <p className="mt-3 text-muted-foreground text-sm max-w-xs">
              Turning everyday moments into sharp, shareable comedy. Available
              for brand collaborations, acting, and live appearances.
            </p>
          </div>

          {/* Quick Links */}
          <div>
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
          <div>
            <h4 className="font-montserrat font-semibold text-foreground mb-4">
              Follow Me
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Pom Jey. All rights reserved.</p>
          <p>
            Designed and built by{" "}
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
