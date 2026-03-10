"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Clock, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import MatrixRain from "@/components/ui/MatrixRain";
import { writeups } from "@/data/writeups";

export default function WriteupsPage() {
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const categories = ["All", "CTF", "Malware Analysis", "Web Security", "Cryptography"];

    const filteredWriteups = activeCategory === "All"
        ? writeups
        : writeups.filter(w => w.category === activeCategory);

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
                            Writeups
                        </h1>
                        <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded shadow-[0_0_10px_#0affff]"></div>
                        <p className="text-xl text-foreground/80 font-sans max-w-2xl mx-auto">
                            CTF solutions, vulnerability research, and technical guides from our members.
                        </p>
                    </motion.div>
                </div>

                {/* --- Filters --- */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 font-mono text-sm uppercase tracking-wider rounded border transition-all duration-300 ${activeCategory === category
                                    ? "bg-primary/20 border-primary text-primary shadow-[0_0_10px_#00ff9f]"
                                    : "bg-slate-900/50 border-slate-700 text-foreground/70 hover:border-slate-500 hover:text-foreground"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* --- Writeups Grid --- */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredWriteups.map((writeup) => (
                            <motion.div
                                key={writeup.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group flex flex-col h-full bg-slate-800/40 border border-slate-700 hover:border-secondary/50 rounded-xl overflow-hidden transition-all duration-300 hover:bg-slate-800 backdrop-blur-sm"
                            >
                                {/* Category Header */}
                                <div className="bg-slate-900 border-b border-slate-700 px-5 py-3 flex items-center justify-between group-hover:border-secondary/30 transition-colors">
                                    <span className="font-mono text-xs text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-1 rounded">
                                        {writeup.category}
                                    </span>
                                    <div className="flex items-center text-foreground/60 text-xs font-mono">
                                        <Clock className="w-3 h-3 mr-1" /> {writeup.readTime}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex-1 flex flex-col">
                                    <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {writeup.title}
                                    </h3>
                                    <p className="text-sm text-foreground/70 font-sans line-clamp-3 mb-4 flex-1">
                                        {writeup.excerpt}
                                    </p>

                                    {/* Meta */}
                                    <div className="flex items-center justify-between text-xs font-mono text-foreground/50 border-t border-slate-700/50 pt-4 mt-auto">
                                        <span>{writeup.author}</span>
                                        <span>{new Date(writeup.date).toLocaleDateString()}</span>
                                    </div>
                                </div>

                                {/* Tags & Action */}
                                <div className="px-5 py-4 bg-slate-900/50 flex flex-wrap items-center justify-between gap-y-2 group-hover:bg-slate-900 transition-colors">
                                    <div className="flex gap-2">
                                        {writeup.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-[10px] uppercase font-mono text-foreground/40 before:content-['#']">
                                                {tag.toLowerCase().replace(' ', '_')}
                                            </span>
                                        ))}
                                    </div>

                                    {/* For now, just a dummy link. In a real app, it would go to /writeups/[slug] */}
                                    <Link href={`#`} className="text-sm font-mono text-secondary group-hover:text-primary transition-colors flex items-center gap-1 group/btn">
                                        Read <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {filteredWriteups.length === 0 && (
                        <div className="col-span-full py-20 text-center">
                            <FileText className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                            <p className="text-foreground/50 font-mono text-lg">No writeups found in this category.</p>
                        </div>
                    )}
                </motion.div>

            </div>
        </>
    );
}
