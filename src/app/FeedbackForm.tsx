"use client";

import { Button } from "@/components/Button";
import { InputField } from "@/components/InputFIeld";
import { submitComment } from "./server-actions/submitComment";
import { useForm } from "react-hook-form";
import { ZodError } from "zod";

interface FeedbackFormProps {
  className: string;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({ className }) => {
  const form = useForm<CreateFeedback>();
  const { register, handleSubmit } = form;

  return (
    <form
      className={"block " + className}
      onSubmit={handleSubmit((data: CreateFeedback) => {
        try {
          submitComment({
            content: data.content,
            name: data.name,
            company: data.company,
            position: data.position,
          });
          form.reset();
        } catch (err) {
          console.log((err as ZodError).message);
        }
      })}
    >
      <div className="flex space-x-[44px]">
        <InputField
          placeHolder="Name... (Optional)"
          name="name"
          register={register}
        />
        <InputField
          placeHolder="Position... (Optional)"
          name="position"
          register={register}
        />
        <InputField
          placeHolder="Company... (Optional)"
          name="company"
          register={register}
        />
      </div>
      <textarea
        className="flex inputText bg-black outline outline-[#00FFFF] h-[160px] resize-none"
        id="textAreaScrollBar"
        placeholder={"Your text..."}
        {...form.register("content")}
        required
      />
      <Button content="Submit" className="button m-auto" type="submit" />
    </form>
  );
};
