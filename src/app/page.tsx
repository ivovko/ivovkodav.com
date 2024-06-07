import React from "react";
import { NavigationButtons } from "@/components/NavigationButtons";
import { PhotoFrame } from "@/components/PhotoFrame";
import { TextArea } from "@/components/TextArea";
import { TimeRoad } from "@/app/TimeRoad";
import { Comments } from "@/app/Comments";
import { FeedbackForm } from "@/app/FeedbackForm";

export default async function MainPage() {
  return (
    <main className="main flex flex-col w-full">
      <NavigationButtons />
      <div className="flex flex-col space-y-64">
        <div className="h-[911px] m-auto">
          <h5 className="main_name">Ihor Vovkodav</h5>
        </div>
        <div className="flex space-x-[110px] m-auto">
          <PhotoFrame photoPath="personalPhoto.png" />
          <TextArea content="TEST" />
        </div>
        <TimeRoad />
        <div className="flex flex-col space-y-[50px] pb-32">
          <h3 className="feedbackSection m-auto">WHAT PEOPLE SAY ABOUT ME</h3>
          <Comments />
          <h3 className="feedbackSection m-auto">SHARE YOUR THOUGHTS!</h3>
          <FeedbackForm className="flex flex-col w-[1380px] m-auto space-y-[50px]" />
        </div>
      </div>
    </main>
  );
}
