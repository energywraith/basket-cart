import { classNames } from "@/utils/classnames";
import { HTMLProps, forwardRef } from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {
  isInvalid?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, isInvalid, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        type={type}
        className={classNames(
          "bg-slate-100 text-base min-h-12 p-4 py-3 rounded-sm outline-none w-full",
          isInvalid
            ? "ring-1 ring-red-600"
            : "focus:ring-1 focus:ring-blue-600",
          props.className
        )}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
