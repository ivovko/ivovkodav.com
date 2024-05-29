"use client";

import { Button } from "./Button";
import { InputField } from "./InputFIeld";

interface FeedbackFormProps {
  className: string;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({ className }) => {
  return (
    <form className={"block " + className} onSubmit={() => {}}>
      <div className="flex space-x-[44px]">
        <InputField placeHolder="Name..." name="name" />
        <InputField placeHolder="Position..." name="position" />
        <InputField placeHolder="Company..." name="company" />
      </div>
      <textarea
        className="flex inputText bg-black outline outline-[#00FFFF] h-[160px] resize-none"
        id="textAreaScrollBar"
        name={"content"}
        placeholder={"Your text..."}
      />
      <Button content="Submit" className="button m-auto" />
    </form>
  );
};
