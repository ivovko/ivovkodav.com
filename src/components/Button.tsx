import React from "react";

interface ButtonProps {
  content: string;
  type: "submit" | "reset" | "button" | undefined;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ content, type, className }) => {
  return (
    <button type={type} className={`bg-center ${className}`}>
      <svg viewBox="0 0 302 52" width="100%" height="100%">
        <polygon
          points="0,50 0,20 20,0 300,0 300,30 280,50"
          className="bg-black stroke-1 stroke-[#FF00EE] translate-x-[1px] translate-y-[1px]"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize={40}
          fontFamily="chakra_petchsemibold"
          fill="#FF00EE"
        >
          {content}
        </text>
      </svg>
    </button>
  );
};
