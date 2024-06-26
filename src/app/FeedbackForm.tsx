"use client";

import { Button } from "@/components/Button";
import { InputField } from "@/components/InputFIeld";
import { useForm } from "react-hook-form";
import { ZodError } from "zod";
import { useAddFeedback } from "./queries";

interface FeedbackFormProps {
  className: string;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({ className }) => {
  const addFeedbackMutation = useAddFeedback();
  const form = useForm<CreateFeedback>();
  const { register, handleSubmit } = form;

  return (
    <form
      className={className}
      onSubmit={handleSubmit((data: CreateFeedback) => {
        try {
          addFeedbackMutation.mutate({
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
      <div className="flex justify-between">
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
        className="inputText flex bg-black outline outline-[#00FFFF] resize-none h-[30%]"
        id="textAreaScrollBar"
        placeholder={"Your text..."}
        {...form.register("content")}
        required
      />
      <Button content="Submit" className="button" type="submit" />
    </form>
  );
};
