import React from "react";
import logoImage from "@/assets/gog logo.png";

interface BranchData {
    image: string;
}

interface AirportTreeProps {
    branches: BranchData[];
}

const AirportTree = ({ branches }: AirportTreeProps) => {
    return (
        <div className="relative w-full flex flex-col items-center">
            {/* Branch Images at the top */}
            <div className="relative w-full max-w-4xl mx-auto">
                {/* Mobile Layout: 2x2 grid */}
                <div className="md:hidden grid grid-cols-2 gap-6 px-4">
                    {branches.slice(0, 4).map((branch, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="aspect-square w-full max-w-[160px] mx-auto rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                                <img src={branch.image} alt={`Student ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tablet/Desktop Layout: Images in a row */}
                <div className="hidden md:flex justify-center items-end gap-8 lg:gap-12">
                    {branches.slice(0, 4).map((branch, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl hover:shadow-2xl transition-all hover:scale-110 hover:z-10 bg-white">
                                <img src={branch.image} alt={`Student ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tree Branches SVG */}
            <div className="relative w-full max-w-4xl mx-auto">
                {/* Mobile: Simple vertical lines */}
                <div className="md:hidden flex justify-center py-4">
                    <svg width="200" height="80" viewBox="0 0 200 80" className="overflow-visible">
                        {/* Left branches */}
                        <path
                            d="M100 80 L100 40 L30 10"
                            stroke="hsl(227, 35%, 30%)"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M100 40 L70 10"
                            stroke="hsl(227, 35%, 30%)"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                        />
                        {/* Right branches */}
                        <path
                            d="M100 40 L130 10"
                            stroke="hsl(227, 35%, 30%)"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                        />
                        <path
                            d="M100 40 L170 10"
                            stroke="hsl(227, 35%, 30%)"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                {/* Desktop: Wider branches */}
                <div className="hidden md:flex justify-center py-6">
                    <svg width="600" height="100" viewBox="0 0 600 100" className="overflow-visible">
                        {/* Main trunk */}
                        <path
                            d="M300 100 L300 50"
                            stroke="hsl(227, 35%, 30%)"
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                        />
                        {/* Branch 1 - Far left */}
                        <path
                            d="M300 50 L75 5"
                            stroke="hsl(227, 35%, 30%)"
                            strokeWidth="5"
                            fill="none"
                            strokeLinecap="round"
                        />
                        {/* Branch 2 - Left */}
                        <path
                            d="M300 50 L200 5"
                            stroke="hsl(227, 35%, 30%)"
                            strokeWidth="5"
                            fill="none"
                            strokeLinecap="round"
                        />
                        {/* Branch 3 - Right */}
                        <path
                            d="M300 50 L400 5"
                            stroke="hsl(227, 35%, 30%)"
                            strokeWidth="5"
                            fill="none"
                            strokeLinecap="round"
                        />
                        {/* Branch 4 - Far right */}
                        <path
                            d="M300 50 L525 5"
                            stroke="hsl(227, 35%, 30%)"
                            strokeWidth="5"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>

            {/* Logo at the bottom (tree trunk base) */}
            <div className="relative z-10 bg-white rounded-full p-0 shadow-2xl border-4 border-secondary/20 -mt-4 overflow-hidden">
                <img src={logoImage} alt="Gate of Guidance" className="w-28 h-28 md:w-40 md:h-40 object-cover" />
            </div>
        </div>
    );
};

export default AirportTree;
