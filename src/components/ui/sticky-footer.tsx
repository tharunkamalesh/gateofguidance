import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import {
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
} from 'lucide-react';
import { Button } from './button';
import footerBg from '@/assets/footer-background.png';

const socialLinks = [
    { title: 'Facebook', href: '#', icon: Facebook },
    { title: 'Instagram', href: 'https://www.instagram.com/gateofguidance2026?igsh=MXJsYXJ3aXl5aGR6MA==', icon: Instagram },
    { title: 'LinkedIn', href: '#', icon: Linkedin },
];

const footerLinkGroups: FooterLinkGroup[] = [
    {
        label: 'Quick Links',
        links: [
            { title: 'Home', href: '/', isRoute: true },
            { title: 'About Us', href: '/about', isRoute: true },
            { title: 'Domestic MBBS', href: '/domestic', isRoute: true },
            { title: 'International MBBS', href: '/international', isRoute: true },
            { title: 'Contact Us', href: '/contact', isRoute: true },
        ],
    },
    {
        label: 'Contact Us',
        links: [
            { title: 'Tel: 99442 94698', href: 'tel:+919944294698' },
            { title: 'Email: info@gateofguidance.com', href: 'mailto:info@gateofguidance.com' },
        ],
    },
    {
        label: 'Head Office',
        links: [
            { title: '100 Jalan Sultan, #09-06, Sultan Plaza, Singapore - 199 001.', href: 'https://maps.google.com/?q=100+Jalan+Sultan+Sultan+Plaza+Singapore+199001' },
        ],
    },
    {
        label: 'Branches',
        links: [
            { title: 'Theni: 197, L F Road, Cumbum, Theni-625516', href: '#' },
            { title: 'Puducherry: No:-89, Anna nagar Main Road, Anna nagar, Puducherry-605005', href: '#' },
        ],
    },
];

interface FooterLink {
    title: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
    isRoute?: boolean;
}
interface FooterLinkGroup {
    label: string;
    links: FooterLink[];
}

interface StickyFooterProps extends React.ComponentProps<'footer'> {
    minimal?: boolean;
}

export default function StickyFooter({ className, minimal = false, ...props }: StickyFooterProps) {
    if (minimal) {
        return (
            <footer
                className={cn('w-full bg-[hsl(227,35%,15%)] text-white py-6 md:py-8 border-t border-white/5', className)}
                {...props}
            >
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="text-white/40 flex flex-col items-center justify-between gap-6 text-xs md:text-sm md:flex-row w-full font-sans">
                        <Link to="/" className="order-1 md:order-1 flex items-center gap-2 grayscale brightness-200 opacity-50 hover:opacity-100 transition-opacity">
                            <img
                                src="/images/gog-logo.png"
                                alt="Gate of Guidance"
                                className="h-8 w-auto object-contain"
                            />
                        </Link>
                        <p className="order-2 md:order-2">© 2026 GateOfGuidance Private Limited. All rights reserved.</p>
                        <div className="flex gap-8 order-3 md:order-3">
                            <p className="hover:text-white/60 cursor-pointer transition-colors">Privacy Policy</p>
                            <p className="hover:text-white/60 cursor-pointer transition-colors">Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

    return (
        <footer
            className={cn('relative w-full bg-[hsl(227,35%,15%)] text-white overflow-hidden', className)}
            {...props}
        >
            <div
                className="relative w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${footerBg})` }}
            >
                {/* Dark Overlay for better text legibility */}
                <div className="absolute inset-0 bg-[hsl(227,35%,10%)]/80 md:bg-[hsl(227,35%,10%)]/60" />

                <div className="relative z-20 max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 border-b border-white/10 pb-12">
                        {/* Brand Section */}
                        <div className="space-y-6">
                            <Link to="/" className="inline-block group">
                                <img
                                    src="/images/gog-logo.png"
                                    alt="Gate of Guidance"
                                    className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
                                />
                            </Link>
                            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                                Professional medical education consultancy guiding students toward excellence in India and abroad.
                            </p>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.title}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all group"
                                        aria-label={social.title}
                                    >
                                        <social.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Links Sections */}
                        {footerLinkGroups.map((group) => (
                            <div key={group.label} className="space-y-6">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-white">{group.label}</h4>
                                <ul className="space-y-4">
                                    {group.links.map((link) => (
                                        <li key={link.title}>
                                            {link.isRoute ? (
                                                <Link
                                                    to={link.href}
                                                    className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                                                >
                                                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />
                                                    {link.title}
                                                </Link>
                                            ) : (
                                                <a
                                                    href={link.href}
                                                    className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                                                >
                                                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />
                                                    {link.title}
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="pt-8">
                        <div className="text-white/40 flex flex-col items-center justify-between gap-6 text-xs md:text-sm md:flex-row w-full font-sans">

                            <p className="order-2 md:order-2">© 2026 GateOfGuidance Private Limited. All rights reserved.</p>
                            <div className="flex gap-8 order-3 md:order-3">
                                <p className="hover:text-white/60 cursor-pointer transition-colors">Privacy Policy</p>
                                <p className="hover:text-white/60 cursor-pointer transition-colors">Terms & Conditions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
