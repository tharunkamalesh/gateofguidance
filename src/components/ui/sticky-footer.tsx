import React from 'react';
import { cn } from '@/lib/utils';
import {
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
} from 'lucide-react';
import { Button } from './button';
import { Link } from 'react-router-dom';
import footerBg from '@/assets/footer-background.png';
import logoImage from '@/assets/gog logo.png';

const socialLinks = [
    { title: 'Facebook', href: '#', icon: Facebook },
    { title: 'Instagram', href: '#', icon: Instagram },
    { title: 'Youtube', href: '#', icon: Youtube },
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
            { title: 'Tel: 93420 94698', href: 'tel:+919342094698' },
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
            { title: 'Theni: 197, L.F.Road, Cumbum - 625516.', href: '#' },
            { title: 'Puducherry: No. 89, Anna Nagar Main Road, Anna Nagar - 605005.', href: '#' },
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

type StickyFooterProps = React.ComponentProps<'footer'>;

export default function StickyFooter({ className, ...props }: StickyFooterProps) {
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

                <div className="relative flex w-full flex-col justify-between border-t border-white/10 px-6 py-10 md:px-12 md:py-16 z-20">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 xl:mt-0 relative z-10">
                        <div className="w-full col-span-2 sm:col-span-2 lg:col-span-1 space-y-4 md:space-y-6">
                            <Link to="/" className="shrink-0 flex justify-center md:justify-start mb-2 transition-transform hover:scale-105 active:scale-95">
                                <img
                                    src={logoImage}
                                    alt="Gate of Guidance"
                                    className="h-14 md:h-24 w-auto object-contain drop-shadow-2xl"
                                />
                            </Link>
                            <p className="text-white/80 mt-4 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 text-center md:text-left">
                                Empowering aspiring medical students with verified counseling,
                                transparent admission processes, and global education opportunities.
                            </p>
                            <div className="flex justify-center md:justify-start gap-3 pt-4">
                                {socialLinks.map((link, idx) => (
                                    <Button key={idx} size="icon" variant="outline" className="size-10 border-white/20 text-white bg-white/5 hover:bg-white/10 shadow-none rounded-full">
                                        <link.icon className="size-5" />
                                    </Button>
                                ))}
                            </div>
                        </div>
                        {footerLinkGroups.map((group) => (
                            <div key={group.label} className="w-full space-y-6">
                                <h3 className="text-sm uppercase font-bold tracking-widest text-white/60">{group.label}</h3>
                                <ul className="text-white/90 space-y-4 text-sm font-medium">
                                    {group.links.map((link) => (
                                        <li key={link.title}>
                                            {link.isRoute ? (
                                                <Link
                                                    to={link.href}
                                                    className="hover:text-primary-foreground/70 inline-flex items-center transition-all duration-300"
                                                >
                                                    {link.icon && <link.icon className="me-2 size-4" />}
                                                    {link.title}
                                                </Link>
                                            ) : (
                                                <a
                                                    href={link.href}
                                                    className="hover:text-primary-foreground/70 inline-flex items-center transition-all duration-300"
                                                >
                                                    {link.icon && <link.icon className="me-2 size-4" />}
                                                    {link.title}
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="text-white/40 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 text-xs md:text-sm md:flex-row relative z-10 mt-16">
                        <p>© 2026 Gate of Guidance. All rights reserved.</p>
                        <div className="flex gap-8">
                            <p className="hover:text-white/60 cursor-pointer">Privacy Policy</p>
                            <p className="hover:text-white/60 cursor-pointer">Terms & Conditions</p>
                        </div>
                        <p className="font-semibold text-white/60 italic">Empowering Future Doctors</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
