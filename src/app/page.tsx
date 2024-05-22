import React from "react";
import { NavigationButtons } from "@/frontend/NavigationButtons";
import { PhotoFrame } from "@/frontend/PhotoFrame";
import { TextArea } from "@/frontend/TextArea";

export default function MainPage() {
  return (
    <main className="main flex flex-col w-full">
      <NavigationButtons />
      <div className="min-h-[911px] m-auto">
        <h5 className="main_name">Ihor Vovkodav</h5>
      </div>
      <div
        className="flex min-h-[911px] space-x-[110px] m-auto"
        data-bgcolor="#000000"
      >
        <PhotoFrame photoPath="Elon_Musk_2015.png" />
        <TextArea content="TEST" />
      </div>
    </main>
  );
}
