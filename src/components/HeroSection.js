"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";
import { GlowButton } from "./ui/glow-button";
export default function HeroSection() {
    return (_jsx("section", { className: "min-h-screen flex items-center justify-center", children: _jsxs("div", { className: "text-center px-6", children: [_jsx(motion.h1, { className: "text-7xl md:text-8xl font-[900] text-white tracking-wider pt-32", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7 }, children: "ZUHAIR AHMAD" }), _jsx(motion.div, { className: "mt-6 text-lg md:text-4xl text-gray-300 max-w-xl mx-auto flex justify-center items-center", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3, duration: 0.7 }, children: _jsx(FlipWords, { words: ["Web Developer", "Devops Enthusiast", "Tech Lover", "Software Devloper"] }) }), _jsx(motion.p, { className: "mt-6 text-lg md:text-xl text-gray-300 max-w-xl mx-auto", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3, duration: 0.7 }, children: "I build modern, performant web applications with Next.js, TypeScript, and other cutting-edge technologies." }), _jsx(motion.a, { href: "#projects", className: "inline-block mt-8 px-8 py-3 text-white cursor-pointer", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.5, duration: 0.7 }, children: _jsx(GlowButton, { children: "View my Work" }) })] }) }));
}
