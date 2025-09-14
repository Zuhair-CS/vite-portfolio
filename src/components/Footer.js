"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
const AnimatedContainer = ({ children }) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: children }));
const Footer = () => {
    return (_jsx("footer", { className: " text-white py-12", children: _jsx("div", { className: "max-w-6xl mx-auto px-6 text-center", children: _jsxs(AnimatedContainer, { children: [_jsx("p", { className: "text-gray-400 mb-4", children: "\u00A9 2025 Zuhair Ahmad. Built with React, TypeScript, and lots of \u2615" }), _jsx("div", { className: "w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" })] }) }) }));
};
export default Footer;
