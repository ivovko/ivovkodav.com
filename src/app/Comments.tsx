"use client";

import React, { useState } from "react";
import { ListItem } from "@/components/ListItem";
import { Comment } from "@/components/Comment";
import { useFeedbackList } from "./queries";

export const Comments: React.FC = () => {
  const feedbackList = useFeedbackList();
  const [chosenFeedback, chooseFeedback] = useState<Feedback>();

  return (
    <div className="flex outline-4 outline outline-[#FF00EE] w-[1400px] h-[250px] m-auto">
      <div
        className="mt-[5px] ml-[10px] space-y-0.5 h-[235px] w-[325px] overflow-y-scroll"
        id="customScrollBar"
      >
        {feedbackList.map((feedback) =>
          chosenFeedback === feedback ? (
            <ListItem
              key={feedback.id}
              feedback={feedback}
              onClick={() => {}}
              chosen
            />
          ) : (
            <ListItem
              key={feedback.id}
              feedback={feedback}
              onClick={() => {
                chooseFeedback(feedback);
              }}
            />
          )
        )}
      </div>
      {chosenFeedback && (
        <Comment content={chosenFeedback.content} className="m-auto mt-1" />
      )}
    </div>
  );
};
