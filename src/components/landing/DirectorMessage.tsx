import { motion } from "framer-motion";
import directorImg from "@/assets/director image.jpeg";
import { Quote } from "lucide-react";

export const DirectorMessage = () => {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={directorImg}
                                alt="Director"
                                className="w-full h-auto object-cover max-h-[600px]"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-0"></div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-0"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm px-4 py-2 bg-primary/5 rounded-full">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            Leadership Desk
                        </div>

                        <div className="relative">
                            <Quote className="absolute -top-8 -left-8 w-16 h-16 text-primary/10 -z-1" />
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                                Message from our <span className="text-primary">Director</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed italic font-medium">
                            <p>
                                "Gate of Guidance was founded with a mission to simplify the complex path to international medical education. We provide transparent, ethical guidance to help students navigate admissions and visa processing with ease. Our expertise ensures that every aspiring doctor finds the right institution matching their merit and goals. We are committed to building a trusted platform where integrity and student success are the priority. Join us as we bridge the gap between dreams and reality for future medical professionals worldwide."
                            </p>
                        </div>

                        <div className="pt-4 space-y-2 border-t border-slate-200">
                            <p className="text-2xl font-display font-bold text-slate-900">Mr. Murali Dharan</p>
                            <p className="text-primary font-medium">Founder & Director, GateOfGuidance</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
