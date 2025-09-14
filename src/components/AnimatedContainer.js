"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
const AnimatedContainer = ({ children, delay = 0, className = "" }) => {
    return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: delay / 1000, duration: 0.6 }, viewport: { once: true }, className: className, children: children }));
};
export default AnimatedContainer;
