import Image from "next/image";
import { Github, Linkedin, Shield } from "lucide-react";
import clsx from "clsx";

import { Member } from "@/data/members";

interface MemberCardProps {
    member: Member;
    className?: string;
    featured?: boolean;
}

export default function MemberCard({ member, className, featured = false }: MemberCardProps) {
    return (
        <div
            className={clsx(
                "group relative flex flex-col bg-slate-900 border border-slate-800 rounded overflow-hidden transition-all duration-300 hover:glow-border",
                featured ? "p-6" : "p-5",
                className
            )}
        >
            {/* Glow Hover Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex flex-col items-center text-center">
                {/* Avatar Placeholder / Image */}
                <div className={clsx(
                    "relative rounded-full border-2 border-slate-700 p-1 mb-4 flex items-center justify-center bg-slate-800 overflow-hidden group-hover:border-primary/50 transition-colors duration-300",
                    featured ? "w-28 h-28" : "w-20 h-20"
                )}>
                    {member.image ? (
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover rounded-full"
                        />
                    ) : (
                        <Shield className={clsx(
                            "text-slate-500 group-hover:text-primary/70 transition-colors duration-300",
                            featured ? "w-12 h-12" : "w-10 h-10"
                        )} />
                    )}
                </div>

                {/* Member Info */}
                <h3 className={clsx(
                    "font-heading font-semibold text-foreground tracking-wide group-hover:text-primary transition-colors",
                    featured ? "text-xl mb-1" : "text-lg mb-1"
                )}>
                    {member.name}
                </h3>

                <p className="font-mono text-xs text-secondary mb-4 uppercase tracking-widest">
                    {member.role}
                </p>

                {/* Skills Tags */}
                {member.skills && member.skills.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-2 mb-5 mt-2 max-w-[200px]">
                        {member.skills.slice(0, 3).map(skill => (
                            <span
                                key={skill}
                                className="font-mono text-[10px] px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700"
                            >
                                [{skill}]
                            </span>
                        ))}
                    </div>
                )}

                {/* Social Links */}
                <div className="mt-auto flex space-x-4">
                    {member.github && (
                        <a
                            href={member.github.startsWith('http') ? member.github : `https://${member.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-primary transition-colors duration-200"
                            aria-label={`${member.name}'s GitHub`}
                        >
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                    {member.linkedin && (
                        <a
                            href={member.linkedin.startsWith('http') ? member.linkedin : `https://${member.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-secondary transition-colors duration-200"
                            aria-label={`${member.name}'s LinkedIn`}
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
