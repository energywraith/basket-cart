import { classNames } from "@/utils/classnames";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { ReactNode } from "react";

interface LinkProps extends NextLinkProps {
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  fitWidth?: boolean;
}

const variants = {
  text: "text-blue-600",
  solid: "text-white p-2 px-4 rounded-sm text-center bg-blue-600",
};

const disabledVariants = {
  text: "text-neutral-300",
  solid: "bg-neutral-300 pointer-events-none",
};

const Link = ({
  children,
  disabled,
  className,
  variant = "solid",
  fitWidth,
  ...props
}: LinkProps) => {
  return (
    <NextLink
      {...props}
      className={classNames(
        variants[variant],
        disabled && disabledVariants[variant],
        fitWidth ? "w-fit" : "w-full",
        className
      )}
    >
      {children}
    </NextLink>
  );
};

export { Link };
