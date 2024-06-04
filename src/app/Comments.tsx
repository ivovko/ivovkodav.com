import React from "react";
import { ListItem } from "@/components/ListItem";
import { Comment } from "@/components/Comment";

export const Comments: React.FC = () => {
  return (
    <div className="flex outline-4 outline outline-[#FF00EE] w-[1400px] h-[250px] m-auto">
      <div
        className="mt-[5px] ml-[10px] space-y-0.5 h-[235px] w-[330px] overflow-y-scroll"
        id="customScrollBar"
      >
        <ListItem content="TEST" />
        <ListItem content="TEST" />
        <ListItem content="TEST" />
        <ListItem content="TEST" />
        <ListItem content="TEST" />
        <ListItem content="TEST" />
      </div>
      <Comment content={"Test"} className="m-auto" />
    </div>
  );
};
