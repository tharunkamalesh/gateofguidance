
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle2, DollarSign, HandHeart, Scale, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export interface CardFlipProps {
    title?: string;
    subtitle?: string;
    description?: string;
    features?: string[];
    color?: string;
    icon?: React.ElementType;
    frontImage?: string;
}

export default function CardFlip({
    title = 'Verified universities only',
    subtitle = 'Verified',
    description = 'Every institution in our network is accredited and recognized. We partner only with universities that meet international standards.',
    features = [
        'International Standards',
        'Accredited Network',
        'Quality Education',
        'Recognized Degrees',
    ],
    color = '#1e3a8a',
    icon = ShieldCheck,
    frontImage
}: CardFlipProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const MainIcon = icon;

    return (
        <div
            style={{
                ['--primary' as any]: color ?? '#2563eb',
            }}
            className="group relative h-[360px] w-full max-w-[300px] [perspective:2000px] mx-auto"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div
                className={cn(
                    'relative h-full w-full',
                    '[transform-style:preserve-3d]',
                    'transition-all duration-700',
                    isFlipped
                        ? '[transform:rotateY(180deg)]'
                        : '[transform:rotateY(0deg)]',
                )}
            >
                {/* Front of card */}
                <div
                    className={cn(
                        'absolute inset-0 h-full w-full',
                        '[transform:rotateY(0deg)] [backface-visibility:hidden]',
                        'overflow-hidden rounded-2xl',
                        'bg-gradient-to-br from-white via-slate-50 to-slate-100',
                        'dark:from-zinc-900 dark:via-zinc-900/95 dark:to-zinc-800',
                        'border border-slate-200 dark:border-zinc-800/50',
                        'shadow-lg dark:shadow-xl',
                        'transition-all duration-700',
                        'group-hover:shadow-xl dark:group-hover:shadow-2xl',
                        'group-hover:border-primary/20 dark:group-hover:border-primary/30',
                        isFlipped ? 'opacity-0' : 'opacity-100',
                    )}
                >
                    {/* Background gradient effect */}
                    <div className="from-primary/5 dark:from-primary/10 absolute inset-0 bg-gradient-to-br via-transparent to-blue-500/5 dark:to-blue-500/10" />

                    {/* Main Content */}
                    <div className="absolute inset-0 flex items-center justify-center pt-0 overflow-hidden">
                        {frontImage ? (
                            <div className="relative w-full h-full">
                                <img
                                    src={frontImage}
                                    alt={title}
                                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                                        <MainIcon className="h-8 w-8 text-white" />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="relative flex h-[100px] w-[200px] flex-col items-center justify-center gap-2 pt-20">
                                {/* Abstract lines animation */}
                                {[...Array(6)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={cn(
                                            'h-3 w-full rounded-sm',
                                            'from-primary/20 via-primary/30 to-primary/20 bg-gradient-to-r',
                                            'animate-[slideIn_2s_ease-in-out_infinite]',
                                            'opacity-0',
                                        )}
                                        style={{
                                            width: `${60 + Math.random() * 40}%`,
                                            animationDelay: `${i * 0.2}s`,
                                            marginLeft: `${Math.random() * 20}%`,
                                        }}
                                    />
                                ))}

                                {/* Central icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div
                                        className={cn(
                                            'h-12 w-12 rounded-xl',
                                            'from-primary via-primary/90 to-primary/80 bg-gradient-to-br',
                                            'flex items-center justify-center',
                                            'shadow-primary/25 shadow-lg',
                                            'animate-pulse',
                                            'transition-all duration-500 group-hover:scale-110 group-hover:rotate-12',
                                        )}
                                    >
                                        <MainIcon className="h-6 w-6 text-white" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Bottom content */}
                    <div className="absolute right-0 bottom-0 left-0 p-5">
                        <div className="flex items-center justify-between gap-3">
                            <div className="space-y-1.5">
                                <h3 className={cn(
                                    "text-lg leading-snug font-semibold tracking-tight transition-all duration-500 ease-out group-hover:translate-y-[-4px]",
                                    frontImage ? "text-white" : "text-zinc-900 dark:text-white"
                                )}>
                                    {title}
                                </h3>
                                <p className="line-clamp-2 text-sm tracking-tight text-zinc-600 transition-all delay-[50ms] duration-500 ease-out group-hover:translate-y-[-4px] dark:text-zinc-300">
                                    {subtitle}
                                </p>
                            </div>
                            <div className="group/icon relative">
                                <div
                                    className={cn(
                                        'absolute inset-[-8px] rounded-lg transition-opacity duration-300',
                                        'from-primary/20 via-primary/10 bg-gradient-to-br to-transparent',
                                        'opacity-0 group-hover/icon:opacity-100',
                                    )}
                                />
                                <MainIcon className="text-primary relative z-10 h-5 w-5 transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:rotate-12" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back of card */}
                <div
                    className={cn(
                        'absolute inset-0 h-full w-full',
                        '[transform:rotateY(180deg)] [backface-visibility:hidden]',
                        'rounded-2xl p-5',
                        'bg-gradient-to-br from-white via-slate-50 to-slate-100',
                        'dark:from-zinc-900 dark:via-zinc-900/95 dark:to-zinc-800',
                        'border border-slate-200 dark:border-zinc-800',
                        'shadow-lg dark:shadow-xl',
                        'flex flex-col',
                        'transition-all duration-700',
                        'group-hover:shadow-xl dark:group-hover:shadow-2xl',
                        'group-hover:border-primary/20 dark:group-hover:border-primary/30',
                        !isFlipped ? 'opacity-0' : 'opacity-100',
                    )}
                >
                    {/* Background gradient */}
                    <div className="from-primary/5 dark:from-primary/10 absolute inset-0 rounded-2xl bg-gradient-to-br via-transparent to-blue-500/5 dark:to-blue-500/10" />

                    <div className="relative z-10 flex-1 space-y-5">
                        <div className="space-y-2">
                            <div className="mb-2 flex items-center gap-2">
                                <div className="from-primary via-primary/90 to-primary/80 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
                                    <MainIcon className="h-4 w-4 text-white" />
                                </div>
                                <h3 className="text-lg leading-snug font-semibold tracking-tight text-zinc-900 transition-all duration-500 ease-out group-hover:translate-y-[-2px] dark:text-white">
                                    {title}
                                </h3>
                            </div>
                            <p className="line-clamp-3 text-sm tracking-tight text-zinc-600 transition-all duration-500 ease-out group-hover:translate-y-[-2px] dark:text-zinc-400">
                                {description}
                            </p>
                        </div>

                        <div className="space-y-2.5">
                            {features.map((feature, index) => {
                                return (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-3 text-sm text-zinc-700 transition-all duration-500 dark:text-zinc-300"
                                        style={{
                                            transform: isFlipped
                                                ? 'translateX(0)'
                                                : 'translateX(-10px)',
                                            opacity: isFlipped ? 1 : 0,
                                            transitionDelay: `${index * 100 + 200}ms`,
                                        }}
                                    >
                                        <div className="bg-primary/10 dark:bg-primary/20 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md">
                                            <CheckCircle2 className="text-primary h-3 w-3" />
                                        </div>
                                        <span className="font-medium">{feature}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>


                </div>
            </div>

            <style>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          50% {
            transform: translateX(0);
            opacity: 0.8;
          }
          100% {
            transform: translateX(100px);
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
}
