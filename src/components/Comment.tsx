import React from "react";

interface CommentProps {
  content: string;
}

export const Comment: React.FC<CommentProps> = ({ content }) => {
  return (
    <svg viewBox="0 0 1042 237" width="100%">
      <polygon
        points="0,0 10,5 40,5 1040,5 1040,215 1020,235 0,235"
        className="stroke-1 stroke-[#00FFFF] translate-x-[1px] translate-y-[1px]"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      />
      <foreignObject
        x="20"
        y="23"
        width="1000"
        height="190"
        fontSize={15}
        color="#00FFFF"
        className="text-justify"
      >
        {content}
      </foreignObject>
    </svg>
  );
};
