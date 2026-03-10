import Link from "next/link";
import { Shield, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 border-t border-primary/20 pt-16 pb-8 mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">

                    {/* Brand Info */}
                    <div className="md:col-span-2 space-y-4">
                        <Link href="/" className="flex items-center gap-2 group w-fit">
                            <Shield className="w-8 h-8 text-primary group-hover:glow-text transition-all duration-300" />
                            <span className="font-heading font-medium text-xl tracking-wider text-foreground">
                                CYBER SECURITY CLUB
                            </span>
                        </Link>
                        <p className="text-foreground/70 text-sm max-w-sm font-sans leading-relaxed">
                            We are a community of students passionate about cybersecurity, ethical hacking, and building a more secure digital future.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="#" className="p-2 bg-slate-800 rounded-md text-foreground/80 hover:text-primary hover:bg-slate-700 hover:glow-border transition-all duration-300" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-md text-foreground/80 hover:text-primary hover:bg-slate-700 hover:glow-border transition-all duration-300" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-md text-foreground/80 hover:text-primary hover:bg-slate-700 hover:glow-border transition-all duration-300" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-md text-foreground/80 hover:text-primary hover:bg-slate-700 hover:glow-border transition-all duration-300" aria-label="Email">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-secondary font-mono tracking-wide text-sm uppercase">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Meet the Team", href: "/team" },
                                { name: "Upcoming Events", href: "/events" },
                                { name: "Technical Writeups", href: "/writeups" },
                                { name: "Learning Resources", href: "/resources" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-foreground/70 hover:text-primary text-sm font-sans transition-colors duration-200 block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-secondary font-mono tracking-wide text-sm uppercase">Contact</h3>
                        <ul className="space-y-3 text-sm font-sans text-foreground/70">
                            <li className="flex items-start">
                                <Mail className="w-5 h-5 mr-3 text-primary shrink-0" />
                                <a href="mailto:hello@cyberclub.edu" className="hover:text-primary transition-colors">
                                    contact@socs.dev
                                </a>
                            </li>
                            <li className="flex flex-col mt-4">
                                <span className="font-mono text-xs text-primary mb-1">Status:</span>
                                <span className="flex items-center text-xs text-foreground/60">
                                    <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse shadow-[0_0_5px_#00ff9f]"></span>
                                    All Systems Operational
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-mono text-foreground/50">
                    <p>
                        &copy; {currentYear} Society of Cyber Security. Default Deny.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
