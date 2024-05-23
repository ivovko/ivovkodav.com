import React from "react";

interface LogoFrameProps {
  logoPath: string;
  className?: string;
}

export const LogoFrame: React.FC<LogoFrameProps> = ({
  logoPath,
  className,
}) => {
  console.log("flex" + " " + className);
  return (
    <svg width="190" height="190" className={"flex" + " " + className}>
      <polygon
        points="0,25 0,190 190,190 190,0 25,0"
        fill="black"
        stroke="#ff00ee"
        strokeWidth={5}
      />
      <image href={logoPath} width={150} height={150} x={20} y={20} />
    </svg>
  );
};
