import React from "react";

interface ItemProps {
  content: string;
}

export const Item: React.FC<ItemProps> = ({ content }) => {
  return (
    <svg width="310" height="60">
      <defs>
        <linearGradient id="item-grad">
          <stop offset="0%" stop-color="#FF00EE" />
          <stop offset="15%" stop-color="#BB00AF" />
          <stop offset="40%" stop-color="#6F0067" />
          <stop offset="60%" stop-color="#6F0067" />
          <stop offset="85%" stop-color="#BB00AF" />
          <stop offset="100%" stop-color="#FF00EE" />
        </linearGradient>
      </defs>
      <polygon points="0,50 0,20 20,0 300,0 300,30 280,50" className="item" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={40}
        className="itemText"
      >
        {content}
      </text>
    </svg>
  );
};
