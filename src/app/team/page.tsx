"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import MatrixRain from "@/components/ui/MatrixRain";
import MemberCard from "@/components/ui/MemberCard";
import { members } from "@/data/members";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function TeamPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const leadership = members.filter(m => m.category === "leadership");
    const coreTeam = members.filter(m => m.category === "core");
    const mentors = members.filter(m => m.category === "mentor");
    const allMembers = members.filter(m => m.category === "member" || m.category === "core" || m.category === "leadership"); // showing everyone in "All Members" or maybe just strictly "member". Let's show everyone who matches search if search is active.

    // If searching, show a flattened list of results across all categories
    const isSearching = searchQuery.trim().length > 0;

    const searchResults = members.filter(m =>
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <>
            <MatrixRain className="fixed inset-0 z-0 opacity-10" color="#0affff" />

            <div className="relative z-10 pt-20 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

                {/* --- Hero Section --- */}
                <div className="text-center py-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-wider text-foreground mb-4 glow-text uppercase">
                            Meet The Team
                        </h1>
                        <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded shadow-[0_0_10px_#0affff]"></div>
                        <p className="text-xl text-foreground/80 font-sans max-w-2xl mx-auto">
                            The hackers, defenders, and builders who make our community thrive.
                        </p>
                    </motion.div>
                </div>

                {/* --- Search Bar --- */}
                <div className="max-w-md mx-auto mb-16 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-secondary" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-3 border border-slate-700 rounded-lg leading-5 bg-slate-900/80 text-foreground placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary sm:text-sm backdrop-blur-sm transition-all shadow-[0_0_15px_rgba(10,255,255,0.1)] focus:shadow-[0_0_20px_rgba(10,255,255,0.3)] font-mono"
                        placeholder="Search by name, role, or skill..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {isSearching ? (
                    /* --- Search Results --- */
                    <motion.div
                        initial="hidden" animate="show" variants={fadeUp}
                        className="mb-16"
                    >
                        <h2 className="text-2xl font-heading font-bold text-foreground mb-8 border-b border-secondary/30 pb-2 inline-block">
                            Search Results ({searchResults.length})
                        </h2>
                        {searchResults.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {searchResults.map((member) => (
                                    <MemberCard
                                        key={member.id}
                                        member={member}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-slate-900/50 border border-slate-800 rounded-lg">
                                <p className="text-foreground/60 font-mono">No members found matching "{searchQuery}"</p>
                            </div>
                        )}
                    </motion.div>
                ) : (
                    /* --- Normal View --- */
                    <div className="space-y-24">

                        {/* Leadership */}
                        <section>
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-heading font-bold text-foreground mb-2 glow-text">Leadership</h2>
                                <p className="text-secondary font-mono text-sm tracking-widest uppercase">Steering the collective</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {leadership.map((member) => (
                                    <MemberCard
                                        key={member.id}
                                        member={member}
                                        featured={true}
                                    />
                                ))}
                            </div>
                        </section>

                        {/* Core Team */}
                        <section>
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-heading font-bold text-foreground mb-2 glow-text">Core Team</h2>
                                <p className="text-primary font-mono text-sm tracking-widest uppercase">Running the operations</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {coreTeam.map((member) => (
                                    <MemberCard
                                        key={member.id}
                                        member={member}
                                    />
                                ))}
                            </div>
                        </section>

                        {/* Faculty Advisor */}
                        <section>
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-heading font-bold text-foreground mb-2 glow-text">Advisor</h2>
                                <p className="text-foreground/60 font-mono text-sm tracking-widest uppercase">Guidance & Support</p>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-full max-w-sm">
                                    {mentors.map((member) => (
                                        <MemberCard
                                            key={member.id}
                                            member={member}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* All Members */}
                        <section>
                            <div className="mb-10 flex items-center justify-between border-b border-slate-800 pb-4">
                                <h2 className="text-2xl font-heading font-bold text-foreground">Our Members</h2>
                                <span className="font-mono text-sm text-foreground/50 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                                    {members.filter(m => m.category === 'member').length} Active
                                </span>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                                {members.filter(m => m.category === 'member').map((member) => (
                                    <div key={member.id} className="bg-slate-800/40 border border-slate-700/50 p-4 rounded-lg text-center hover:bg-slate-800 hover:border-primary/50 transition-colors group">
                                        <div className="w-16 h-16 mx-auto bg-slate-900 rounded-full border border-slate-700 mb-3 flex items-center justify-center text-xl font-heading text-secondary group-hover:shadow-[0_0_15px_rgba(0,255,159,0.3)] transition-all">
                                            {member.name.charAt(0)}
                                        </div>
                                        <div className="font-heading font-semibold text-sm truncate" title={member.name}>{member.name}</div>
                                        <div className="font-mono text-[10px] text-foreground/60 uppercase mt-1 truncate">{member.skills[0] || 'Member'}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>
                )}

            </div>
        </>
    );
}
