"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import MatrixRain from "@/components/ui/MatrixRain";
import { events } from "@/data/events";

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

export default function EventsPage() {
    const upcomingEvents = events.filter(e => e.isUpcoming).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const pastEvents = events.filter(e => !e.isUpcoming).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
                        <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-wider text-foreground mb-4 glow-text uppercase">
                            Events & Training
                        </h1>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded shadow-[0_0_10px_#00ff9f]"></div>
                        <p className="text-xl text-foreground/80 font-sans max-w-2xl mx-auto">
                            Workshops, CTFs, guest lectures, and bootcamps. Level up your hacking skills.
                        </p>
                    </motion.div>
                </div>

                {/* --- Upcoming Events --- */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-heading font-bold text-foreground">Upcoming Events</h2>
                        <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    >
                        {upcomingEvents.map((event, idx) => (
                            <motion.div
                                key={event.id}
                                variants={fadeUp}
                                className="bg-slate-800/40 border border-slate-700 hover:border-primary/60 rounded-xl p-6 relative overflow-hidden group transition-all duration-300 hover:bg-slate-800/60 shadow-lg"
                            >
                                {/* Neon Top Border highlight */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent max-w-0 group-hover:max-w-full group-hover:via-primary group-hover:to-transparent transition-all duration-700"></div>

                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Date Badge */}
                                    <div className="flex-shrink-0 flex flex-col items-center justify-center w-24 h-24 rounded-lg bg-slate-900 border border-slate-700 group-hover:border-primary/50 transition-colors shadow">
                                        <span className="text-sm font-mono text-primary uppercase font-bold tracking-widest">
                                            {new Date(event.date).toLocaleString('default', { month: 'short' })}
                                        </span>
                                        <span className="text-4xl font-heading font-extrabold text-foreground glow-text-subtle">
                                            {new Date(event.date).getDate()}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {event.tags.map(tag => (
                                                    <span key={tag} className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest rounded bg-slate-900 border border-slate-700 text-secondary">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <h3 className="text-2xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                                            <p className="text-foreground/70 text-sm mb-4 line-clamp-2 md:line-clamp-none">{event.description}</p>
                                        </div>

                                        <div className="flex flex-col space-y-2 mt-4">
                                            <div className="flex items-center text-sm font-mono text-foreground/60">
                                                <Clock className="w-4 h-4 mr-2 text-primary" /> {event.time}
                                            </div>
                                            <div className="flex items-center text-sm font-mono text-foreground/60">
                                                <MapPin className="w-4 h-4 mr-2 text-secondary" /> {event.location}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Optional Registration Link */}
                                {event.registrationLink && (
                                    <div className="mt-6 pt-6 border-t border-slate-700/50 flex justify-end">
                                        <a
                                            href={event.registrationLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center px-6 py-2.5 font-mono text-sm font-bold tracking-widest text-background bg-primary hover:bg-primary/90 rounded transition-all shadow-[0_0_15px_rgba(0,255,159,0.3)] hover:shadow-[0_0_20px_rgba(0,255,159,0.6)] uppercase hover:-translate-y-0.5"
                                        >
                                            Register Now
                                        </a>
                                    </div>
                                )}
                            </motion.div>
                        ))}

                        {upcomingEvents.length === 0 && (
                            <div className="col-span-full text-center py-16 bg-slate-800/30 border border-slate-700/50 rounded-xl border-dashed">
                                <Calendar className="w-12 h-12 text-slate-500 mx-auto mb-4" />
                                <p className="font-mono text-foreground/60">No upcoming events scheduled. Check back soon!</p>
                            </div>
                        )}
                    </motion.div>
                </section>

                {/* --- Past Events --- */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-heading font-bold text-foreground/80">Past Events</h2>
                        <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pastEvents.map((event) => (
                            <div key={event.id} className="bg-slate-900/50 border border-slate-800 rounded-lg p-5 opacity-70 hover:opacity-100 transition-opacity flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
                                    <span className="font-mono text-xs text-secondary">{event.date}</span>
                                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-slate-800 text-foreground/60 rounded">{event.type}</span>
                                </div>
                                <h4 className="font-heading font-medium text-lg mb-2">{event.title}</h4>
                                <p className="text-sm text-foreground/50 line-clamp-3 mb-4 flex-grow">{event.description}</p>
                                <div className="mt-auto space-x-2">
                                    {event.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="text-xs text-foreground/40 font-mono before:content-['#']">
                                            {tag.toLowerCase().replace(' ', '_')}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </>
    );
}
