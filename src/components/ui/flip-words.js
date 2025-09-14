"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../../lib/utils.js";
export const FlipWords = ({ words, duration = 3000, className, }) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isAnimating, setIsAnimating] = useState(false);
    const startAnimation = useCallback(() => {
        const word = words[words.indexOf(currentWord) + 1] || words[0];
        setCurrentWord(word);
        setIsAnimating(true);
    }, [currentWord, words]);
    useEffect(() => {
        if (!isAnimating)
            setTimeout(() => {
                startAnimation();
            }, duration);
    }, [isAnimating, duration, startAnimation]);
    return (_jsx(AnimatePresence, { onExitComplete: () => {
            setIsAnimating(false);
        }, children: _jsx(motion.div, { initial: {
                opacity: 0,
                y: 10,
            }, animate: {
                opacity: 1,
                y: 0,
            }, transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            }, exit: {
                opacity: 0,
                y: -40,
                x: 40,
                filter: "blur(8px)",
                scale: 2,
                position: "absolute",
            }, className: cn("z-10 font-bold inline-block relative text-left text-white dark:text-white px-2", className), children: currentWord.split(" ").map((word, wordIndex) => (_jsxs(motion.span, { initial: { opacity: 0, y: 10, filter: "blur(8px)" }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, transition: {
                    delay: wordIndex * 0.3,
                    duration: 0.3,
                }, className: "inline-block whitespace-nowrap", children: [word.split("").map((letter, letterIndex) => (_jsx(motion.span, { initial: { opacity: 0, y: 10, filter: "blur(8px)" }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, transition: {
                            delay: wordIndex * 0.3 + letterIndex * 0.05,
                            duration: 0.2,
                        }, className: "inline-block", children: letter }, word + letterIndex))), _jsx("span", { className: "inline-block", children: "\u00A0" })] }, word + wordIndex))) }, currentWord) }));
};
