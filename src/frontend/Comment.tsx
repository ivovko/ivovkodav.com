import React from "react";

interface CommentProps {
  content: string;
  className?: string;
}

export const Comment: React.FC<CommentProps> = ({ content, className }) => {
  return (
    <svg width="1042" height="237" className={className}>
      <polygon
        points="0,0 10,5 40,5 1040,5 1040,215 1020,235 0,235"
        className="stroke-1 stroke-[#00FFFF] translate-x-[1px] translate-y-[1px]"
      />
      <text
        x="50%"
        y="60%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={40}
        fill="#00FFFF"
      >
        {content}
      </text>
    </svg>
  );
};
