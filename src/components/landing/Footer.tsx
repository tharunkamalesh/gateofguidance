import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";


const footerLinks = {
  column1: [
    { label: "About us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Domestic", href: "/domestic" },
    { label: "International", href: "/international" },
    { label: "FAQ's", href: "/#faq" },
  ],
  column2: [
    { label: "Our approach", href: "/#process" },
    { label: "Why choose us", href: "/#about" },
    { label: "Student stories", href: "/#testimonials" },
    { label: "Get in touch", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "https://www.instagram.com/gateofguidance2026?igsh=MXJsYXJ3aXl5aGR6MA==" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-footer-bg">
      <div className="section-container py-16">
        <div className="bg-footer-card rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand & Contact */}
            <div>
              <Link to="/" className="block mb-8 group">
                <img
                  src="/images/gog-logo.png"
                  alt="Gate of Guidance - The Career Destination"
                  className="h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p className="text-muted-foreground">
                    Multiple offices across India serving students nationwide
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Contact</p>
                  <p className="text-muted-foreground">Call our counsellors</p>
                  <a href="mailto:hello@mbbs-admission.com" className="text-primary hover:underline">
                    hello@mbbs-admission.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                {socialLinks.map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Column 1 */}
            <div>
              <ul className="space-y-3">
                {footerLinks.column1.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <ul className="space-y-3">
                {footerLinks.column2.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 GateOfGuidance Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm">
              Privacy policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm">
              Terms of service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm">
              Cookie settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
