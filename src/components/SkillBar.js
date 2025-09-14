"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
const SkillBar = ({ skill, percentage, delay = 0 }) => {
    return (_jsxs(motion.div, { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, transition: { delay: delay / 1000, duration: 0.6 }, viewport: { once: true }, className: "mb-6", children: [_jsx("div", { className: "flex justify-between mb-1", children: _jsx("span", { className: "text-gray-200 font-medium", children: skill }) }), _jsx("div", { className: "w-full bg-gray-800 rounded-full h-2 overflow-hidden", children: _jsx("div", { className: "bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full", style: { width: `${percentage}%` } }) })] }));
};
export default SkillBar;
