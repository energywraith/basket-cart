import { classNames } from "@/utils/classnames";
import { HTMLAttributes } from "react";
import { CardHeader } from "./CardHeader";

interface CardProps extends Omit<HTMLAttributes<HTMLOrSVGElement>, "size"> {
  as?: keyof JSX.IntrinsicElements;
}

const Card = ({ as: Wrapper = "div", children, ...props }: CardProps) => {
  return (
    <Wrapper
      {...props}
      className={classNames(
        "border border-darkGray rounded-sm bg-white p-6",
        props.className
      )}
    >
      {children}
    </Wrapper>
  );
};

Card.Header = CardHeader;

export { Card };
