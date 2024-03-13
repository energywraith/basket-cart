import { LoaderIcon } from "@/components/icons/LoaderIcon";
import { classNames } from "@/utils/classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { useFormStatus } from "react-dom";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: keyof typeof variants;
  fitWidth?: boolean;
}

const variants = {
  text: "text-blue-600 disabled:text-neutral-300",
  solid:
    "text-center bg-blue-600 text-white p-2 px-4 disabled:bg-neutral-300 rounded-sm",
};

const Button = ({
  children,
  className,
  disabled,
  variant = "solid",
  fitWidth,
  ...props
}: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      disabled={disabled || pending}
      className={classNames(
        "relative",
        variants[variant],
        fitWidth ? "w-fit" : "w-full",
        className
      )}
    >
      {pending && (
        <LoaderIcon className="w-5 h-5 text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      )}
      <span className={classNames(pending && "opacity-0")}>{children}</span>
    </button>
  );
};

export { Button };
