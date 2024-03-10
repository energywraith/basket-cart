import { ReactNode } from "react";

interface CardHeaderProps {
  as?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
}

const CardHeader = ({ children, as: Wrapper = "h1" }: CardHeaderProps) => {
  return (
    <Wrapper className="text-lg font-semibold">
      {children}
      <hr className="mt-3" />
    </Wrapper>
  );
};

export { CardHeader };
