"use client";

import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Zap, Code, Award, Users } from "lucide-react";
import MatrixRain from "@/components/ui/MatrixRain";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AboutPage() {
    return (
        <>
            <MatrixRain className="fixed inset-0 z-0 opacity-10" color="#0affff" />

            <div className="relative z-10 pt-20 pb-24">
                {/* --- Hero Section --- */}
                <section className="px-4 sm:px-6 lg:px-8 text-center py-16 md:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-wider text-foreground mb-6 glow-text uppercase">
                            About The Club
                        </h1>
                        <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded shadow-[0_0_10px_#0affff]"></div>
                        <p className="text-xl text-foreground/80 font-sans leading-relaxed">
                            We are a collective of students passionate about cybersecurity, ethical hacking, and digital defense. Our goal is to bridge the gap between theoretical knowledge and practical security skills.
                        </p>
                    </motion.div>
                </section>

                {/* --- Mission & Vision --- */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="bg-slate-800/40 border border-slate-700 p-8 rounded-lg relative overflow-hidden group hover:border-secondary/50 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Target className="w-32 h-32 text-secondary" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/30 text-secondary">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-heading font-bold text-foreground">Our Mission</h2>
                                </div>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    To empower students with practical cybersecurity skills through hands-on workshops, real-world simulations, and a collaborative learning environment. We aim to create the next generation of ethical hackers and security professionals.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="bg-slate-800/40 border border-slate-700 p-8 rounded-lg relative overflow-hidden group hover:border-primary/50 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Eye className="w-32 h-32 text-primary" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/30 text-primary">
                                        <Eye className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-heading font-bold text-foreground">Our Vision</h2>
                                </div>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    To build a vibrant, inclusive community where technology enthusiasts can safely explore the depths of cyber defense and offense, ultimately contributing to a more secure digital world.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </section>

                {/* --- What Members Learn --- */}
                <section className="py-20 bg-slate-900/60 border-y border-slate-800 backdrop-blur-md px-4 sm:px-6 lg:px-8 mt-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Core Competencies</h2>
                            <p className="text-foreground/60 max-w-2xl mx-auto">What you can expect to learn and master as a member of the club.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: ShieldCheck, title: "Offensive Security", desc: "Learn penetration testing methodologies, exploiting web vulnerabilities, and network hacking." },
                                { icon: Zap, title: "Defensive Tactics", desc: "Understand how to secure networks, harden servers, and analyze malware." },
                                { icon: Code, title: "Secure Development", desc: "Write secure code, identify vulnerabilities in applications, and practice code auditing." }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-lg text-center hover:bg-slate-800 transition-colors"
                                >
                                    <div className="inline-flex p-4 rounded-full bg-slate-900 border border-slate-700 mb-6 text-foreground">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-heading font-semibold mb-3">{item.title}</h3>
                                    <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Achievements / Timeline --- */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Recent Achievements</h2>
                        <div className="w-16 h-1 bg-primary mx-auto rounded"></div>
                    </div>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                        {[
                            { year: "2024", title: "1st Place - National Cyber League", desc: "Our team secured the top spot out of 500+ competing universities." },
                            { year: "2023", title: "Hosted Security Con", desc: "Successfully organized a regional cybersecurity conference with 300+ attendees." },
                            { year: "2023", title: "Launched Internal CTF Platform", desc: "Built and deployed a custom CTF platform for weekly club challenges." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                            >
                                {/* Timeline dot */}
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-primary text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    <Award className="w-5 h-5" />
                                </div>

                                {/* Content */}
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg border border-slate-700 bg-slate-800/50 shadow">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-heading font-bold text-lg text-foreground">{item.title}</h3>
                                        <span className="font-mono text-sm text-primary">{item.year}</span>
                                    </div>
                                    <p className="text-foreground/70 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
        </>
    );
}
