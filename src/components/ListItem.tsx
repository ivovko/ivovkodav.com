import React from "react";

interface ListItemProps {
  name?: string;
  position?: string;
  company?: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  name,
  position,
  company,
}) => {
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
        x="20"
        y="25"
        fontSize={16}
        fill="#FF00EE"
        fontFamily="chakra_petchitalic"
      >
        {name}
      </text>
      <text
        x="280px"
        y="45px"
        fontSize={16}
        fill="#FF00EE"
        textAnchor="end"
        fontFamily="chakra_petchsemibold"
      >
        {position + " at " + company}
      </text>
    </svg>
  );
};
