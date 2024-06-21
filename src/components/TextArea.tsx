import React from "react";

interface TextAreaProps {
  content: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ content }) => {
  return (
    <svg width={1100} height={680}>
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
        fontSize={27}
        color="#ff00ee"
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
