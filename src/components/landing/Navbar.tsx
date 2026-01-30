import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  href: string;
  isRoute?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", isRoute: true },
  { label: "About Us", href: "/about", isRoute: true },
  { label: "Domestic", href: "/#domestic" },
  { label: "International", href: "/#international" },
  { label: "FAQ's", href: "/#faq" },
  { label: "Contact Us", href: "/#contact" },
];

interface NavbarProps {
  variant?: "transparent" | "solid";
}

const Navbar = ({ variant = "transparent" }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isTransparent = variant === "transparent";
  const textColor = isTransparent ? "text-primary-foreground" : "text-foreground";
  const navLinkClass = isTransparent ? "nav-link" : "text-sm font-medium text-foreground/70 hover:text-foreground transition-colors";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isTransparent ? "bg-transparent" : "bg-background/95 backdrop-blur-sm border-b border-border"}`}>
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className={`${textColor} font-display text-2xl italic`}>
            Logo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`${navLinkClass} ${location.pathname === item.href ? "underline underline-offset-4" : ""}`}
                >
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className={navLinkClass}>
                  {item.label}
                </a>
              )
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
            className={`md:hidden ${textColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden ${isTransparent ? "bg-primary/95" : "bg-background"} backdrop-blur-lg border-t border-border`}>
          <div className="section-container py-4 space-y-4">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block py-2 ${navLinkClass}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block py-2 ${navLinkClass}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Enquiry Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
