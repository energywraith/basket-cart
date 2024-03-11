import { Field, FieldProps } from "@/components/form";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnyObject, ObjectSchema } from "yup";
import { ReactNode } from "react";

interface FormProps {
  fields: FieldProps[];
  submitText: string;
  onSubmit: (data: any) => void;
  schema: ObjectSchema<AnyObject>;
  actions?: ReactNode;
}

const Form = ({ fields, schema, submitText, actions, onSubmit }: FormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FieldValues>({
    mode: "onChange",
    resolver: schema && yupResolver(schema),
  });

  const onSubmitWithReset = (data: any) => {
    onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitWithReset)}
      className="flex flex-col items-center"
    >
      {fields.map((field) => (
        <Field
          key={field.name}
          {...field}
          control={control}
          error={errors[field.name]}
        />
      ))}
      <Button disabled={!isValid}>{submitText}</Button>
      {actions}
    </form>
  );
};

export { Form };
