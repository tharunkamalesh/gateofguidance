import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Domestic", href: "#domestic" },
  { label: "International", href: "#international" },
  { label: "FAQ's", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="text-primary-foreground font-display text-2xl italic">
            Logo
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
          >
            Enquiry Now
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-lg border-t border-primary-foreground/10">
          <div className="section-container py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Enquiry Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
