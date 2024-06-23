"use client";

import React from "react";
import { PhotoFrame } from "@/components/PhotoFrame";
import { TextArea } from "@/components/TextArea";
import { TimeRoad } from "@/app/TimeRoad";
import { CommentList } from "@/app/Comments";
import { FeedbackForm } from "@/app/FeedbackForm";

export default function MainPage() {
  return (
    <main className="main flex justify-evenly">
      <div className="flex flex-col space-y-64 w-[1920px]">
        <div className="about-me flex text-center items-center justify-center h-[911px]">
          <h5 className="main_name">Ihor Vovkodav</h5>
        </div>

        <div
          className={`about-me-content flex justify-evenly w-full h-[680px]`}
        >
          <PhotoFrame photoPath="personalPhoto.png" />
          <TextArea content="TEST" />
        </div>

        <div className="experience h-[911px]">
          <TimeRoad />
        </div>

        <div className="feedback flex flex-col justify-evenly space-y-[2%] pb-[1%] px-[10%] w-full h-[1100px]">
          <h3 className="feedbackSection text-center">
            WHAT PEOPLE SAY ABOUT ME
          </h3>
          <CommentList className="h-[30%] w-full" />
          <h3 className="feedbackSection text-center">SHARE YOUR THOUGHTS!</h3>
          <FeedbackForm className="flex flex-col w-full h-full space-y-[4%]" />
        </div>
      </div>
    </main>
  );
}

/*<div className="about-me h-[911px] m-auto">
          <h5 className="main_name">Ihor Vovkodav</h5>
        </div>

        <div className="about-me-content flex m-auto space-x-24">
          <PhotoFrame photoPath="personalPhoto.png" />
          <TextArea content="TEST" />
        </div>

        <div className="experience m-auto">
          <TimeRoad />
        </div>

        <div className="feedback flex flex-col space-y-[50px] pb-32">
          <h3 className="feedbackSection m-auto">WHAT PEOPLE SAY ABOUT ME</h3>
          <Comments />
          <h3 className="feedbackSection m-auto">SHARE YOUR THOUGHTS!</h3>
          <FeedbackForm className="flex flex-col w-[1380px] m-auto space-y-[50px]" />
        </div>*/
