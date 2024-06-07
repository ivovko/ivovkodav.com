import React from "react";
import { useFormContext } from "react-hook-form";

interface InputFieldProps {
  placeHolder: string;
  name: string;
  register: any;
}

export const InputField: React.FC<InputFieldProps> = ({
  placeHolder,
  name,
  register,
}) => {
  const test = useFormContext();

  return (
    <input
      className="flex inputText bg-black outline outline-[#00FFFF] w-[430px] h-[50px] items-center"
      type="text"
      placeholder={placeHolder}
      {...register(name)}
    />
  );
};
