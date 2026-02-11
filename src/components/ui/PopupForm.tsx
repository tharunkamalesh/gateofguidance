import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactForm } from "@/components/landing/ContactForm";

interface PopupFormProps {
    isOpen: boolean;
    onClose: () => void;
}

import { cn } from "@/lib/utils";

export const PopupForm = ({ isOpen, onClose }: PopupFormProps) => {
    // We can use a simple state or media query hook, but since it's responsive via tailwind, 
    // we'll just use tailwind classes.
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: 100, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 100, scale: 0.9 }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 300,
                        duration: 0.6
                    }}
                    className={cn(
                        "fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100]",
                        "w-[calc(100%-2rem)] max-w-[320px] md:max-w-[380px]",
                        "bg-white/90 dark:bg-neutral-900/90 backdrop-blur-2xl px-5 py-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border border-white/40 group pointer-events-auto"
                    )}
                >
                    {/* Subtle Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all flex items-center justify-center z-[102] active:scale-90 border border-slate-200/50 shadow-sm"
                        aria-label="Close"
                    >
                        <X className="w-3.5 h-3.5" />
                    </button>

                    <div className="relative z-10">
                        <div className="text-center mb-4">
                            <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#f97316]/10 text-[#f97316] text-[8px] font-bold uppercase tracking-[0.15em] mb-2">
                                Consultation
                            </div>
                            <h2 className="text-base md:text-xl font-display font-bold text-[#1e293b] mb-1">
                                Expert Path Guidance
                            </h2>
                            <p className="text-slate-600 text-[11px] md:text-[13px] leading-tight">
                                Our counsellors will reach out soon.
                            </p>
                        </div>

                        <ContactForm onSuccess={onClose} compact={true} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
