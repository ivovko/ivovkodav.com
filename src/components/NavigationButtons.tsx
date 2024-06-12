import React from "react";
import { Link } from "react-scroll";

interface NavigationButtonsProps {
  selected:
    | "about-me"
    | "about-me-content"
    | "experience"
    | "projects"
    | "feedback";
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  selected,
}) => {
  const buttons = [
    {
      polygon: (selected: boolean) => (
        <polygon
          points="0,0 0,48 16,64 180,64 180,48 176,44 176,20 180,16, 180,0"
          fill={selected ? "#00FFFF" : "black"}
          className={`stroke-1 stroke-[${
            selected ? "black" : "#00FFFF"
          }] translate-x-[1px] translate-y-[1px]`}
        />
      ),
      class: ["about-me", "about-me-content"],
      content: "ABOUT ME",
    },
    {
      polygon: (selected: boolean) => (
        <polygon
          points="4,0 4,16 0,20 0,44 4,48 4,64 180,64 180,48 176,44 176,20 180,16, 180,0"
          fill={selected ? "#00FFFF" : "black"}
          className={`stroke-1 stroke-[${
            selected ? "black" : "#00FFFF"
          }] translate-x-[1px] translate-y-[1px]`}
        />
      ),
      class: ["experience"],
      content: "EXPERIENCE",
    },
    {
      polygon: (selected: boolean) => (
        <polygon
          points="4,0 4,16 0,20 0,44 4,48 4,64 176,64 176,48 180,44 180,20 176,16, 176,0"
          fill={selected ? "#00FFFF" : "black"}
          className={`stroke-1 stroke-[${
            selected ? "black" : "#00FFFF"
          }] translate-x-[1px] translate-y-[1px]`}
        />
      ),
      class: ["projects"],
      content: "PROJECTS",
    },
    {
      polygon: (selected: boolean) => (
        <polygon
          points="0,0 0,16 4,20 4,44 0,48 0,64 180,64 180,16, 166,0"
          fill={selected ? "#00FFFF" : "black"}
          className={`stroke-1 stroke-[${
            selected ? "black" : "#00FFFF"
          }] translate-x-[1px] translate-y-[1px]`}
        />
      ),
      class: ["feedback"],
      content: "FEEDBACK",
    },
  ];

  return (
    <nav className="flex fixed mt-9 left-1/2 -translate-x-1/2 z-10 -space-x-0.5">
      {buttons.map((b) => {
        const isSelected = b.class.includes(selected);
        return (
          <Link to={b.class[0]} smooth={true}>
            <button>
              <svg key={b.content} width="186" height="70">
                {b.polygon(isSelected)}

                <text
                  x="50%"
                  y="51%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize={18}
                  fill={isSelected ? "black" : "#00FFFF"}
                  fontFamily="chakra_petchsemibold"
                >
                  {b.content}
                </text>
              </svg>
            </button>
          </Link>
        );
      })}
    </nav>
  );
};
