import { Field, FieldProps } from "@/components/form";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "../Button";

interface FormProps {
  fields: FieldProps[];
  submitText: string;
  onSubmit: (data: any) => void;
}

const Form = ({ fields, submitText, onSubmit }: FormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: "onChange",
    // resolver: schema && yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <Field
          key={field.name}
          {...field}
          control={control}
          error={errors[field.name]}
        />
      ))}
      <Button>{submitText}</Button>
    </form>
  );
};

export { Form };
