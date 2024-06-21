import React from "react";

interface LogoFrameProps {
  logoPath: string;
  x?: number;
  y?: number;
}

export const LogoFrame: React.FC<LogoFrameProps> = ({ logoPath, x, y }) => {
  return (
    <svg x={x} y={y} height="194px" width="194px">
      <polygon
        points="0,25 0,190 190,190 190,0 25,0"
        fill="black"
        stroke="#ff00ee"
        strokeWidth={4}
        className="translate-x-[2px] translate-y-[2px]"
      />
      <image href={logoPath} width={150} height={150} x={22} y={22} />
    </svg>
  );
};
