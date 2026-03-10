"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "Writeups", href: "/writeups" },
    { name: "Resources", href: "/resources" },
    { name: "Join", href: "/join" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled || mobileMenuOpen
                    ? "bg-slate-900/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-primary/20"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2 group">
                            <Shield className="w-8 h-8 text-primary group-hover:glow-text transition-all duration-300" />
                            <span className="font-heading font-bold text-xl tracking-wider text-foreground group-hover:text-primary transition-colors">
                                SOCS
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-1 lg:space-x-4">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={clsx(
                                        "px-3 py-2 rounded-md font-mono text-sm font-medium transition-colors duration-200",
                                        isActive
                                            ? "text-primary glow-text"
                                            : "text-foreground/80 hover:text-primary"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href="/join"
                            className="px-5 py-2 rounded font-mono text-sm font-medium bg-transparent border border-primary text-primary hover:bg-primary/10 glow-border transition-all duration-300 uppercase tracking-widest"
                        >
                            Apply
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-foreground hover:text-primary focus:outline-none p-2"
                            aria-expanded={mobileMenuOpen}
                            aria-label="Toggle navigation menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-primary/20 absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={clsx(
                                        "block px-3 py-2 rounded-md font-mono text-base font-medium",
                                        isActive
                                            ? "text-primary glow-text bg-primary/10"
                                            : "text-foreground/80 hover:text-primary hover:bg-slate-800"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <div className="pt-4 pb-2">
                            <Link
                                href="/join"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block w-full text-center px-5 py-3 rounded font-mono text-sm font-medium bg-primary/10 border border-primary text-primary glow-border uppercase tracking-widest"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
