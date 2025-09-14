"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../lib/utils.js";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, } from "motion/react";
import { useRef, useState } from "react";
export const FloatingDock = ({ items, desktopClassName, mobileClassName, }) => {
    return (_jsxs(_Fragment, { children: [_jsx(FloatingDockDesktop, { items: items, className: desktopClassName }), _jsx(FloatingDockMobile, { items: items, className: mobileClassName })] }));
};
const FloatingDockMobile = ({ items, className, }) => {
    const [open, setOpen] = useState(false);
    return (_jsxs("div", { className: cn("fixed top-4 left-4 z-50 block md:hidden", className), children: [_jsx(AnimatePresence, { children: open && (_jsx(motion.div, { layoutId: "nav", className: "absolute left-0 top-full mt-2 flex flex-col gap-2", children: items.map((item, idx) => (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, 
                        // Closing: reverse order (last leaves first)
                        exit: {
                            opacity: 0,
                            y: 10,
                            transition: { delay: (items.length - 1 - idx) * 0.05 },
                        }, 
                        // Opening: normal order (first enters first)
                        transition: { delay: idx * 0.05 }, children: _jsx("a", { href: item.href, className: "flex h-14 w-14 items-center justify-center rounded-2xl \r\n                           bg-black/20 backdrop-blur-md border border-blue-400/20 \r\n                           shadow-lg hover:bg-black/30 hover:border-blue-400/40 \r\n                           transition-all duration-300 ease-out\r\n                           hover:shadow-xl hover:shadow-blue-500/20", children: _jsx("div", { className: "h-6 w-6 text-blue-100", children: item.icon }) }) }, item.title))) })) }), _jsx("button", { onClick: () => setOpen(!open), className: "flex h-14 w-14 items-center justify-center rounded-2xl \r\n                   bg-black/20 backdrop-blur-md border border-blue-400/20 \r\n                   shadow-lg hover:bg-black/30 hover:border-blue-400/40 \r\n                   transition-all duration-300 ease-out\r\n                   hover:shadow-xl hover:shadow-blue-500/20", children: open ? (_jsx(X, { className: "h-5 w-5 text-blue-100" })) : (_jsx(Menu, { className: "h-5 w-5 text-blue-100" })) })] }));
};
const FloatingDockDesktop = ({ items, className, }) => {
    const mouseY = useMotionValue(Infinity);
    return (_jsx(motion.div, { onMouseMove: (e) => mouseY.set(e.clientY), onMouseLeave: () => mouseY.set(Infinity), className: cn("fixed left-4 top-1/2 -translate-y-1/2 z-50 " + // Left side, vertically centered
            "hidden w-20 flex-col items-start gap-4 rounded-3xl " + // w-20 for vertical layout
            "bg-black/20 backdrop-blur-xl border border-blue-400/20 " +
            "py-6 pl-4 pr-4 shadow-2xl shadow-black/40 md:flex " +
            "before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br " +
            "before:from-blue-400/20 before:to-transparent before:pointer-events-none", className), children: items.map((item) => (_jsx(IconContainer, { mouseY: mouseY, ...item }, item.title))) }));
};
function IconContainer({ mouseY, title, icon, href, }) {
    const ref = useRef(null);
    const distance = useTransform(mouseY, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
        return val - bounds.y - bounds.height / 2;
    });
    const widthTransform = useTransform(distance, [-150, 0, 150], [50, 85, 50]);
    const heightTransform = useTransform(distance, [-150, 0, 150], [50, 85, 50]);
    const widthTransformIcon = useTransform(distance, [-150, 0, 150], [30, 40, 30]);
    const heightTransformIcon = useTransform(distance, [-150, 0, 150], [30, 40, 30]);
    const width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const widthIcon = useSpring(widthTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const heightIcon = useSpring(heightTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const [hovered, setHovered] = useState(false);
    return (_jsx("a", { href: href, children: _jsxs(motion.div, { ref: ref, style: { width, height }, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), className: "relative flex aspect-square items-center justify-center rounded-2xl \r\n                   bg-black/20 backdrop-blur-md border border-blue-400/20 \r\n                   shadow-lg hover:bg-black/30 hover:border-blue-400/40 \r\n                   transition-all duration-300 ease-out\r\n                   hover:shadow-xl hover:shadow-blue-500/20\r\n                   before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br \r\n                   before:from-blue-400/30 before:to-transparent before:pointer-events-none before:opacity-0\r\n                   hover:before:opacity-100 before:transition-opacity before:duration-300", children: [_jsx(AnimatePresence, { children: hovered && (_jsx(motion.div, { initial: { opacity: 0, x: -10, y: "-50%" }, animate: { opacity: 1, x: 0, y: "-50%" }, exit: { opacity: 0, x: -5, y: "-50%" }, className: "absolute left-full top-1/2 ml-3 w-fit rounded-xl border border-blue-400/30 \r\n                         bg-black/30 backdrop-blur-lg px-3 py-2 text-sm whitespace-nowrap \r\n                         text-blue-100 shadow-lg shadow-black/40\r\n                         before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br \r\n                         before:from-blue-400/20 before:to-transparent before:pointer-events-none", children: title })) }), _jsx(motion.div, { style: { width: widthIcon, height: heightIcon }, className: "flex items-center justify-center text-blue-100 z-10 relative", children: icon })] }) }));
}
