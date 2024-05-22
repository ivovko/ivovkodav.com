import React from "react";

export const NavigationButtons: React.FC = () => {
  const buttons = [
    {
      polygon: (
        <polygon points="0,0 0,48 16,64 180,64 180,48 176,44 176,20 180,16, 180,0" />
      ),
      content: "ABOUT ME",
    },
    {
      polygon: (
        <polygon points="4,0 4,16 0,20 0,44 4,48 4,64 180,64 180,48 176,44 176,20 180,16, 180,0" />
      ),
      content: "EXPERIENCE",
    },
    {
      polygon: (
        <polygon points="4,0 4,16 0,20 0,44 4,48 4,64 176,64 176,48 180,44 180,20 176,16, 176,0" />
      ),
      content: "PROJECTS",
    },
    {
      polygon: (
        <polygon points="0,0 0,16 4,20 4,44 0,48 0,64 180,64 180,16, 166,0" />
      ),
      content: "FEEDBACK",
    },
  ];

  return (
    <nav className="flex fixed mt-9 left-1/2 -translate-x-1/2 z-10">
      {buttons.map((b) => (
        <svg key={b.content} width="180" height="64">
          {b.polygon}
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize={16}
            fill="white"
          >
            {b.content}
          </text>
        </svg>
      ))}
    </nav>
  );
};
