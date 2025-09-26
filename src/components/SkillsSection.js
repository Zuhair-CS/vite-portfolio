"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SkillBar from "./SkillBar";
import { motion } from "framer-motion";
import { GlowCard } from "./ui/spotlight-cards";
const AnimatedContainer = ({ delay = 0, className = "", children, }) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: delay / 1000, duration: 0.6 }, viewport: { once: true }, className: className, children: children }));
const SkillTag = ({ skill, delay = 0 }) => (_jsx(AnimatedContainer, { delay: delay, children: _jsx("div", { className: "group rounded-xl cursor-pointer p-4", children: _jsx("span", { className: "text-gray-300 font-medium text-md transition-colors", children: skill }) }) }));
const SkillsSection = () => {
    const skills = [
        { name: "JavaScript/TypeScript", percentage: 90 },
        { name: "React/Next.js", percentage: 85 },
        { name: "Node.js/Express.js", percentage: 80 },
        { name: "MongoDB/Database", percentage: 75 },
        { name: "Tailwind CSS", percentage: 90 },
        { name: "Git/GitHub", percentage: 85 },
    ];
    const additionalSkills = [
        "NextAuth.js",
        "Supabase Auth",
        "RESTful APIs",
        "EJS",
        "Bootstrap",
        "Mongoose ODM",
        "Ai integration",
        "Responsive Design",
    ];
    return (_jsx("section", { id: "skills", className: "py-20", children: _jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [_jsx(AnimatedContainer, { children: _jsxs("div", { className: "flex items-center mb-20", children: [_jsx("h2", { className: "text-5xl font-bold text-white mr-4", children: "Skills & Achievements." }), _jsx("div", { className: "flex-1 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500" })] }) }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-16", children: [_jsxs("div", { children: [_jsx(AnimatedContainer, { children: _jsx("h3", { className: "text-2xl font-bold mb-10 text-gray-200", children: "Core Technologies" }) }), skills.map((skill, index) => (_jsx(SkillBar, { skill: skill.name, percentage: skill.percentage, delay: index * 150 }, skill.name)))] }), _jsxs("div", { children: [_jsx(AnimatedContainer, { children: _jsx("h3", { className: "text-2xl font-bold mb-10 text-gray-200", children: "Additional Skills" }) }), _jsx("div", { className: "grid grid-cols-2 gap-4 mt-18", children: additionalSkills.map((skill, index) => (_jsx(GlowCard, { glowColor: "purple", children: _jsx(SkillTag, { skill: skill, delay: index * 50 }, skill) }, skill))) })] })] })] }) }));
};
export default SkillsSection;
