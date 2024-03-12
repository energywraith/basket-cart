import { classNames } from "@/utils/classnames";
import { HTMLProps, forwardRef } from "react";

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends HTMLProps<HTMLSelectElement> {
  options?: SelectOption[];
  isInvalid?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, isInvalid, ...props }, ref) => {
    return (
      <select
        {...props}
        ref={ref}
        className={classNames(
          "bg-slate-100 text-base min-h-12 px-4 py-3 border-r-[16px] border-transparent rounded-sm outline-none w-full",
          isInvalid ? "ring-1 ring-red-600" : "focus:ring-1 focus:ring-blue-600"
        )}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = "Select";

export { Select };
