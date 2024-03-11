import { classNames } from "@/utils/classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        "w-full bg-blue-600 text-white p-2 rounded-sm text-center",
        "disabled:bg-neutral-300",
        className
      )}
    >
      {children}
    </button>
  );
};

export { Button };
