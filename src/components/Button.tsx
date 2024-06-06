import React from "react";

interface ButtonProps {
  content: string;
  type: "submit" | "reset" | "button" | undefined;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ content, type, className }) => {
  return (
    <button type={type} className="m-auto">
      <svg width="302" height="52" className={className}>
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
