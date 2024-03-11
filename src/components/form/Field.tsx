import { classNames } from "@/utils/classnames";

import {
  Control,
  FieldError,
  FieldErrorsImpl,
  Merge,
  useController,
} from "react-hook-form";
import { map } from "./map";

export interface FieldProps {
  type?: keyof typeof map | string;
  name: string;
  placeholder?: string;
  label?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  helperText?: string;
  options?: any;
  defaultValue?: any;
  width?: number;
  className?: string;
  control?: Control;
}

const Field = ({
  type = "text",
  name,
  error,
  helperText,
  placeholder,
  label,
  defaultValue: defaultValueFromProps,
  width,
  className,
  control,
  ...inputProps
}: FieldProps) => {
  const { Component, defaultValue } = map[type as keyof typeof map];
  const { field } = useController({
    name,
    control,
    defaultValue: defaultValueFromProps || defaultValue,
  });

  return (
    <div
      className={classNames(
        "flex flex-col gap-y-2.5 items-center w-full justify-self-center",
        className
      )}
      style={{ maxWidth: width }}
    >
      {label && <label className="font-medium self-start">{label}</label>}
      <Component
        type={type}
        placeholder={placeholder}
        isInvalid={!!error?.message}
        {...field}
        {...inputProps}
      />
      <div
        className={classNames("text-sm min-h-5 capitalize-first text-error")}
      >
        {error?.message as string}
      </div>
    </div>
  );
};

export { Field };
