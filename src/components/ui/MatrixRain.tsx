"use client";

import { useEffect, useRef } from "react";

interface MatrixRainProps {
    className?: string;
    color?: string; // Default #00ff9f
}

export default function MatrixRain({ className = "", color = "#00ff9f" }: MatrixRainProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        // Handle resizing
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        // Characters for the matrix rain (Katakana + Latin + Numerals)
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ".split("");

        const fontSize = 14;
        const columns = Math.ceil(canvas.width / fontSize);

        // Array to store the Y coordinate of each column
        const drops: number[] = [];
        for (let x = 0; x < columns; x++) {
            // Initialize drops to start from different random heights
            drops[x] = (Math.random() * -100);
        }

        const draw = () => {
            // Semi-transparent black background to create trail effect
            ctx.fillStyle = "rgba(15, 23, 42, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = color;
            ctx.font = `${fontSize}px monospace`;

            // Optional: Add glow effect for front characters
            ctx.shadowBlur = 5;
            ctx.shadowColor = color;

            for (let i = 0; i < drops.length; i++) {
                // Pick a random character
                const text = chars[Math.floor(Math.random() * chars.length)];

                // Draw the character
                const xPos = i * fontSize;
                const yPos = drops[i] * fontSize;
                ctx.fillText(text, xPos, yPos);

                // Reset drop to top randomly when it hits bottom
                if (yPos > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Move drop down
                drops[i]++;
            }
        };

        // Run animation loop
        const loop = () => {
            draw();
            animationFrameId = window.requestAnimationFrame(loop);
        };

        loop();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [color]);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0 ${className}`}
            aria-hidden="true"
        />
    );
}
