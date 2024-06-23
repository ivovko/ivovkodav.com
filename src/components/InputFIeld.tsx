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
      className="inputText flex bg-black outline outline-[#00FFFF] items-center w-[30%]"
      type="text"
      placeholder={placeHolder}
      {...register(name)}
    />
  );
};
