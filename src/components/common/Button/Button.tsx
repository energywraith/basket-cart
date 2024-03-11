import { classNames } from "@/utils/classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: keyof typeof variants;
}

const variants = {
  text: "text-blue-600 disabled:text-neutral-300",
  solid:
    "w-full text-center bg-blue-600 text-white p-2 disabled:bg-neutral-300 rounded-sm",
};

const Button = ({
  children,
  className,
  variant = "solid",
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={classNames(variants[variant], className)}>
      {children}
    </button>
  );
};

export { Button };
