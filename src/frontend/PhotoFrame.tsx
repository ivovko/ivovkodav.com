import React from "react";

interface PhotoFrameProps {
  photoPath: string;
}

export const PhotoFrame: React.FC<PhotoFrameProps> = ({ photoPath }) => {
  return (
    <div>
      <svg width="470" height="670" className="flex">
        <polygon
          points="0,23 0,102 6,113 6,323 0,335 0,647 23,670 68,670 74,664 396,664 402,670 447,670 470,647 470,23 447,0 393,0 388,6 293,6 288,0 23,0"
          fill="black"
          stroke="#ff00ee"
          strokeWidth={5}
        />
        <image href={photoPath} width={430} height={630} x={20} y={20} />
      </svg>
    </div>
  );
};