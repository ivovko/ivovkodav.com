"use client";

import React, { useState } from "react";
import { ListItem } from "@/components/ListItem";
import { useFeedbackList } from "./queries";

interface CommentList {
  className?: string;
}

export const CommentList: React.FC<CommentList> = ({ className }) => {
  const feedbackList = useFeedbackList();
  const [chosenFeedback, chooseFeedback] = useState<Feedback>();

  return (
    <div
      className={`flex outline outline-4 outline-[#FF00EE] space-x-[1%] p-[1%] ${className}`}
    >
      <div
        className="pr-[1%] flex flex-col space-y-[0.5%] overflow-y-auto w-[28%]"
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
        <div className="w-[70%] bg-black outline-4 outline outline-[#00FFFF] overflow-y-scroll">
          <div className="inputText p-[1%] text-[#00FFFF] text-justify">
            {chosenFeedback.content}
          </div>
        </div>
      )}
    </div>
  );
};
