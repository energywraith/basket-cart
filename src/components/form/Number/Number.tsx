import { forwardRef } from "react";
import { Input, InputProps } from "../Input";

const Number = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => (
  <Input {...props} ref={ref} step="0.01" />
));

Number.displayName = "Number";

export { Number };
