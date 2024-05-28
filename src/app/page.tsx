import React from "react";
import { NavigationButtons } from "@/frontend/NavigationButtons";
import { PhotoFrame } from "@/frontend/PhotoFrame";
import { TextArea } from "@/frontend/TextArea";
import { TimeRoad } from "@/frontend/TimeRoad";
import { Comments } from "@/frontend/Comments";

export default function MainPage() {
  return (
    <main className="main flex flex-col w-full overflow-hidden">
      <NavigationButtons />
      <div className="min-h-[911px] m-auto">
        <h5 className="main_name">Ihor Vovkodav</h5>
      </div>
      <div
        className="flex min-h-[911px] space-x-[110px] m-auto"
        data-bgcolor="#000000"
      >
        <PhotoFrame photoPath="personalPhoto.png" />
        <TextArea content="TEST" />
      </div>
      <div className="min-h-[911px]">
        <TimeRoad />
      </div>
      <div className="flex flex-col min-h-[911px]">
        <h3 className="feedbackSection m-auto">WHAT PEOPLE SAY ABOUT ME</h3>
        <Comments />
        <h3 className="feedbackSection m-auto">SHARE YOUR THOUGHTS!</h3>
        <div className="h-[360px]"></div>
      </div>
    </main>
  );
}
