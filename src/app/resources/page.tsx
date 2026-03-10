"use client";

import { motion } from "framer-motion";
import { BookOpen, Wrench, Target, MonitorPlay, ExternalLink, ShieldAlert, Cpu, Globe } from "lucide-react";
import MatrixRain from "@/components/ui/MatrixRain";
import { resources, Resource } from "@/data/resources";

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const getCategoryIcon = (category: string) => {
    switch (category) {
        case "Tools": return <Wrench className="w-6 h-6" />;
        case "Practice Platforms": return <Target className="w-6 h-6" />;
        case "Learning": return <BookOpen className="w-6 h-6" />;
        case "Communities": return <Globe className="w-6 h-6" />;
        default: return <ShieldAlert className="w-6 h-6" />;
    }
};

export default function ResourcesPage() {
    // Group resources by category
    const groupedResources = resources.reduce((acc, resource) => {
        if (!acc[resource.category]) {
            acc[resource.category] = [];
        }
        acc[resource.category].push(resource);
        return acc;
    }, {} as Record<string, Resource[]>);

    const categories = Object.keys(groupedResources);

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
                            <Cpu className="w-10 h-10 md:w-14 md:h-14 text-secondary" />
                            Resources
                        </h1>
                        <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded shadow-[0_0_10px_#0affff]"></div>
                        <p className="text-xl text-foreground/80 font-sans max-w-2xl mx-auto">
                            A curated list of tools, practice environments, and learning materials to level up your skills.
                        </p>
                    </motion.div>
                </div>

                {/* --- Categories & Resources --- */}
                <div className="space-y-20">
                    {categories.map((category, idx) => (
                        <motion.section
                            key={category}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-slate-800 rounded-lg border border-slate-700 text-secondary">
                                    {getCategoryIcon(category)}
                                </div>
                                <h2 className="text-3xl font-heading font-bold text-foreground">{category}</h2>
                                <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {groupedResources[category].map((resource) => (
                                    <motion.a
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={resource.id}
                                        variants={fadeUp}
                                        className="group bg-slate-900/50 border border-slate-700 p-6 rounded-xl hover:bg-slate-800 hover:border-secondary/50 transition-all duration-300 flex flex-col h-full shadow-lg"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-secondary transition-colors line-clamp-1">
                                                {resource.name}
                                            </h3>
                                            <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-secondary transition-colors flex-shrink-0" />
                                        </div>

                                        <p className="text-foreground/70 text-sm mb-6 flex-grow font-sans">
                                            {resource.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/80">
                                            {resource.tags.map(tag => (
                                                <span key={tag} className="px-2 py-1 bg-slate-800 text-foreground/60 text-[10px] uppercase font-mono tracking-widest rounded border border-slate-700">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* --- Suggestion CTA --- */}
                <section className="mt-24 text-center">
                    <div className="bg-gradient-to-r from-slate-800/0 via-slate-800/50 to-slate-800/0 py-12 border-y border-slate-800/50">
                        <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Know a great resource?</h3>
                        <p className="text-foreground/60 font-sans mb-6 max-w-lg mx-auto">
                            We are always looking to expand our knowledge base. If you have a tool, tutorial, or platform that helped you, let us know!
                        </p>
                        <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 font-mono text-sm font-bold tracking-widest text-secondary border border-secondary hover:bg-secondary/10 rounded transition-all glow-border uppercase">
                            Suggest Resource
                        </a>
                    </div>
                </section>

            </div>
        </>
    );
}
