"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AnimatedContainer from "./AnimatedContainer";
const AchievementCard = ({ achievement, delay = 0 }) => {
    return (_jsx(AnimatedContainer, { delay: delay, children: _jsx("div", { className: "bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:shadow-xl hover:border-blue-500 transition-all duration-300 group cursor-pointer", children: _jsxs("div", { className: "flex items-center mb-2", children: [_jsx("div", { className: "w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform" }), _jsx("span", { className: "text-gray-200 font-semibold group-hover:text-blue-400 transition-colors", children: achievement })] }) }) }));
};
export default AchievementCard;
