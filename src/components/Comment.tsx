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
      <foreignObject
        x="20"
        y="23"
        width="1000"
        height="190"
        fontSize={15}
        color="#00FFFF"
        className="text-justify"
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet.
      </foreignObject>
    </svg>
  );
};
