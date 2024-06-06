"use client";

import { Button } from "@/components/Button";
import { InputField } from "@/components/InputFIeld";
import { submitComment } from "./server/submitComment";

interface FeedbackFormProps {
  className: string;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({ className }) => {
  return (
    <form
      className={"block " + className}
      onSubmit={(formEvent) => {
        formEvent.preventDefault();

        const formValues = new FormData(formEvent.currentTarget);
        submitComment({
          content: formValues.get("content")?.toString() ?? "",
          name: formValues.get("name")?.toString(),
          position: formValues.get("position")?.toString(),
          company: formValues.get("company")?.toString(),
        });
      }}
    >
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
      <Button content="Submit" className="button m-auto" type="submit" />
    </form>
  );
};
