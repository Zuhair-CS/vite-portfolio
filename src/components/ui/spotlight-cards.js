import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
const GlowCard = ({ children, className = '', width, height, }) => {
    const cardRef = useRef(null);
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
        // Skip pointer tracking on mobile
        if (isMobile)
            return;
        const syncPointer = (e) => {
            const { clientX: x, clientY: y } = e;
            if (cardRef.current) {
                cardRef.current.style.setProperty('--x', x.toFixed(2));
                cardRef.current.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
                cardRef.current.style.setProperty('--y', y.toFixed(2));
                cardRef.current.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
            }
        };
        document.addEventListener('pointermove', syncPointer);
        return () => document.removeEventListener('pointermove', syncPointer);
    }, [isMobile]);
    const { base, spread } = { base: 240, spread: 200 };
    const getInlineStyles = () => {
        const baseStyles = {
            "--base": base,
            "--spread": spread,
            "--radius": "14",
            "--border": "3",
            '--backdrop': 'hsl(210 100% 60% / 0.12)',
            "--backup-border": "var(--backdrop)",
            "--size": "200",
            "--outer": "1",
            "--border-size": "calc(var(--border, 2) * 1px)",
            "--spotlight-size": "calc(var(--size, 150) * 1px)",
            "--hue": base,
            backgroundColor: "var(--backdrop, transparent)",
            border: "var(--border-size) solid var(--backup-border)",
            position: "relative",
        };
        // Only add background effects on desktop
        if (!isMobile) {
            baseStyles.backgroundImage = `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(
        var(--hue, 210)
        calc(var(--saturation, 100) * 1%)
        calc(var(--lightness, 70) * 1%) /
        var(--bg-spot-opacity, 0.1)
        ),
        transparent
      )`;
            baseStyles.backgroundSize = "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))";
            baseStyles.backgroundPosition = "50% 50%";
            baseStyles.backgroundAttachment = "fixed";
            baseStyles.touchAction = "none";
        }
        // Add width and height if provided
        if (width !== undefined) {
            baseStyles.width = typeof width === 'number' ? `${width}px` : width;
        }
        if (height !== undefined) {
            baseStyles.height = typeof height === 'number' ? `${height}px` : height;
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
        background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
        background-repeat: no-repeat;
        background-position: 50% 50%;
        mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
        mask-clip: padding-box, border-box;
        mask-composite: intersect;
      }
      
      [data-glow]::before {
        background-image: radial-gradient(
          calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
          calc(var(--x, 0) * 1px)
          calc(var(--y, 0) * 1px),
          hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)), transparent 100%
        );
        filter: brightness(2);
      }
      
      [data-glow]::after {
        background-image: radial-gradient(
          calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
          calc(var(--x, 0) * 1px)
          calc(var(--y, 0) * 1px),
          hsl(220 100% 100% / var(--border-light-opacity, 1)), transparent 100%
        );
      }
      
      [data-glow] [data-glow] {
        position: absolute;
        inset: 0;
        will-change: filter;
        opacity: var(--outer, 1);
        border-radius: calc(var(--radius) * 1px);
        border-width: calc(var(--border-size) * 20);
        filter: blur(calc(var(--border-size) * 10));
        background: none;
        pointer-events: none;
        border: none;
      }
      
      [data-glow] > [data-glow]::before {
        inset: -10px;
        border-width: 10px;
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
    return (_jsxs(_Fragment, { children: [_jsx("style", { dangerouslySetInnerHTML: { __html: beforeAfterStyles } }), _jsxs("div", { ref: cardRef, "data-glow": true, style: getInlineStyles(), className: `
          rounded-2xl 
          relative 
          grid 
          grid-rows-[1fr_auto] 
          shadow-[0_1rem_2rem_-1rem_black] 
          backdrop-blur-[5px]
          ${className}
        `, children: [_jsx("div", { ref: innerRef, "data-glow": true }), children] })] }));
};
export { GlowCard };
