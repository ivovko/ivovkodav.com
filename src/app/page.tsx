"use client";

import React from "react";
import { PhotoFrame } from "@/components/PhotoFrame";
import { TextArea } from "@/components/TextArea";
import { TimeRoad } from "@/app/TimeRoad";
import { CommentList } from "@/app/Comments";
import { FeedbackForm } from "@/app/FeedbackForm";

export default function MainPage() {
  const test = `Hello there!
  
I'm Ihor Vovkodav, a computer science student at the Technical University of Munich. My journey in the tech world has been an exciting one, marked by hands-on experience in leading companies like Bertrandt and Tesla. These opportunities have allowed me to work on a diverse range of projects, deepening my skills and fueling my passion for innovation.
  
This website is more than just a portfolio—it's a catalog of my personal projects and a platform for sharing my work with the world. I also see it as an open space for feedback, where I welcome any thoughts or insights you might have about my work. Your input is valuable to me, and I'm always eager to learn and grow through constructive dialogue.

Feel free to connect with me! I'm always open to new opportunities, collaborations, or just a good conversation about tech.`;
  return (
    <main className="flex flex-col margin-auto space-y-[10%] wscreen">
      <div className="about-me flex text-center items-center justify-center h-screen">
        <h5 className="main_name">Ihor Vovkodav</h5>
      </div>

      <div className={`about-me-content flex justify-evenly w-full h-about-me`}>
        <PhotoFrame photoPath="personalPhoto.jpg" />
        <TextArea content={test} />
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
