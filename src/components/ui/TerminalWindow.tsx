"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Square } from "lucide-react";

type Command = {
    cmd: string;
    output: React.ReactNode;
};

export default function TerminalWindow() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<Command[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    // Toggle terminal with '`' (backtick) or 'Ctrl+`'
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "`" && (e.ctrlKey || e.metaKey || !e.ctrlKey)) {
                // Prevent default only if we actually want to swallow the backtick, 
                // but it might interfere with normal typing if they are in an input.
                // Let's only trigger if they aren't focused on an input, OR if they use Ctrl/Meta.
                if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                    if (!e.ctrlKey && !e.metaKey) return;
                }

                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Auto-focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    // Scroll to bottom when history changes
    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [history]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const cmd = input.trim().toLowerCase();
        let output: React.ReactNode = "";

        switch (cmd) {
            case "help":
                output = (
                    <div className="text-foreground/80">
                        Available commands: <br />
                        <span className="text-secondary">help</span>    - Show this message <br />
                        <span className="text-secondary">whoami</span>  - Display current user <br />
                        <span className="text-secondary">clear</span>   - Clear terminal output <br />
                        <span className="text-secondary">date</span>    - Show current system date <br />
                        <span className="text-secondary">sudo</span>    - Execute a command as superuser <br />
                        <span className="text-secondary">matrix</span>  - Initialize simulation
                    </div>
                );
                break;
            case "whoami":
                output = <span className="text-primary">guest@socnet</span>;
                break;
            case "clear":
                setHistory([]);
                setInput("");
                return;
            case "date":
                output = new Date().toString();
                break;
            case "sudo":
            case "sudo su":
                output = <span className="text-red-500">Access Denied: This incident will be reported.</span>;
                break;
            case "matrix":
                output = <span className="text-primary animate-pulse">Initializing construct program... Waking up Neo...</span>;
                break;
            default:
                output = <span className="text-red-400">Command not found: {input}</span>;
        }

        setHistory((prev) => [...prev, { cmd: input, output }]);
        setInput("");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="fixed bottom-4 right-4 w-full max-w-lg z-50 overflow-hidden rounded-lg border border-slate-700 bg-slate-950/95 backdrop-blur-md shadow-2xl font-mono text-sm"
                >
                    {/* Header */}
                    <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex items-center justify-between cursor-move select-none">
                        <div className="text-slate-400 text-xs">guest@cyberclub:~</div>
                        <div className="flex items-center gap-3 text-slate-500">
                            <Minus className="w-3.5 h-3.5 hover:text-slate-300 cursor-pointer" onClick={() => setIsOpen(false)} />
                            <Square className="w-3 h-3 hover:text-slate-300 cursor-pointer" />
                            <X className="w-4 h-4 hover:text-red-400 cursor-pointer" onClick={() => setIsOpen(false)} />
                        </div>
                    </div>

                    {/* Body */}
                    <div className="p-4 h-80 overflow-y-auto flex flex-col" onClick={() => inputRef.current?.focus()}>

                        {history.length === 0 && (
                            <div className="mb-4 text-foreground/60">
                                Society of Cyber Security OS [Version 1.0.0] <br />
                                (c) Cyber Club Corporation. All rights reserved. <br />
                                <br />
                                Type <span className="text-secondary">'help'</span> for a list of commands.
                            </div>
                        )}

                        {history.map((item, idx) => (
                            <div key={idx} className="mb-2">
                                <div className="flex items-start gap-2">
                                    <span className="text-primary font-bold shrink-0">guest@socnet:~$</span>
                                    <span className="text-foreground">{item.cmd}</span>
                                </div>
                                <div className="mt-1 ml-2">{item.output}</div>
                            </div>
                        ))}

                        <form onSubmit={handleCommand} className="flex items-start gap-2 mt-2">
                            <span className="text-primary font-bold shrink-0">guest@socnet:~$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 bg-transparent border-none outline-none text-foreground p-0 focus:ring-0"
                                autoComplete="off"
                                spellCheck="false"
                            />
                        </form>
                        <div ref={bottomRef} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
