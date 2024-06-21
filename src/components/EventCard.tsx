import React from "react";

interface EventCardProps {
  company: string;
  timePeriod: string;
  content: string;
  height?: number;
  x?: number;
  y?: number;
}

export const EventCard: React.FC<EventCardProps> = ({
  company,
  timePeriod,
  content,
  height = 340,
  x,
  y,
}) => {
  return (
    <svg x={x} y={y} width="510" height={height + 10}>
      <polygon
        points={`0,30 0,${height} 500,${height} 500,0 30,0`}
        fill="black"
        stroke="#ff00ee"
        strokeWidth={4}
        className="translate-x-1 translate-y-1"
      />
      <rect width={40} height={2} fill="#ff00ee" x="25" y="50" />
      <text
        x="375"
        y="50"
        fill="#ff00ee"
        fontSize={10}
        fontFamily="chakra_petchbold"
        letterSpacing={1.5}
      >
        {timePeriod}
      </text>
      <text
        x="25"
        y="90"
        fill="#ff00ee"
        fontSize={18}
        fontFamily="chakra_petchsemibold"
      >
        {company}
      </text>
      <foreignObject
        x="25"
        y="110"
        width="450"
        height={height - 130}
        fontSize={14}
        color="#ff00ee"
        className="text-left whitespace-pre-wrap"
        fontFamily="bai_jamjureemedium"
      >
        {content}
      </foreignObject>
    </svg>
  );
};
