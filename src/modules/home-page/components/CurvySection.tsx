import React, { useEffect, useRef, useState } from 'react';

interface CurvySectionProps {
  children: React.ReactNode;
  fillColor?: string;
  lineColor?: string;
  padding?: number;
}

const CurvySection: React.FC<CurvySectionProps> = ({
  children,
  fillColor = '#F0FDF4',
  lineColor = '#16A34A',
  padding = 50,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(200);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.offsetHeight;
      setSvgHeight(contentHeight + padding * 2);
    }
  }, [children, padding]);

  return (
    <div className="w-full">
      <svg
        width="100%"
        height={svgHeight}
        viewBox={`0 0 1440 ${svgHeight}`}
        preserveAspectRatio="none"
      >
        <path
          d={`M0,50 Q360,0 720,50 T1440,50 L1440,${svgHeight - 50} Q1080,${svgHeight
            } 720,${svgHeight - 50} T0,${svgHeight - 50} Z`}
          fill={fillColor}
          stroke={lineColor}
          strokeWidth="2"
        />
      </svg>
      <div
        ref={contentRef}
        className="relative"
        style={{ marginTop: `-${svgHeight}px`, padding: `${padding}px 16px` }}
      >
        {children}
      </div>
    </div>
  );
};

export default CurvySection;