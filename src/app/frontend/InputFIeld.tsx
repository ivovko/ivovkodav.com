import React from "react";

interface InputFieldProps {
  placeHolder: string;
  name: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  placeHolder,
  name,
}) => {
  return (
    <input
      className="flex inputText bg-black outline outline-[#00FFFF] w-[430px] h-[50px] items-center"
      type="text"
      name={name}
      placeholder={placeHolder}
    />
  );
};
