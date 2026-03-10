export type Resource = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: "Tools" | "Practice Platforms" | "Learning" | "Communities";
    tags: string[];
};

export const resources: Resource[] = [
    // Practice Platforms
    {
        id: "r1",
        name: "TryHackMe",
        description: "Hands-on cyber security training through short, gamified real-world labs.",
        url: "https://tryhackme.com",
        category: "Practice Platforms",
        tags: ["Beginner", "Labs", "Guided"],
    },
    {
        id: "r2",
        name: "HackTheBox",
        description: "A massive hacking playground and infosec community. Practice your skills on varied machines.",
        url: "https://hackthebox.com",
        category: "Practice Platforms",
        tags: ["Advanced", "Machines", "Competitive"],
    },
    {
        id: "r3",
        name: "PortSwigger Web Security Academy",
        description: "Free, interactive web security training from the creators of Burp Suite.",
        url: "https://portswigger.net/web-security",
        category: "Practice Platforms",
        tags: ["Web Sec", "Labs", "Free"],
    },

    // Tools
    {
        id: "t1",
        name: "Burp Suite",
        description: "The leading software for web security testing. An essential tool for any web pentester.",
        url: "https://portswigger.net/burp",
        category: "Tools",
        tags: ["Proxy", "Web", "Scanner"],
    },
    {
        id: "t2",
        name: "Nmap",
        description: "Free and open source utility for network discovery and security auditing.",
        url: "https://nmap.org",
        category: "Tools",
        tags: ["Networking", "Scanning", "CLI"],
    },
    {
        id: "t3",
        name: "Wireshark",
        description: "The world's foremost and widely-used network protocol analyzer.",
        url: "https://wireshark.org",
        category: "Tools",
        tags: ["Networking", "Analysis", "PCAP"],
    },

    // Learning
    {
        id: "l1",
        name: "OWASP Top 10",
        description: "A standard awareness document for developers and web application security detailing the most critical security risks.",
        url: "https://owasp.org/www-project-top-ten/",
        category: "Learning",
        tags: ["Theory", "Web Sec", "Standards"],
    },
    {
        id: "l2",
        name: "Reverse Engineering for Beginners",
        description: "A comprehensive free book covering x86/x64, ARM, and MIPS reverse engineering.",
        url: "https://beginners.re/",
        category: "Learning",
        tags: ["Reversing", "Book", "Free"],
    },

    // Communities
    {
        id: "c1",
        name: "NetSec Subreddit",
        description: "A community for technical information security news and discussion.",
        url: "https://reddit.com/r/netsec",
        category: "Communities",
        tags: ["News", "Forum"],
    },
];
