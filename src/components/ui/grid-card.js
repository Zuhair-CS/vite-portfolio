"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hooks/use-outside-click.js";
import { GlowCard } from "./spotlight-cards.js";
export function ExpandableCardDemo({ projects }) {
    const [active, setActive] = useState(null);
    const id = useId();
    const ref = useRef(null);
    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }
        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);
    useOutsideClick(ref, () => setActive(null));
    return (_jsxs(_Fragment, { children: [_jsx(AnimatePresence, { children: active && typeof active === "object" && (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "fixed inset-0 h-full w-full z-10 backdrop-blur-sm" })) }), _jsx(AnimatePresence, { children: active && typeof active === "object" ? (_jsxs("div", { className: "fixed inset-0 grid place-items-center z-[100]", children: [_jsx(motion.button, { layout: true, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: {
                                opacity: 0,
                                transition: { duration: 0.05 },
                            }, className: "flex bg-black p-1 absolute top-8 right-4 items-center justify-center rounded-full h-8 w-8 shadow-lg z-[110]", onClick: () => setActive(null), children: _jsx(CloseIcon, {}) }, `button-${active.name}-${id}`), _jsxs(motion.div, { layoutId: `card-${active.name}-${id}`, ref: ref, className: "relative w-full max-w-[50rem] h-full md:h-fit md:max-h-[90%] flex flex-col bg-gray-900 dark:bg-gray-900 sm:rounded-3xl overflow-hidden", children: [_jsx(motion.div, { layoutId: `image-${active.name}-${id}`, children: _jsx("img", { src: active.src, alt: active.name, width: 200, height: 200, className: "w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" }) }), _jsxs("div", { children: [_jsxs("div", { className: "flex justify-between items-start p-4", children: [_jsx("div", { className: "flex-1", children: _jsxs("div", { className: "flex flex-col items-start mb-3", children: [_jsx(motion.h3, { layoutId: `title-${active.name}-${id}`, className: "font-bold text-neutral-200 dark:text-neutral-200 text-xl", children: active.name }), _jsx(motion.p, { layoutId: `description-${active.type}-${id}`, className: "text-neutral-400 dark:text-neutral-400 text-base font-medium", children: active.type })] }) }), _jsxs("div", { className: "flex gap-2 ml-4", children: [_jsx(motion.a, { layout: true, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, href: active.live, target: "_blank", children: _jsx(GlowCard, { className: "px-3 py-2", children: "Live Demo" }) }), _jsx(motion.a, { layout: true, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, href: active.code, target: "_blank", children: _jsx(GlowCard, { className: "px-3 py-2", children: "Code" }) })] })] }), _jsx("div", { className: "flex flex-wrap gap-1 mb-4 ml-4", children: active.tech.map((tech, index) => (_jsx("span", { className: "px-3 py-1 text-sm bg-blue-900 dark:bg-blue-900 text-blue-200 dark:text-blue-200 rounded-full", children: tech }, index))) }), _jsx("div", { className: "pt-4 relative px-4", children: _jsx(motion.div, { layout: true, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "text-neutral-400 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]", children: _jsx("p", { children: active.description }) }) })] })] })] })) : null }), _jsx("ul", { className: "max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-8", children: projects.map((project) => (_jsx(GlowCard, { glowColor: "blue", className: "cursor-pointer mx-auto p-4 w-[100%] h-[100%]", children: _jsx(motion.div, { layoutId: `card-${project.name}-${id}`, onClick: () => setActive(project), className: "flex flex-col rounded-xl cursor-pointer transition-colors duration-200 h-full", children: _jsxs("div", { className: "flex flex-col w-full", children: [_jsx(motion.div, { layoutId: `image-${project.name}-${id}`, children: _jsx("img", { width: 100, height: 100, src: project.src, alt: project.name, className: "h-40 w-full rounded-lg object-cover object-top" }) }), _jsxs("div", { className: "flex flex-col h-52 pt-2 justify-start", children: [_jsxs("div", { className: "flex items-baseline gap-2 mb-3", children: [_jsx(motion.h3, { layoutId: `title-${project.name}-${id}`, className: "font-bold text-neutral-200 dark:text-neutral-200 text-xl mt-2 leading-tight", children: project.name }), _jsxs(motion.p, { layoutId: `description-${project.type}-${id}`, className: "text-neutral-400 dark:text-neutral-400 text-md font-medium", children: ["- ", project.type] })] }), _jsxs("div", { className: "flex flex-wrap gap-1 mb-3", children: [project.tech.slice(0, 3).map((tech, index) => (_jsx("span", { className: "px-2 py-1 text-xs bg-blue-900 dark:bg-blue-900 text-blue-200 dark:text-blue-200 rounded-full", children: tech }, index))), project.tech.length > 3 && (_jsxs("span", { className: "px-2 py-1 text-xs bg-gray-800 dark:bg-gray-800 text-gray-400 dark:text-gray-400 rounded-full", children: ["+", project.tech.length - 3] }))] }), _jsx("div", { className: "flex-1 mb-3", children: _jsx("p", { className: "text-gray-300 dark:text-gray-300 text-sm font-semibold leading-relaxed line-clamp-3", children: project.description }) }), _jsx("div", { className: "mt-auto", children: _jsx("span", { className: "text-gray-200 dark:text-gray-200 text-sm font-medium cursor-pointer", children: "Learn More \u2192" }) })] })] }) }, project.name) }, project.name))) })] }));
}
export const CloseIcon = () => {
    return (_jsxs(motion.svg, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: {
            opacity: 0,
            transition: { duration: 0.05 },
        }, xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-[80px] w-[80px] text-white cursor-pointer", children: [_jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), _jsx("path", { d: "M18 6l-12 12" }), _jsx("path", { d: "M6 6l12 12" })] }));
};
