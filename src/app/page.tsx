"use client";

import React from "react";
import { PhotoFrame } from "@/components/PhotoFrame";
import { TextArea } from "@/components/TextArea";
import { TimeRoad } from "@/app/TimeRoad";
import { CommentList } from "@/app/Comments";
import { FeedbackForm } from "@/app/FeedbackForm";

export default function MainPage() {
  return (
    <main className="flex flex-col margin-auto space-y-[10%] wscreen">
      <div className="about-me flex text-center items-center justify-center h-screen">
        <h5 className="main_name">Ihor Vovkodav</h5>
      </div>

      <div className={`about-me-content flex justify-evenly w-full h-about-me`}>
        <PhotoFrame photoPath="personalPhoto.png" />
        <TextArea content="TEST" />
      </div>

      <div className="experience h-fit">
        <TimeRoad />
      </div>

      <div className="feedback flex flex-col justify-evenly space-y-[2%] pb-[1%] px-[10%] w-full h-screen">
        <h3 className="feedbackSection text-center">
          WHAT PEOPLE SAY ABOUT ME
        </h3>
        <CommentList className="h-comments w-full" />
        <h3 className="feedbackSection text-center">SHARE YOUR THOUGHTS!</h3>
        <FeedbackForm className="flex flex-col w-full h-full space-y-[4%]" />
      </div>
    </main>
  );
}
