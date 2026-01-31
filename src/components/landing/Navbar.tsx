import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  isRoute?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", isRoute: true },
  { label: "About Us", href: "/about", isRoute: true },
  { label: "Domestic", href: "/domestic", isRoute: true },
  { label: "International", href: "/international", isRoute: true },
  { label: "FAQ's", href: "/#faq", isRoute: true },
  { label: "Contact Us", href: "/contact", isRoute: true },
];

interface NavbarProps {
  variant?: "transparent" | "solid";
}

const Navbar = ({ variant = "transparent" }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Auto-hide logic
    if (latest > previous && latest > 150 && !mobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Contrast logic: After 80px scroll, we switch to solid white background for better visibility
    if (latest > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  // Pages where we might want different initial behavior
  const isSolidPage = location.pathname === "/contact";
  const shouldBeSolid = scrolled || isSolidPage || variant === "solid" || mobileMenuOpen;

  // Dynamic Styles
  const navbarClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    shouldBeSolid
      ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm py-2"
      : "bg-transparent py-4"
  );

  const textColor = shouldBeSolid ? "text-slate-900" : "text-white";
  const navLinkClass = cn(
    "text-sm font-medium transition-colors duration-200",
    shouldBeSolid
      ? "text-slate-600 hover:text-primary"
      : "text-white/80 hover:text-white"
  );

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={navbarClasses}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20 transition-all duration-300">
          {/* Logo */}
          <Link to="/" className={cn(textColor, "font-display text-2xl italic font-bold tracking-tight")}>
            Logo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    navLinkClass,
                    location.pathname === item.href && "underline underline-offset-4 font-bold"
                  )}
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
          <Link to="/contact">
            <Button
              className={cn(
                "hidden md:flex rounded-full px-6 transition-all duration-300",
                shouldBeSolid
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-white text-primary hover:bg-white/90"
              )}
            >
              Enquiry Now
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={cn("md:hidden p-2 rounded-lg transition-colors", textColor)}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border animate-in slide-in-from-top duration-300">
          <div className="section-container py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block py-3 text-lg font-medium text-slate-900 border-b border-slate-100 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block pt-4">
              <Button className="w-full h-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                Enquiry Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;

