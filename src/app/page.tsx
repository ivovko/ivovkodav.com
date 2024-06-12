"use client";

import React, { useEffect, useState } from "react";
import { NavigationButtons } from "@/components/NavigationButtons";
import { PhotoFrame } from "@/components/PhotoFrame";
import { TextArea } from "@/components/TextArea";
import { TimeRoad } from "@/app/TimeRoad";
import { Comments } from "@/app/Comments";
import { FeedbackForm } from "@/app/FeedbackForm";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Link } from "react-scroll";

function CollorChangeOnScroll(update: Function) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = [
      {
        sectionClass: "about-me",
        bgcolor: "rgba(0,0,0,0)",
      },
      {
        sectionClass: "about-me-content",
        bgcolor: "rgba(0,0,0,0.8)",
      },
      {
        sectionClass: "experience",
        bgcolor: "rgba(0,0,0,0.8)",
      },
      {
        sectionClass: "feedback",
        bgcolor: "rgba(0,0,0,0.8)",
      },
    ];

    sections.forEach((section, i) => {
      const prevSection = i - 1 >= 0 ? sections[i - 1] : sections[0];

      ScrollTrigger.create({
        trigger: "." + section.sectionClass,
        start: "top center",
        end: "bottom",
        onEnter: () => {
          update(section.sectionClass);
          gsap.to(".main", {
            backgroundColor: section.bgcolor,
            overwrite: "auto",
          });
        },
        onLeaveBack: () => {
          update(prevSection.sectionClass);
          gsap.to(".main", {
            backgroundColor: prevSection.bgcolor,
            overwrite: "auto",
          });
        },
      });
    });
    return () => {};
  }, []);
}

export default function MainPage() {
  const [currentSection, updateSection] = useState<
    "about-me" | "about-me-content" | "experience" | "feedback"
  >("about-me");
  CollorChangeOnScroll(updateSection);
  return (
    <div className="main w-full flex flex-col">
      <NavigationButtons selected={currentSection} />
      <div className="flex flex-col space-y-64">
        <div className="about-me h-[911px] m-auto">
          <h5 className="main_name">Ihor Vovkodav</h5>
        </div>

        <div className="about-me-content flex space-x-[110px] m-auto">
          <PhotoFrame photoPath="personalPhoto.png" />
          <TextArea content="TEST" />
        </div>

        <div className="experience min-h-screen">
          <TimeRoad />
        </div>

        <div className="feedback min-h-screen flex flex-col space-y-[50px] pb-32">
          <h3 className="feedbackSection m-auto">WHAT PEOPLE SAY ABOUT ME</h3>
          <Comments />
          <h3 className="feedbackSection m-auto">SHARE YOUR THOUGHTS!</h3>
          <FeedbackForm className="flex flex-col w-[1380px] m-auto space-y-[50px]" />
        </div>
      </div>
    </div>
  );
}
