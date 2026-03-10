"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, Github, Linkedin, Send } from "lucide-react";
import MatrixRain from "@/components/ui/MatrixRain";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ContactPage() {
    return (
        <>
            <MatrixRain className="fixed inset-0 z-0 opacity-10" color="#0affff" />

            <div className="relative z-10 pt-20 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

                {/* --- Hero Section --- */}
                <div className="text-center py-16 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-wider text-foreground mb-4 glow-text uppercase flex items-center justify-center gap-4">
                            <MessageSquare className="w-10 h-10 md:w-14 md:h-14 text-secondary" />
                            Get In Touch
                        </h1>
                        <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded shadow-[0_0_10px_#0affff]"></div>
                        <p className="text-xl text-foreground/80 font-sans max-w-2xl mx-auto">
                            Have a question, want to collaborate, or report a vulnerability (in our site)? Reach out.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">

                    {/* --- Contact Information & Socials --- */}
                    <motion.div
                        initial="hidden" animate="show" variants={fadeUp}
                        className="lg:col-span-2 space-y-10"
                    >
                        <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-8 backdrop-blur-sm">
                            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Comm Channels</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg text-primary group-hover:border-primary/50 transition-colors">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-sm text-foreground/50 uppercase tracking-widest mb-1">Email</h3>
                                        <a href="mailto:hello@cyberclub.example.com" className="font-mono text-foreground hover:text-primary transition-colors">
                                            hello@cyberclub.example.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg text-secondary group-hover:border-secondary/50 transition-colors">
                                        <MessageSquare className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-sm text-foreground/50 uppercase tracking-widest mb-1">Discord</h3>
                                        <a href="#" className="font-mono text-foreground hover:text-secondary transition-colors">
                                            discord.gg/cyberclub
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg text-foreground group-hover:border-foreground/50 transition-colors">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-sm text-foreground/50 uppercase tracking-widest mb-1">HQ Location</h3>
                                        <p className="font-mono text-foreground">
                                            Computer Science Bldg<br />
                                            Room 404 (Not Found)<br />
                                            University Campus
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-8 backdrop-blur-sm">
                            <h2 className="text-xl font-heading font-bold text-foreground mb-6">Socials Network</h2>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 bg-slate-900 border border-slate-700 rounded flex md:hidden items-center justify-center text-foreground hover:text-primary hover:border-primary hover:bg-slate-800 transition-all group">
                                    <span className="sr-only">Discord</span>
                                </a>
                                {/* Simulated Discord Icon since lucide-react doesn't have it natively sometimes, using text */}
                                <a href="#" className="w-12 h-12 bg-slate-900 border border-slate-700 rounded flex items-center justify-center text-foreground hover:text-primary hover:border-primary hover:bg-slate-800 transition-all group">
                                    <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" /></svg>
                                </a>
                                <a href="#" className="w-12 h-12 bg-slate-900 border border-slate-700 rounded flex items-center justify-center text-foreground hover:text-secondary hover:border-secondary hover:bg-slate-800 transition-all group">
                                    <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-slate-900 border border-slate-700 rounded flex items-center justify-center text-foreground hover:text-white hover:border-white hover:bg-[#0a66c2] transition-all group">
                                    <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- Contact Form --- */}
                    <motion.div
                        initial="hidden" animate="show" variants={fadeUp}
                        className="lg:col-span-3 bg-slate-900/60 border border-slate-700 hover:border-slate-600 transition-colors rounded-xl p-8 backdrop-blur-sm shadow-2xl relative"
                    >
                        {/* Neon Accent */}
                        <div className="absolute top-0 right-0 w-32 h-1 object-right bg-gradient-to-r from-transparent to-primary"></div>
                        <div className="absolute top-0 right-0 w-1 h-32 object-top bg-gradient-to-b from-primary to-transparent"></div>

                        <h2 className="text-2xl font-heading font-bold text-foreground mb-8 glow-text inline-block">Secure Message Protocol</h2>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-mono text-foreground/70 flex items-center gap-2">
                                        <span className="text-primary">&gt;</span> Identifier (Name)
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-slate-950 border border-slate-700 rounded-md p-3 text-foreground font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
                                        placeholder="Neo"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-mono text-foreground/70 flex items-center gap-2">
                                        <span className="text-primary">&gt;</span> Return Address (Email)
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-slate-950 border border-slate-700 rounded-md p-3 text-foreground font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
                                        placeholder="neo@matrix.io"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-mono text-foreground/70 flex items-center gap-2">
                                    <span className="text-primary">&gt;</span> Header (Subject)
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-slate-950 border border-slate-700 rounded-md p-3 text-foreground font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
                                    placeholder="Vulnerability Report"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-mono text-foreground/70 flex items-center gap-2">
                                    <span className="text-primary">&gt;</span> Payload (Message)
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full bg-slate-950 border border-slate-700 rounded-md p-3 text-foreground font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner resize-none"
                                    placeholder="Enter your transmission here..."
                                ></textarea>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 font-mono font-bold tracking-widest text-background bg-foreground hover:bg-primary hover:text-background rounded transition-all duration-300 w-full sm:w-auto uppercase overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        Transmit Data
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>

            </div>
        </>
    );
}
