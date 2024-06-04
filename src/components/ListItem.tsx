import React from "react";

interface ListItemProps {
  content: string;
}

export const ListItem: React.FC<ListItemProps> = ({ content }) => {
  return (
    <svg width="302" height="57">
      <polygon
        points="0,0 35,0 40,5 300,5 300,35 280,55 40,55 35,50 0,50 0,45 2,43 2,22 0,20"
        className="stroke-1 stroke-[#FF00EE] translate-x-[1px] translate-y-[1px]"
      />
      <line
        x1={10}
        x2={10}
        y1={0}
        y2={50}
        className="translate-x-[1px] translate-y-[1px] stroke-1 stroke-[#FF00EE]"
      />
      <text
        x="50%"
        y="60%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={40}
        fill="#FF00EE"
      >
        {content}
      </text>
    </svg>
  );
};
