import React from "react";
import logoImage from "@/assets/gog logo.png";

interface BranchData {
    image: string;
    label: string;
}

interface AirportTreeProps {
    branches: BranchData[];
}

const AirportTree = ({ branches }: AirportTreeProps) => {
    // Calculate positions for branches around the center
    // For mobile: vertical list layout
    // For tablet/desktop: radial tree layout

    return (
        <div className="relative w-full">
            {/* Mobile Layout: Vertical list with connecting lines */}
            <div className="md:hidden flex flex-col items-center gap-4">
                {/* Top branch images */}
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                    {branches.slice(0, 2).map((branch, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="aspect-square w-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                                <img src={branch.image} alt={branch.label} className="w-full h-full object-cover" />
                            </div>
                            <p className="mt-2 text-xs font-medium text-muted-foreground text-center">{branch.label}</p>
                        </div>
                    ))}
                </div>

                {/* Connecting line */}
                <div className="w-0.5 h-8 bg-gradient-to-b from-primary/30 to-primary/60" />

                {/* Center Logo */}
                <div className="relative z-10 bg-white rounded-full p-4 shadow-2xl border-4 border-primary/20">
                    <img src={logoImage} alt="Gate of Guidance" className="w-20 h-20 object-contain" />
                </div>

                {/* Connecting line */}
                <div className="w-0.5 h-8 bg-gradient-to-b from-primary/60 to-primary/30" />

                {/* Bottom branch images */}
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                    {branches.slice(2, 4).map((branch, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="aspect-square w-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                                <img src={branch.image} alt={branch.label} className="w-full h-full object-cover" />
                            </div>
                            <p className="mt-2 text-xs font-medium text-muted-foreground text-center">{branch.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tablet/Desktop Layout: Radial tree */}
            <div className="hidden md:block relative min-h-[600px] lg:min-h-[700px]">
                {/* Center Logo */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative bg-white rounded-full p-6 lg:p-8 shadow-2xl border-4 border-primary/20 animate-pulse-slow">
                        <img src={logoImage} alt="Gate of Guidance" className="w-24 h-24 lg:w-32 lg:h-32 object-contain" />
                    </div>
                </div>

                {/* SVG Lines connecting center to branches */}
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" preserveAspectRatio="none">
                    {/* Lines will be drawn from center to each branch position */}
                    {branches.map((_, idx) => {
                        const angle = (idx / branches.length) * 360 - 90; // Start from top
                        const radius = 42; // % from center
                        const radians = (angle * Math.PI) / 180;
                        const endX = 50 + radius * Math.cos(radians);
                        const endY = 50 + radius * Math.sin(radians);

                        return (
                            <line
                                key={idx}
                                x1="50%"
                                y1="50%"
                                x2={`${endX}%`}
                                y2={`${endY}%`}
                                stroke="url(#branchGradient)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                className="opacity-60"
                            />
                        );
                    })}
                    <defs>
                        <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="hsl(227, 35%, 25%)" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="hsl(227, 35%, 45%)" stopOpacity="0.4" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Branch Images positioned radially */}
                {branches.map((branch, idx) => {
                    const angle = (idx / branches.length) * 360 - 90; // Start from top
                    const radius = 42; // % from center
                    const radians = (angle * Math.PI) / 180;
                    const x = 50 + radius * Math.cos(radians);
                    const y = 50 + radius * Math.sin(radians);

                    return (
                        <div
                            key={idx}
                            className="absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 hover:z-30 group"
                            style={{
                                left: `${x}%`,
                                top: `${y}%`,
                            }}
                        >
                            <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-2xl overflow-hidden border-3 border-white shadow-xl group-hover:shadow-2xl bg-white">
                                <img src={branch.image} alt={branch.label} className="w-full h-full object-cover" />
                            </div>
                            <p className="mt-2 text-xs lg:text-sm font-medium text-center text-muted-foreground max-w-[120px] truncate">
                                {branch.label}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AirportTree;
