import React from "react";

interface TextAreaProps {
  content: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ content }) => {
  return (
    <svg viewBox="0 0 1100 680" height="100%">
      <polygon
        points="0,30 0,670 1090,670 1090,0 30,0"
        fill="black"
        stroke="#ff00ee"
        strokeWidth={4}
        className="translate-x-1 translate-y-1"
      />
      <foreignObject
        x="65"
        y="65"
        width="960"
        height="540"
        fontSize={23.5}
        color="#ff00ee"
        className="text-left whitespace-pre-wrap"
        fontFamily="bai_jamjureemedium"
      >
        {content}
      </foreignObject>
    </svg>
  );
};
