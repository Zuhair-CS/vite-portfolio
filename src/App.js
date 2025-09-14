import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Plasma from "./components/ui/Plasma";
import HeroSection from "./components/HeroSection";
import { FloatingDockDemo } from "./components/Navbar";
import AboutSection from "./components/AboutSection";
export default function App() {
    return (_jsxs("main", { children: [_jsx("div", { className: "fixed inset-0 -z-10", children: _jsx(Plasma, { color: "#4361ee", speed: 0.6, direction: "forward", scale: 1.1, opacity: 0.8, mouseInteractive: true }) }), _jsx(FloatingDockDemo, {}), _jsx(HeroSection, {}), _jsx(AboutSection, {}), _jsx(ProjectsSection, {}), _jsx(SkillsSection, {}), _jsx(ExperienceSection, {}), _jsx(ContactSection, {}), _jsx(Footer, {})] }));
}
