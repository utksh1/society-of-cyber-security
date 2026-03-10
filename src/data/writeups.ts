export type Writeup = {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    author: string;
    date: string;
    category: "CTF" | "Malware Analysis" | "Web Security" | "Cryptography";
    readTime: string;
    tags: string[];
};

export const writeups: Writeup[] = [
    {
        id: "w1",
        title: "Bypassing WAFs with SQLi Obfuscation",
        slug: "bypassing-wafs-sqli",
        excerpt: "A deep dive into how modern Web Application Firewalls detect SQL injection and the techniques used to bypass them during our last red team engagement.",
        author: "Alex Vance",
        date: "2024-03-15",
        category: "Web Security",
        readTime: "8 min read",
        tags: ["SQLi", "WAF", "Red Team"],
    },
    {
        id: "w2",
        title: "HackTheBox - 'CyberApocalypse' Walkthrough",
        slug: "htb-cyberapocalypse-walkthrough",
        excerpt: "Complete technical breakdown of the CyberApocalypse web challenges, including custom script payloads and exploit chains.",
        author: "David Kim",
        date: "2024-02-28",
        category: "CTF",
        readTime: "15 min read",
        tags: ["HTB", "CTF", "Web", "Exploit"],
    },
    {
        id: "w3",
        title: "Analyzing Emotet Dropper Macros",
        slug: "analyzing-emotet-dropper",
        excerpt: "Deobfuscating malicious VBA macros found in a recent phishing campaign to extract the final payload URLs.",
        author: "Marcus Johnson",
        date: "2024-01-20",
        category: "Malware Analysis",
        readTime: "12 min read",
        tags: ["Malware", "VBA", "Reverse Engineering"],
    },
    {
        id: "w4",
        title: "Cracking Custom Crypto in Flare-On 10",
        slug: "flare-on-10-crypto",
        excerpt: "Step-by-step guide to recognizing and breaking a non-standard implementation of RSA discovered in challenge 4.",
        author: "Aisha Patel",
        date: "2023-11-05",
        category: "Cryptography",
        readTime: "10 min read",
        tags: ["Crypto", "RSA", "Flare-On"],
    },
    {
        id: "w5",
        title: "The Anatomy of a Cross-Site Scripting (XSS) Attack",
        slug: "anatomy-xss-attack",
        excerpt: "A beginner-friendly overview of Reflected, Stored, and DOM-based XSS, complete with real-world examples and mitigation strategies.",
        author: "Sarah Chen",
        date: "2023-09-12",
        category: "Web Security",
        readTime: "6 min read",
        tags: ["XSS", "Beginner", "Defense"],
    },
    {
        id: "w6",
        title: "Defcon Quals: 'PwnTheWorld' Solution",
        slug: "defcon-quals-pwntheworld",
        excerpt: "How we leveraged a buffer overflow vulnerability to achieve remote code execution in the PwnTheWorld binary.",
        author: "Viktor Novikov",
        date: "2023-08-30",
        category: "CTF",
        readTime: "20 min read",
        tags: ["Pwn", "Buffer Overflow", "RCE"],
    }
];
