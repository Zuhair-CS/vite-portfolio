import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
const GlowButton = ({ children, className = "", onClick, width, height, }) => {
    const buttonRef = useRef(null);
    const innerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        // Check if device is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    useEffect(() => {
        // Skip animation on mobile
        if (isMobile)
            return;
        let progress = 0;
        let animationFrame;
        const animate = () => {
            if (!buttonRef.current)
                return;
            const rect = buttonRef.current.getBoundingClientRect();
            const w = rect.width;
            const h = rect.height;
            const perimeter = 2 * (w + h);
            const speed = 3; // px per frame
            progress = (progress + speed) % perimeter;
            let x = 0, y = 0;
            if (progress < w) {
                x = rect.left + progress;
                y = rect.top;
            }
            else if (progress < w + h) {
                x = rect.right;
                y = rect.top + (progress - w);
            }
            else if (progress < 2 * w + h) {
                x = rect.right - (progress - (w + h));
                y = rect.bottom;
            }
            else {
                x = rect.left;
                y = rect.bottom - (progress - (2 * w + h));
            }
            // Update CSS variables
            buttonRef.current.style.setProperty("--x", x.toFixed(2));
            buttonRef.current.style.setProperty("--y", y.toFixed(2));
            animationFrame = requestAnimationFrame(animate);
        };
        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isMobile]);
    const { base, spread } = { base: 240, spread: 120 };
    const getInlineStyles = () => {
        const baseStyles = {
            "--base": base,
            "--spread": spread,
            "--radius": "10",
            "--border": "3",
            "--backdrop": "hsl(210 100% 60% / 0.12)",
            "--backup-border": "var(--backdrop)",
            "--size": "200",
            "--outer": "1",
            "--border-size": "calc(var(--border, 2) * 1px)",
            "--spotlight-size": "calc(var(--size, 150) * 0.3px)",
            "--hue": base,
            backgroundColor: "var(--backdrop, transparent)",
            border: "var(--border-size) solid var(--backup-border)",
            position: "relative",
            touchAction: "none",
        };
        if (width !== undefined) {
            baseStyles.width = typeof width === "number" ? `${width}px` : width;
        }
        if (height !== undefined) {
            baseStyles.height = typeof height === "number" ? `${height}px` : height;
        }
        return baseStyles;
    };
    const beforeAfterStyles = `
  /* Desktop styles - keep original effects */
  @media (min-width: 769px) {
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
    
    [data-glow]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) 100% 50% / 1),
        transparent 100%
      );
      filter: brightness(1.5);
    }
    
    [data-glow]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.35) calc(var(--spotlight-size) * 0.35) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(220 100% 100% / 1),
        transparent 100%
      );
    }
  }

  /* Mobile styles - remove all effects */
  @media (max-width: 768px) {
    [data-glow]::before,
    [data-glow]::after {
      display: none;
    }
    
    [data-glow] [data-glow] {
      display: none;
    }
  }
`;
    return (_jsxs(_Fragment, { children: [_jsx("style", { dangerouslySetInnerHTML: { __html: beforeAfterStyles } }), _jsxs("button", { ref: buttonRef, "data-glow": true, style: getInlineStyles(), onClick: onClick, className: `rounded-lg relative shadow-[0_1rem_2rem_-1rem_black] backdrop-blur-[5px] px-6 py-3 text-lg font-medium text-white cursor-pointer ${className}`, children: [_jsx("div", { ref: innerRef, "data-glow": true }), children] })] }));
};
export { GlowButton };
