export type ClubEvent = {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    type: "workshop" | "ctf" | "guest-speaker" | "social";
    description: string;
    isUpcoming: boolean;
    registrationLink?: string;
    tags: string[];
};

export const events: ClubEvent[] = [
    // Upcoming Events
    {
        id: "e1",
        title: "Web Security Workshop: Intro to SQLi",
        date: "2024-03-22",
        time: "18:00 - 20:00 EST",
        location: "CS Building, Room 101",
        type: "workshop",
        description: "Learn the fundamentals of SQL Injection, how to detect it, and how to exploit it using hands-on labs. We will provide a safe environment for practice.",
        isUpcoming: true,
        registrationLink: "https://example.com/register/e1",
        tags: ["Web Sec", "SQLi", "Beginner"],
    },
    {
        id: "e2",
        title: "Network Security Bootcamp",
        date: "2024-04-10",
        time: "10:00 - 15:00 EST",
        location: "Virtual (Discord)",
        type: "workshop",
        description: "A full-day bootcamp covering network mapping with Nmap, packet analysis with Wireshark, and identifying common misconfigurations.",
        isUpcoming: true,
        registrationLink: "https://example.com/register/e2",
        tags: ["Networking", "Nmap", "Wireshark", "Intermediate"],
    },
    {
        id: "e3",
        title: "Spring Internal CTF",
        date: "2024-04-25",
        time: "09:00 - 21:00 EST",
        location: "Student Union, Main Hall",
        type: "ctf",
        description: "Our semesterly Capture The Flag competition. Form teams of 4 and compete across Web, Crypto, and Pwn categories for prizes!",
        isUpcoming: true,
        registrationLink: "https://example.com/register/e3",
        tags: ["CTF", "Competition", "All Levels"],
    },

    // Past Events
    {
        id: "pe1",
        title: "Intro to Social Engineering",
        date: "2024-02-15",
        time: "17:00 - 18:30 EST",
        location: "CS Building, Room 101",
        type: "guest-speaker",
        description: "Guest lecture by industry expert Jane Doe on the psychology of social engineering and real-world phishing campaigns.",
        isUpcoming: false,
        tags: ["Social Engineering", "Guest Lecture"],
    },
    {
        id: "pe2",
        title: "Linux Privilege Escalation",
        date: "2024-01-20",
        time: "16:00 - 19:00 EST",
        location: "Virtual (Discord)",
        type: "workshop",
        description: "Deep dive into techniques for escalating privileges on Linux systems, covering misconfigurations, SUID binaries, and kernel exploits.",
        isUpcoming: false,
        tags: ["Linux", "PrivEsc", "Advanced"],
    },
    {
        id: "pe3",
        title: "Fall CTF Kickoff",
        date: "2023-09-10",
        time: "12:00 - 16:00 EST",
        location: "Student Union, Main Hall",
        type: "social",
        description: "Welcoming new members, going over club objectives, and running a mini-CTF to get everyone started.",
        isUpcoming: false,
        tags: ["Social", "Intro", "Mini-CTF"],
    },
];
