import { jsx as _jsx } from "react/jsx-runtime";
import { FloatingDock } from "../../src/components/ui/floating-dock.js";
import { Phone, Home, Wrench, Star, Code, } from "lucide-react";
export function FloatingDockDemo() {
    const links = [
        {
            title: "Home",
            icon: (_jsx(Home, { className: "h-full w-full text-neutral-500 dark:text-neutral-300 transition-transform" })),
            href: "#",
        },
        {
            title: "Experience",
            icon: (_jsx(Star, { className: "h-full w-full text-neutral-500 dark:text-neutral-300" })),
            href: "#experience",
        },
        {
            title: "Projects",
            icon: (_jsx(Code, { className: "h-full w-full text-neutral-500 dark:text-neutral-300" })),
            href: "#projects",
        },
        {
            title: "Skills",
            icon: (_jsx(Wrench, { className: "h-full w-full text-neutral-500 dark:text-neutral-300" })),
            href: "#skills",
        },
        {
            title: "Contact",
            icon: (_jsx(Phone, { className: "h-full w-full text-neutral-500 dark:text-neutral-300" })),
            href: "#contact",
        },
    ];
    return (_jsx(FloatingDock, { items: links }));
}
