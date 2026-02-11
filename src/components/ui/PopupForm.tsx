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
                <>
                    {/* Backdrop with sophisticated blur and slight darkening */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-900/20 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 40, scale: 0.95 }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 300,
                                duration: 0.6
                            }}
                            className="relative w-full max-w-[340px] md:max-w-[400px] bg-white/70 dark:bg-neutral-900/70 backdrop-blur-3xl rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden pointer-events-auto border border-white/40 group"
                        >
                            {/* Subtle Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

                            {/* Close Button - Refined Glass Style */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/40 hover:bg-white/60 text-slate-600 backdrop-blur-md transition-all flex items-center justify-center z-[102] active:scale-90 border border-white/20 shadow-sm"
                                aria-label="Close modal"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div className="p-4 md:p-8 relative z-10">
                                <div className="text-center mb-4 md:mb-6">
                                    <div className="inline-block px-3 py-1 rounded-full bg-[#f97316]/10 text-[#f97316] text-[8px] font-bold uppercase tracking-[0.2em] mb-2 md:mb-3">
                                        Personal Consultation
                                    </div>
                                    <h2 className="text-lg md:text-2xl font-display font-bold text-[#1e293b] mb-1 md:mb-1.5">
                                        Expert Path Guidance
                                    </h2>
                                    <p className="text-slate-600 text-[11px] md:text-[13px] max-w-[95%] mx-auto leading-tight">
                                        Our counsellors will reach out soon.
                                    </p>
                                </div>

                                <div className="block md:hidden">
                                    <ContactForm onSuccess={onClose} compact={true} />
                                </div>
                                <div className="hidden md:block">
                                    <ContactForm onSuccess={onClose} compact={false} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
