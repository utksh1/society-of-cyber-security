"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative z-10 w-full px-6 py-12 md:py-24 max-w-[1400px] mx-auto flex flex-col gap-16 md:gap-32 font-mono mt-auto overflow-hidden border-t border-slate-800 bg-slate-950">
            {/* Watermark Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none whitespace-nowrap font-black select-none text-center flex flex-col items-center justify-center w-full h-full text-[15rem] md:text-[20rem] leading-[0.8] text-white/[0.02]">
                <span>CYBER</span>
                <span>SECURITY</span>
            </div>

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-xs tracking-widest uppercase">
                <div className="flex flex-col gap-6">
                    <div className="border-b border-white/20 pb-2 mb-2 text-white/50 flex gap-2">
                        <span>01 —</span>
                        <span>Identity</span>
                    </div>
                    <ul className="flex flex-col gap-4">
                        <li><Link href="/about" className="hover:text-primary transition-colors text-white/80">The Narrative</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition-colors text-white/80">Core Values</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="border-b border-white/20 pb-2 mb-2 text-white/50 flex gap-2">
                        <span>02 —</span>
                        <span>Inventory</span>
                    </div>
                    <ul className="flex flex-col gap-4">
                        <li><Link href="/resources" className="hover:text-primary transition-colors text-white/80">Tech Lab</Link></li>
                        <li><Link href="/writeups" className="hover:text-primary transition-colors text-white/80">Archive 01</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="border-b border-white/20 pb-2 mb-2 text-white/50 flex gap-2">
                        <span>03 —</span>
                        <span>Network</span>
                    </div>
                    <ul className="flex flex-col gap-4">
                        <li><Link href="/events" className="hover:text-primary transition-colors text-white/80">Innovation</Link></li>
                        <li><Link href="/join" className="hover:text-primary transition-colors text-white/80">Logistics</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="border-b border-white/20 pb-2 mb-2 text-white/50 flex gap-2">
                        <span>04 —</span>
                        <span>Utility</span>
                    </div>
                    <ul className="flex flex-col gap-4">
                        <li><Link href="/team" className="hover:text-primary transition-colors text-white/80">Partnership</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors text-white/80">Capital</Link></li>
                    </ul>
                </div>
            </div>

            <div className="relative z-10 flex flex-col gap-12 text-xs tracking-widest uppercase text-white/50">
                <div className="w-full max-w-2xl">
                    <label className="block mb-4" htmlFor="email">Communication // Enter Email</label>
                    <div className="relative flex items-center border-b border-white/20 pb-2 group">
                        <input
                            className="w-full bg-transparent border-none focus:ring-0 outline-none p-0 text-white placeholder-white/30 uppercase"
                            id="email"
                            placeholder="YOUR@EMAIL.COM"
                            type="email"
                        />
                        <button className="absolute right-0 text-primary hover:text-primary/80 transition-colors flex items-center justify-center p-2 bg-slate-900">
                            <Mail className="w-4 h-4" />
                            <ArrowUpRight className="w-4 h-4 ml-1" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[10px] w-full max-w-4xl">
                    <div>EST. {currentYear}</div>
                    <div className="sm:text-center">LAT: 37.7749 N // LONG: 122.4194 W</div>
                    <div className="sm:text-right text-primary">AUTO-ENCRYPT ENABLED</div>
                </div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-8 border-t border-white/10 text-[10px] tracking-widest uppercase">
                <div className="flex flex-col gap-4">
                    <div className="text-white/50">Proprietary Assets</div>
                    <div className="text-white/80">© CYBERSECURITY CLUB SYNDICATE</div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="text-white/50">Node Location</div>
                    <div className="text-white/80">SAN FRANCISCO / TOKYO</div>
                </div>

                <div className="flex flex-wrap gap-6 md:gap-12 text-white/50">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Protocol</Link>
                    <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
                </div>
            </div>

            <button
                onClick={scrollToTop}
                className="absolute bottom-6 right-6 w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white/50 hover:text-primary transition-all duration-300 z-50 shadow-lg border border-white/10"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </footer>
    );
}
