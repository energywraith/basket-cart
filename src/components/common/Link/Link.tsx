import { classNames } from "@/utils/classnames";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { ReactNode } from "react";

interface LinkProps extends NextLinkProps {
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}

const Link = ({ children, disabled, className, ...props }: LinkProps) => {
  return (
    <NextLink
      {...props}
      className={classNames(
        "w-full text-white p-2 rounded-sm text-center",
        disabled ? "bg-neutral-300 pointer-events-none" : "bg-blue-600",
        className
      )}
    >
      {children}
    </NextLink>
  );
};

export { Link };
