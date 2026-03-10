export type Member = {
    id: string;
    name: string;
    role: string;
    category: "leadership" | "core" | "mentor" | "member";
    image?: string;
    skills: string[];
    github?: string;
    linkedin?: string;
};

export const members: Member[] = [
    // Leadership
    {
        id: "l1",
        name: "Alex Vance",
        role: "President",
        category: "leadership",
        skills: ["Leadership", "Red Teaming", "Cloud Sec"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
    },
    {
        id: "l2",
        name: "Sarah Chen",
        role: "Vice President",
        category: "leadership",
        skills: ["Operations", "Web Pentesting"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
    },
    {
        id: "l3",
        name: "Marcus Johnson",
        role: "Technical Lead",
        category: "leadership",
        skills: ["Reverse Engineering", "Malware Analysis"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
    },
    {
        id: "l4",
        name: "Elena Rodriguez",
        role: "Operations Lead",
        category: "leadership",
        skills: ["Logistics", "OSINT"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
    },

    // Faculty
    {
        id: "m1",
        name: "Dr. James Harrison",
        role: "Faculty Advisor",
        category: "mentor",
        skills: ["Cryptography", "Network Security", "Academia"],
        linkedin: "https://linkedin.com",
    },

    // Core Team
    {
        id: "c1",
        name: "David Kim",
        role: "Web Security Lead",
        category: "core",
        skills: ["Burp Suite", "OWASP Top 10", "Bug Bounty"],
        github: "https://github.com",
    },
    {
        id: "c2",
        name: "Aisha Patel",
        role: "Research Lead",
        category: "core",
        skills: ["IoT Security", "CVE Analysis"],
        linkedin: "https://linkedin.com",
    },
    {
        id: "c3",
        name: "Viktor Novikov",
        role: "Events Lead",
        category: "core",
        skills: ["CTF Design", "Infrastructure"],
        github: "https://github.com",
    },
    {
        id: "c4",
        name: "Mia Thompson",
        role: "Design Lead",
        category: "core",
        skills: ["UI/UX", "Social Engineering"],
        linkedin: "https://linkedin.com",
    },

    // Members
    {
        id: "mem1",
        name: "Liam O'Connor",
        role: "Member",
        category: "member",
        skills: ["Python", "Linux"],
        github: "https://github.com",
    },
    {
        id: "mem2",
        name: "Sophia Martinez",
        role: "Member",
        category: "member",
        skills: ["Networking", "Wireshark"],
    },
    {
        id: "mem3",
        name: "Noah Jackson",
        role: "Member",
        category: "member",
        skills: ["C++", "Exploit Dev"],
        github: "https://github.com",
    },
    {
        id: "mem4",
        name: "Olivia White",
        role: "Member",
        category: "member",
        skills: ["Forensics", "Autopsy"],
        linkedin: "https://linkedin.com",
    },
    {
        id: "mem5",
        name: "Ethan Lee",
        role: "Member",
        category: "member",
        skills: ["Cryptography"],
    },
    {
        id: "mem6",
        name: "Ava Taylor",
        role: "Member",
        category: "member",
        skills: ["Web Dev", "Security Audit"],
        github: "https://github.com",
    },
];
