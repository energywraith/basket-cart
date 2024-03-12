"use client";

import { Button } from "@/components/common/Button";
import { Form } from "@/components/common/Form";
import { paymentMethods } from "@/consts";
import { useAppMachine } from "@/context/AppMachineContext";
import { PaymentMethod } from "@/context/AppMachineContext/types";
import { FieldValues } from "react-hook-form";
import { ObjectSchema, object, string } from "yup";

interface PaymentFormProps {
  onCancel?: () => void;
  onSubmit: (address: PaymentMethod) => void;
}

const schema: ObjectSchema<FieldValues> = object({
  paymentMethod: string()
    .oneOf(paymentMethods.map((method) => method.value))
    .defined()
    .required(),
});

const PaymentForm = ({ onCancel, onSubmit }: PaymentFormProps) => {
  const { state } = useAppMachine();

  const getFields = () => [
    {
      name: "paymentMethod",
      type: "select",
      options: paymentMethods,
      defaultValue: state.context.paymentMethod || paymentMethods[0].value,
    },
  ];

  const handleSubmit = ({
    paymentMethod,
  }: {
    paymentMethod: PaymentMethod;
  }) => {
    onSubmit(paymentMethod);
  };

  return (
    <Form
      fields={getFields()}
      schema={schema}
      onSubmit={handleSubmit}
      submitText="Save Payment Method"
      actions={
        onCancel && (
          <Button
            type="button"
            onClick={onCancel}
            variant="text"
            className="mt-4"
          >
            Cancel
          </Button>
        )
      }
    />
  );
};

export { PaymentForm };
