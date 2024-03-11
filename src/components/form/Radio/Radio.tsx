import { HTMLProps, forwardRef } from "react";

export interface RadioOption {
  label: string;
  value: string;
}

interface InputProps extends HTMLProps<HTMLInputElement> {
  options?: RadioOption[];
  isInvalid: boolean;
}

const Radio = forwardRef<HTMLInputElement, InputProps>(
  ({ isInvalid, ...props }, ref) => {
    return (
      <div className="flex self-start gap-x-4">
        {props.options?.map((option) => (
          <label key={option.value} className="flex gap-x-2">
            <input
              {...props}
              ref={ref}
              type="radio"
              value={option.value}
              checked={props.value === option.value}
            />
            {option.label}
          </label>
        ))}
      </div>
    );
  }
);

Radio.displayName = "Radio";

export { Radio };
