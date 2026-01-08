"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundPattern() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineColor, setLineColor] = useState("#ffffff");

  useEffect(() => {
    // Get the line color from CSS variable
    const updateLineColor = () => {
      if (containerRef.current) {
        const computedStyle = getComputedStyle(containerRef.current);
        const color = computedStyle.getPropertyValue('--line-colour').trim();
        const finalColor = color || "#ffffff";
        setLineColor(finalColor);
      }
    };

    updateLineColor();

    // Update on dark mode toggle
    const observer = new MutationObserver(updateLineColor);
    if (document.documentElement) {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      });
    }

    return () => observer.disconnect();
  }, []);

  // Update lines when color changes
  useEffect(() => {
    if (svgRef.current && lineColor) {
      const lines = svgRef.current.querySelectorAll('.line');
      lines.forEach((line) => {
        (line as SVGElement).setAttribute('stroke', lineColor);
      });
    }
  }, [lineColor]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none bg-pattern z-[1]"
      style={{
        opacity: 1,
        width: '100%',
        height: '100%',
      }}
    >
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        fill="none"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        style={{
          opacity: 1,
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      >
        <defs>
          <style>
            {`
              .line {
                stroke: ${lineColor};
                stroke-width: 1.5;
                stroke-opacity: 0.5;
                vector-effect: non-scaling-stroke;
                stroke-linecap: round;
                fill: none;
              }
              .line-strong {
                stroke-opacity: 0.7;
              }
            `}
          </style>
        </defs>

        {/* Vertical grid lines (only two) */}
        <line className="line" x1="120" y1="0" x2="120" y2="900" stroke={lineColor} strokeOpacity="0.5" />
        <line className="line" x1="1320" y1="0" x2="1320" y2="900" stroke={lineColor} strokeOpacity="0.5" />

        {/* Bottom-left quadrant */}
        {/* Centre at (0, 900) */}
        <path className="line line-strong" d="M 280 900 A 280 280 0 0 0 0 620" stroke={lineColor} strokeOpacity="0.7" />
        <path className="line" d="M 200 900 A 200 200 0 0 0 0 700" stroke={lineColor} strokeOpacity="0.5" />
        <path className="line" d="M 120 900 A 120 120 0 0 0 0 780" stroke={lineColor} strokeOpacity="0.5" />

        {/* Radial lines for bottom-left quadrant */}
        <line className="line" x1="0" y1="900" x2="280" y2="900" stroke={lineColor} strokeOpacity="0.5" />
        <line className="line" x1="0" y1="900" x2="0" y2="620" stroke={lineColor} strokeOpacity="0.5" />
        <line className="line" x1="0" y1="900" x2="198" y2="702" stroke={lineColor} strokeOpacity="0.5" />
        <line className="line" x1="0" y1="900" x2="242" y2="758" stroke={lineColor} strokeOpacity="0.5" />
        <line className="line" x1="0" y1="900" x2="141" y2="659" stroke={lineColor} strokeOpacity="0.5" />

        {/* Top-right quadrant */}
        {/* Centre at (1440, 0) */}
        <path className="line line-strong" d="M 1160 0 A 280 280 0 0 1 1440 280" stroke={lineColor} strokeOpacity="0.7" />
        <path className="line" d="M 1240 0 A 200 200 0 0 1 1440 200" stroke={lineColor} strokeOpacity="0.5" />
        <path className="line" d="M 1320 0 A 120 120 0 0 1 1440 120" stroke={lineColor} strokeOpacity="0.5" />

        {/* Radial lines for top-right quadrant */}
        <line className="line" x1="1440" y1="0" x2="1160" y2="0" stroke={lineColor} strokeOpacity="0.5" />
        <line className="line" x1="1440" y1="0" x2="1440" y2="280" stroke={lineColor} strokeOpacity="0.5" />
        <line className="line" x1="1440" y1="0" x2="1242" y2="198" stroke={lineColor} strokeOpacity="0.5" />
        <line className="line" x1="1440" y1="0" x2="1198" y2="142" stroke={lineColor} strokeOpacity="0.5" />
        <line className="line" x1="1440" y1="0" x2="1299" y2="241" stroke={lineColor} strokeOpacity="0.5" />
      </svg>
    </div>
  );
}
