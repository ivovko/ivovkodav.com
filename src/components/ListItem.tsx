import React from "react";

interface ListItemProps {
  feedback: Feedback;
  chosen?: boolean;
  onClick: () => void;
}

export const ListItem: React.FC<ListItemProps> = ({
  feedback,
  chosen,
  onClick,
}) => {
  const color = chosen ? "#00FFFF" : "#FF00EE";
  return (
    <button onClick={onClick}>
      <svg width="302" height="57">
        <polygon
          points="0,0 35,0 40,5 300,5 300,35 280,55 40,55 35,50 0,50 0,45 2,43 2,22 0,20"
          className={`stroke-1 stroke-[${color}] translate-x-[1px] translate-y-[1px]`}
        />
        <line
          x1={10}
          x2={10}
          y1={0}
          y2={50}
          className={`translate-x-[1px] translate-y-[1px] stroke-1 stroke-[${color}]`}
        />
        <text
          x="20"
          y="25"
          fontSize={16}
          fill={color}
          fontFamily="chakra_petchitalic"
        >
          {feedback.name}
        </text>
        <text
          x="280px"
          y="45px"
          fontSize={16}
          fill={color}
          textAnchor="end"
          fontFamily="chakra_petchsemibold"
        >
          {feedback.position && feedback.company
            ? feedback.position + " at " + feedback.company
            : feedback.company
            ? `from ${feedback.company}`
            : feedback.position
            ? `${feedback.position}`
            : ""}
        </text>
      </svg>
    </button>
  );
};
