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
                    {/* Subtle Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 300,
                                duration: 0.6
                            }}
                            className={cn(
                                "relative w-full max-w-[340px] md:max-w-[400px]",
                                "bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl px-5 py-6 md:p-8 rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.2)] overflow-hidden border border-white/40 group pointer-events-auto"
                            )}
                        >
                            {/* Subtle Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all flex items-center justify-center z-[102] active:scale-90 border border-slate-200/50 shadow-sm"
                                aria-label="Close"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div className="relative z-10">
                                <div className="text-center mb-5">
                                    <div className="inline-block px-3 py-1 rounded-full bg-[#f97316]/10 text-[#f97316] text-[8px] font-bold uppercase tracking-[0.2em] mb-2">
                                        Personal Consultation
                                    </div>
                                    <h2 className="text-lg md:text-2xl font-display font-bold text-[#1e293b] mb-1">
                                        Expert Path Guidance
                                    </h2>
                                    <p className="text-slate-600 text-[11px] md:text-[13px] leading-tight">
                                        Our counsellors will reach out soon.
                                    </p>
                                </div>

                                <ContactForm onSuccess={onClose} compact={true} />
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
