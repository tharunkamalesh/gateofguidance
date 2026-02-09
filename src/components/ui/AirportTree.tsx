import React from "react";

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
            <div className="relative w-full max-w-6xl mx-auto">
                {/* Mobile Layout: Grid */}
                <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
                    {branches.map((branch, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="aspect-square w-full max-w-[300px] mx-auto rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                                <img src={branch.image} alt={`Student ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tablet/Desktop Layout: Row with wrapped grid */}
                <div className="hidden md:flex flex-wrap justify-center items-center gap-10 lg:gap-14">
                    {branches.map((branch, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl hover:shadow-2xl transition-all hover:scale-110 hover:z-10 bg-white">
                                <img src={branch.image} alt={`Student ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AirportTree;
