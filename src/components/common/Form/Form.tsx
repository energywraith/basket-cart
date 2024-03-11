import { Field, FieldProps } from "@/components/form";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnyObject, ObjectSchema } from "yup";

interface FormProps {
  fields: FieldProps[];
  submitText: string;
  onSubmit: (data: any) => void;
  schema: ObjectSchema<AnyObject>;
}

const Form = ({ fields, schema, submitText, onSubmit }: FormProps) => {
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
    <form onSubmit={handleSubmit(onSubmitWithReset)}>
      {fields.map((field) => (
        <Field
          key={field.name}
          {...field}
          control={control}
          error={errors[field.name]}
        />
      ))}
      <Button disabled={!isValid}>{submitText}</Button>
    </form>
  );
};

export { Form };
