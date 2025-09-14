"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
const experiences = [
    {
        role: "Frontend Developer Intern",
        company: "MOON HERBAL LABORATORIES PVT. LTD.",
        period: "June 2025 - July 2025",
        description: "Digitized and structured archival data from 2024—2025, transforming manual records into a comprehensive, searchable digital database, significantly improving accessibility and operational efficiency. Led a complete revamp of the company's e-commerce interface, redesigning the front-end experience using Shopify to enhance user engagement, aesthetic appeal, and navigation fluidity.",
    },
    {
        role: "Open Source Contributor",
        company: "Various GitHub Projects",
        period: "June 2025 - Present",
        description: "Contributed bug fixes, documentation, and new features to open-source repositories in the Next.js ecosystem.",
    },
];
export default function ExperienceSection() {
    return (_jsxs(_Fragment, { children: [_jsx("style", { children: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .experience-card {
          animation-fill-mode: forwards;
        }
      ` }), _jsxs("section", { id: "experience", className: "py-20 max-w-5xl mx-auto px-6", children: [_jsxs("div", { className: "flex items-center mb-20", children: [_jsx("div", { className: "flex-1 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500" }), _jsx("h2", { className: "text-5xl font-bold text-white ml-4", children: "Experience." })] }), _jsx("div", { className: "space-y-12 pb-18", children: experiences.map((exp, idx) => (_jsxs(motion.div, { className: "max-w-5xl rounded-xl opacity-100", children: [_jsx("h3", { className: "text-xl font-semibold text-white", children: exp.company }), _jsx("p", { className: "text-blue-400 mt-4 text-xl font-bold", children: exp.role }), _jsx("p", { className: "text-sm text-gray-400", children: exp.period }), _jsx("p", { className: "mt-2 text-gray-100", children: exp.description }), _jsx("div", { className: "flex-1 mt-4 h-[1px] bg-gradient-to-r max-w-5xl from-blue-500 to-purple-500" })] }, idx))) })] })] }));
}
