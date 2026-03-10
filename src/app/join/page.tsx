"use client";

import { motion } from "framer-motion";
import { Terminal, Send, CheckCircle2, Shield, Zap, Users } from "lucide-react";
import MatrixRain from "@/components/ui/MatrixRain";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function JoinPage() {
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
                            <Terminal className="w-10 h-10 md:w-14 md:h-14 text-primary" />
                            Join The Club
                        </h1>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded shadow-[0_0_10px_#00ff9f]"></div>
                        <p className="text-xl text-foreground/80 font-sans max-w-2xl mx-auto">
                            Ready to hack, learn, and secure the future? Apply now. No prior experience is required—just a curiosity to learn.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

                    {/* --- Perks / Why Join --- */}
                    <motion.div
                        initial="hidden" animate="show" variants={fadeUp}
                        className="flex flex-col justify-center space-y-10"
                    >
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">Why Join Us?</h2>
                            <div className="space-y-8">
                                {[
                                    { icon: Shield, title: "Hands-on Experience", desc: "Gain real-world skills through interactive labs, CTFs, and offensive/defensive simulations." },
                                    { icon: Users, title: "Community & Networking", desc: "Connect with like-minded peers, alumni, and industry professionals. Build your professional network." },
                                    { icon: Zap, title: "Tools & Resources", desc: "Get access to exclusive training materials, enterprise tools, and club-sponsored certifications." }
                                ].map((perk, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded bg-slate-800/80 border border-slate-700 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(0,255,159,0.1)]">
                                            <perk.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-bold text-xl text-foreground mb-1">{perk.title}</h3>
                                            <p className="text-foreground/70 font-sans leading-relaxed">{perk.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 bg-slate-900/60 border border-secondary/30 rounded-lg relative overflow-hidden backdrop-blur-sm shadow-[0_0_20px_rgba(10,255,255,0.05)]">
                            <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
                            <h4 className="font-mono text-sm uppercase tracking-widest text-secondary mb-2 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> Requirements
                            </h4>
                            <ul className="space-y-2 font-sans text-sm text-foreground/80 list-disc list-inside">
                                <li>Must be a currently enrolled student.</li>
                                <li>Willingness to learn and collaborate.</li>
                                <li>Commitment to ethical practices (Read our Code of Conduct).</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* --- Application Form (Terminal Style) --- */}
                    <motion.div
                        initial="hidden" animate="show" variants={fadeUp}
                        className="bg-[#0a0a0a] border border-slate-700 rounded-lg shadow-2xl relative overflow-hidden"
                    >
                        {/* Terminal Header */}
                        <div className="bg-slate-900 border-b border-slate-700 px-4 py-3 flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="flex-1 text-center font-mono text-xs text-slate-500">
                                bash -- ~/recruit/apply.sh
                            </div>
                        </div>

                        {/* Form Content */}
                        <div className="p-6 md:p-8 font-mono">
                            <div className="mb-6 text-primary text-sm flex items-start gap-2">
                                <span className="shrink-0">$</span>
                                <span className="typing-animate overflow-hidden whitespace-nowrap border-r-2 border-primary pr-1">
                                    ./init_application.sh --user new_member
                                </span>
                            </div>

                            <div className="text-foreground/60 text-xs mb-8">
                                &gt; Initializing application protocol...<br />
                                &gt; Please fill out the required fields below.
                            </div>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                                {/* Input Group */}
                                <div className="group">
                                    <label htmlFor="name" className="block text-xs uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                                        <span className="text-secondary">&gt;</span> Full_Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full bg-transparent border-b border-slate-700 focus:border-primary px-0 py-2 text-foreground font-mono transition-colors focus:outline-none focus:ring-0 placeholder-slate-700"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="group">
                                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                                        <span className="text-secondary">&gt;</span> University_Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full bg-transparent border-b border-slate-700 focus:border-primary px-0 py-2 text-foreground font-mono transition-colors focus:outline-none focus:ring-0 placeholder-slate-700"
                                        placeholder="john@university.edu"
                                    />
                                </div>

                                <div className="group">
                                    <label htmlFor="year" className="block text-xs uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                                        <span className="text-secondary">&gt;</span> Expected_Graduation_Year
                                    </label>
                                    <select
                                        id="year"
                                        className="w-full bg-transparent border-b border-slate-700 focus:border-primary px-0 py-2 text-foreground font-mono transition-colors focus:outline-none focus:ring-0 [&>option]:bg-slate-900 [&>option]:text-foreground"
                                    >
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028+">2028+</option>
                                        <option value="other">Other/Grad</option>
                                    </select>
                                </div>

                                <div className="group">
                                    <label htmlFor="experience" className="block text-xs uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                                        <span className="text-secondary">&gt;</span> Current_Experience_Level
                                    </label>
                                    <select
                                        id="experience"
                                        className="w-full bg-transparent border-b border-slate-700 focus:border-primary px-0 py-2 text-foreground font-mono transition-colors focus:outline-none focus:ring-0 [&>option]:bg-slate-900 [&>option]:text-foreground"
                                    >
                                        <option value="beginner">Beginner (No experience, want to learn)</option>
                                        <option value="intermediate">Intermediate (Some programming/CTF experience)</option>
                                        <option value="advanced">Advanced (Proficient, looking to specialize)</option>
                                    </select>
                                </div>

                                <div className="group">
                                    <label htmlFor="why" className="block text-xs uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                                        <span className="text-secondary">&gt;</span> Why_Join (Max 500 chars)
                                    </label>
                                    <textarea
                                        id="why"
                                        rows={4}
                                        required
                                        className="w-full bg-transparent border border-slate-700 focus:border-primary p-3 text-foreground font-mono transition-colors focus:outline-none focus:ring-0 placeholder-slate-700 rounded-sm resize-none mt-2"
                                        placeholder="Tell us what interests you about cybersecurity..."
                                    ></textarea>
                                </div>

                                <div className="pt-6 border-t border-slate-800">
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-primary text-background font-bold tracking-widest uppercase hover:bg-primary/90 transition-all rounded shadow-[0_0_15px_rgba(0,255,159,0.3)] hover:shadow-[0_0_25px_rgba(0,255,159,0.6)] group"
                                    >
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        Submit Application
                                    </button>
                                    <div className="text-center mt-4 text-xs text-slate-500">
                                        Pressing submit implies agreement to our <a href="#" className="text-secondary underline decoration-secondary/30 underline-offset-2 hover:decoration-secondary">Code of Conduct</a>.
                                    </div>
                                </div>

                            </form>
                        </div>
                    </motion.div>

                </div>

            </div>
        </>
    );
}
