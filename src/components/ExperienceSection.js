"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
const experiences = [
{
    role: "Frontend Developer Intern",
    company: "MOON HERBAL LABORATORIES PVT. LTD.",
    period: "June 2025 - July 2025",
    description: {
          introduction: "As a key contributor to this e-commerce startup, I focused on enhancing user experience to drive measurable business growth.",
          bullet_points: [
              "Drove E-commerce Growth: Led a complete revamp of the company's Shopify front-end, resulting in a 99% increase in Net Sales and a 40% increase in overall user sessions (measured MoM, May to August 2025).",
              "Optimized Conversion Funnel: Improved site navigation and aesthetic appeal, directly contributing to an 89% rise in Total Sales and a 28% increase in the total number of orders.",
              "Improved Operations: Digitized and structured archival data from manual records into a comprehensive, searchable digital database, significantly improving internal accessibility and operational efficiency."
    ]
    }
},
    {
        role: "Open Source Contributor",
        company: "Various GitHub Projects",
        period: "June 2025 - Present",
        description: {
          introduction: "Contributed bug fixes, documentation, and new features to open-source repositories in the Next.js ecosystem.",
          bullet_points: []
    }
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
      ` }), _jsxs("section", { id: "experience", className: "py-20 max-w-5xl mx-auto px-6", children: [_jsxs("div", { className: "flex items-center mb-20", children: [_jsx("div", { className: "flex-1 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500" }), _jsx("h2", { className: "text-5xl font-bold text-white ml-4", children: "Experience." })] }), _jsx("div", { className: "space-y-12 pb-18", children: experiences.map((exp, idx) => (_jsxs(motion.div, { 
            className: "max-w-5xl rounded-xl opacity-100 p-6 bg-gray-800/50 shadow-lg border border-gray-700/50", // Added styling for better visual separation
            children: [
                _jsx("h3", { className: "text-2xl font-semibold text-white", children: exp.company }), 
                _jsx("p", { className: "text-blue-400 mt-1 text-xl font-bold", children: exp.role }), 
                _jsx("p", { className: "text-sm text-gray-400 mb-4", children: exp.period }), 
                _jsx("p", { className: "mt-4 text-gray-300", children: exp.description.introduction }), 
                (exp.description.bullet_points && exp.description.bullet_points.length > 0) &&
                _jsx("ul", { 
                    className: "mt-4 space-y-2 list-disc pl-5 text-gray-100", 
                    children: exp.description.bullet_points.map((point, pointIdx) => (
                        _jsx("li", { children: point }, pointIdx)
                    )) 
                }),
                // ---------------------------------------

                _jsx("div", { className: "flex-1 mt-6 h-[1px] bg-gradient-to-r max-w-5xl from-blue-500 to-purple-500" })
            ] 
        }, idx))) })] })] }));
}
