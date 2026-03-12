import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "मुख्यपृष्ठ", labelEn: "Home" },
  { to: "/about", label: "आमच्याबद्दल", labelEn: "About" },
  { to: "/facilities", label: "सुविधा", labelEn: "Facilities" },
  { to: "/staff", label: "कर्मचारी", labelEn: "Staff" },
  { to: "/contact", label: "संपर्क", labelEn: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex flex-col">
          <span className="font-heading text-lg md:text-xl font-semibold text-foreground leading-tight">
            संत ज्ञानेश्वर शिक्षण संस्था
          </span>
          <span className="text-xs text-muted-foreground">
            अभिनव मतिमंद मुलांची निवासी शाळा, पलूस
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.labelEn}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-3 text-sm font-medium border-b border-border transition-colors ${
                location.pathname === link.to
                  ? "text-primary bg-secondary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label} — {link.labelEn}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
