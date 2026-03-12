import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* School Info */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-4">
              संत ज्ञानेश्वर शिक्षण संस्था
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              अभिनव मतिमंद मुलांची निवासी शाळा, पलूस (पलूस कॉलनी),
              ता. पलूस, जि. सांगली
            </p>
            <p className="text-primary-foreground/70 text-sm mt-2">
              RCI Registration No: 0589
            </p>
            <p className="text-primary-foreground/70 text-sm">
              ISO Certified — First in Western Maharashtra (2016)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">Home</Link>
              <Link to="/about" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">About Us</Link>
              <Link to="/facilities" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">Facilities</Link>
              <Link to="/staff" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">Our Staff</Link>
              <Link to="/contact" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:989074075" className="flex items-center gap-2 text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">
                <Phone size={16} />
                श्री. रविंद्र वसंतराव मोरे — 989074075
              </a>
              <a href="tel:9373131363" className="flex items-center gap-2 text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">
                <Phone size={16} />
                श्री. संभाजी जगन्नाथ साळुंखे — 9373131363
              </a>
              <a href="tel:9665410264" className="flex items-center gap-2 text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">
                <Phone size={16} />
                सौ. संगिता पांडुरंग गायकवाड — 9665410264
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/70 text-sm mt-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>पलूस (पलूस कॉलनी), ता. पलूस, जि. सांगली, महाराष्ट्र 911001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} संत ज्ञानेश्वर शिक्षण संस्था, ईश्वर संचलित. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
