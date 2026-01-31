import React from 'react';
import StickyFooter from "@/components/ui/sticky-footer";
import Lenis from '@studio-freight/lenis';
import { ArrowDownIcon } from 'lucide-react';

export default function StickyFooterDemo() {
    React.useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex h-screen flex-col items-center justify-center gap-10">
                <h1 className="max-w-xl text-center">
                    <span className="text-foreground/80 text-4xl font-semibold">
                        example of
                    </span>
                    <br />
                    <span className="text-5xl font-bold">Sticky Footer</span>
                </h1>
                <div className="flex items-center gap-2">
                    <p>Scroll down</p>
                    <ArrowDownIcon className="size-4 animate-bounce" />
                </div>
            </div>
            <div className="h-[50vh] flex items-center justify-center text-muted-foreground italic">
                Content area to show sticky effect...
            </div>
            <StickyFooter />
        </div>
    );
}
