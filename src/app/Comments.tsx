import React from "react";
import { ListItem } from "@/components/ListItem";
import { Comment } from "@/components/Comment";
import { getComments } from "./server-actions/getComments";

export const Comments: React.FC = async () => {
  const comments = await getComments();
  return (
    <div className="flex outline-4 outline outline-[#FF00EE] w-[1400px] h-[250px] m-auto">
      <div
        className="mt-[5px] ml-[10px] space-y-0.5 h-[235px] w-[325px] overflow-y-scroll"
        id="customScrollBar"
      >
        {(comments as Feedback[]).map((c) => (
          <ListItem
            key={c.name}
            name={c.name}
            company={c.company}
            position={c.position}
          />
        ))}
      </div>
      <Comment content={"Test"} className="m-auto mt-1" />
    </div>
  );
};
