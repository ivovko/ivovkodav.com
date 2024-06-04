import React from "react";

interface LogoFrameProps {
  logoPath: string;
  className?: string;
}

export const LogoFrame: React.FC<LogoFrameProps> = ({
  logoPath,
  className,
}) => {
  return (
    <svg width="194" height="194" className={"flex" + " " + className}>
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
