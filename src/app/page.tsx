"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Server, Terminal, Users, Calendar, BookOpen, ArrowRight, ChevronRight } from "lucide-react";
import MatrixRain from "@/components/ui/MatrixRain";

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

export default function Home() {
  return (
    <>
      <MatrixRain className="fixed inset-0 z-0 opacity-15" />

      <div className="relative z-10">
        {/* --- Hero Section --- */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
          {/* Subtle grid background over the matrix */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff9f10_1px,transparent_1px),linear-gradient(to_bottom,#00ff9f10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center max-w-4xl mx-auto mt-10"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm text-primary font-mono text-sm tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#00ff9f]"></span>
              SYSTEM.ROOT.ACCESS.GRANTED
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-wider text-foreground mb-6 glow-text text-balance">
              CYBER SECURITY <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">CLUB</span>
            </h1>

            <p className="mt-4 text-xl md:text-2xl text-foreground/80 font-mono tracking-wide max-w-2xl mb-12">
              Learn <span className="text-primary">•</span> Build <span className="text-secondary">•</span> Secure
              <br />
              <span className="text-base text-foreground/60 mt-4 block font-sans">
                Hands-on cybersecurity, ethical hacking, and research community.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-4 w-full justify-center">
              <Link
                href="/join"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-mono font-bold tracking-widest text-background bg-primary hover:bg-primary/90 rounded overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(0,255,159,0.4)] hover:shadow-[0_0_30px_rgba(0,255,159,0.6)] uppercase"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
                  Join Club
                </span>
                <div className="absolute inset-0 bg-white/20 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
              </Link>

              <Link
                href="/resources"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-mono font-bold tracking-widest text-primary border-2 border-primary hover:bg-primary/10 rounded overflow-hidden transition-all duration-300 glow-border uppercase"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 group-hover:text-secondary transition-colors" />
                  Explore Resources
                </span>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* --- What We Do Section --- */}
        <section className="py-24 bg-slate-900/80 border-y border-primary/20 backdrop-blur-sm relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-wide text-foreground glow-text inline-block">
                WHAT WE DO
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded shadow-[0_0_10px_#00ff9f]"></div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { title: "Security Workshops", icon: Shield, desc: "Hands-on learning with real tools like Burp Suite, Nmap, and Wireshark." },
                { title: "Research & Learning", icon: BookOpen, desc: "Deep dive into vulnerabilities, malware analysis, and defensive strategies." },
                { title: "Practical Projects", icon: Terminal, desc: "Build real security tools, automated scanners, and secure applications." },
                { title: "Community", icon: Users, desc: "Collaborate with like-minded hackers and participate in national CTFs." }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="group bg-slate-800/50 border border-slate-700 hover:border-primary/50 rounded-lg p-6 hover:bg-slate-800 transition-all duration-300 hover:glow-border"
                >
                  <div className="h-12 w-12 rounded bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                    <feature.icon className="w-6 h-6 text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3 tracking-wide">{feature.title}</h3>
                  <p className="text-foreground/70 font-sans leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- Club Stats --- */}
        <section className="py-20 relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-slate-800">
              {[
                { number: "120+", label: "Members" },
                { number: "15", label: "Workshops" },
                { number: "5", label: "Research Projects" },
                { number: "3", label: "National Competitions" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center p-4">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-2 text-shadow-[0_0_15px_rgba(0,255,159,0.5)] glow-text"
                  >
                    {stat.number}
                  </motion.div>
                  <span className="font-mono text-xs md:text-sm text-foreground/80 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Previews Section (Events & Writeups) --- */}
        <section className="py-24 bg-slate-900/80 border-t border-primary/20 backdrop-blur-sm relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Events Preview */}
            <div>
              <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                <h3 className="font-heading text-2xl font-bold flex items-center gap-2">
                  <Calendar className="text-primary" /> Upcoming Events
                </h3>
                <Link href="/events" className="font-mono text-sm text-secondary hover:text-primary transition-colors flex items-center group">
                  View All <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Web Security Workshop", date: "March 22", type: "Workshop" },
                  { title: "Network Security Bootcamp", date: "April 10", type: "Bootcamp" }
                ].map((event, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700 rounded hover:border-primary/30 transition-colors group">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-secondary tracking-widest uppercase">[{event.type}]</span>
                      <h4 className="font-heading font-medium text-lg">{event.title}</h4>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-sm text-foreground/70">{event.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Writeups Preview */}
            <div>
              <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                <h3 className="font-heading text-2xl font-bold flex items-center gap-2">
                  <Terminal className="text-primary" /> Latest Writeups
                </h3>
                <Link href="/writeups" className="font-mono text-sm text-secondary hover:text-primary transition-colors flex items-center group">
                  View All <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="space-y-4">
                {[
                  "SQL Injection Explained",
                  "Beginner Guide to Wireshark",
                  "Intro to Web Pentesting"
                ].map((title, idx) => (
                  <Link href={`/writeups`} key={idx} className="block p-4 bg-slate-800/50 border border-slate-700 rounded hover:border-primary/30 transition-colors group">
                    <h4 className="font-mono font-medium text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                      {title}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-secondary" />
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* --- Join CTA --- */}
        <section className="py-24 border-t border-primary/20 bg-[radial-gradient(ellipse_at_center,rgba(0,255,159,0.05)_0%,transparent_70%)] relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-shadow-[0_0_10px_#00ff9f]">
              Ready to become a cyber defender?
            </h2>
            <p className="font-sans text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
              Join our community of ethical hackers, security researchers, and builders. No prior experience required, just a willingness to learn.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-10 py-5 font-mono font-bold tracking-widest text-background bg-primary hover:bg-primary/90 rounded transition-all duration-300 shadow-[0_0_20px_rgba(0,255,159,0.4)] hover:shadow-[0_0_30px_rgba(0,255,159,0.8)] uppercase text-lg"
            >
              Apply Now
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
