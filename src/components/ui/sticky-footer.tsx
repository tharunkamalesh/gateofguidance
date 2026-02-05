import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import {
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
} from 'lucide-react';
import { Button } from './button';
import { Link } from 'react-router-dom';
import footerBg from '@/assets/footer-background.png';

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
    const footerRef = React.useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end end"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
    const blurValue = useTransform(scrollYProgress, [0, 0.8], [10, 0]);
    const filter = useTransform(blurValue, (v) => `blur(${v}px)`);
    const scale = useTransform(scrollYProgress, [0, 0.8], [0.95, 1]);

    return (
        <footer
            ref={footerRef}
            className={cn('relative h-[500px] w-full', className)}
            style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
            {...props}
        >
            <div className="fixed bottom-0 h-[500px] w-full">
                <div
                    className="sticky top-[calc(100vh-500px)] h-full overflow-y-auto bg-footer-bg text-white bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${footerBg})` }}
                >
                    <motion.div
                        style={{ opacity, filter, scale }}
                        className="relative flex size-full flex-col justify-between gap-5 border-t border-white/10 px-4 py-8 md:px-12"
                    >
                        <div className="mt-10 flex flex-col gap-8 md:flex-row xl:mt-0 relative z-10">
                            <AnimatedContainer className="w-full max-w-sm min-w-2xs space-y-4">
                                <Link to="/" className="text-white font-display text-2xl italic font-bold">
                                    Logo
                                </Link>
                                <p className="text-white/60 mt-8 text-sm md:mt-0 leading-relaxed">
                                    Empowering aspiring medical students with verified counseling,
                                    transparent admission processes, and global education opportunities.
                                </p>
                                <div className="flex gap-2">
                                    {socialLinks.map((link, idx) => (
                                        <Button key={idx} size="icon" variant="outline" className="size-8 border-white/20 text-white bg-transparent hover:bg-white/10 shadow-none">
                                            <link.icon className="size-4" />
                                        </Button>
                                    ))}
                                </div>
                            </AnimatedContainer>
                            {footerLinkGroups.map((group, index) => (
                                <AnimatedContainer
                                    key={group.label}
                                    delay={0.1 + index * 0.1}
                                    className="w-full"
                                >
                                    <div className="mb-10 md:mb-0">
                                        <h3 className="text-sm uppercase font-bold tracking-wider text-white/90">{group.label}</h3>
                                        <ul className="text-white/60 mt-4 space-y-2 text-sm md:text-xs lg:text-sm">
                                            {group.links.map((link) => (
                                                <li key={link.title}>
                                                    {link.isRoute ? (
                                                        <Link
                                                            to={link.href}
                                                            className="hover:text-white inline-flex items-center transition-all duration-300"
                                                        >
                                                            {link.icon && <link.icon className="me-1 size-4" />}
                                                            {link.title}
                                                        </Link>
                                                    ) : (
                                                        <a
                                                            href={link.href}
                                                            className="hover:text-white inline-flex items-center transition-all duration-300"
                                                        >
                                                            {link.icon && <link.icon className="me-1 size-4" />}
                                                            {link.title}
                                                        </a>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AnimatedContainer>
                            ))}
                        </div>
                        <div className="text-white/40 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-4 text-sm md:flex-row relative z-10">
                            <p>© 2025 Gate of Guidance. All rights reserved.</p>
                            <p>Empowering Future Doctors</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}



type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
    children?: React.ReactNode;
    delay?: number;
};

function AnimatedContainer({
    delay = 0.1,
    children,
    ...props
}: AnimatedContainerProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <>{children}</>;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
