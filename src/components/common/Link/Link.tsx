import { classNames } from "@/utils/classnames";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { ReactNode } from "react";

interface LinkProps extends NextLinkProps {
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
}

const variants = {
  text: "text-blue-600",
  solid: "w-full text-white p-2 rounded-sm text-center bg-blue-600",
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
  ...props
}: LinkProps) => {
  return (
    <NextLink
      {...props}
      className={classNames(
        variants[variant],
        disabled && disabledVariants[variant],
        className
      )}
    >
      {children}
    </NextLink>
  );
};

export { Link };
