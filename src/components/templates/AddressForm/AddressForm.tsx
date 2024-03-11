"use client";

import { Button } from "@/components/common/Button";
import { Form } from "@/components/common/Form";
import { countries } from "@/consts";
import { useAppMachine } from "@/context/AppMachineContext";
import { Address } from "@/context/AppMachineContext/types";
import { FieldValues } from "react-hook-form";
import { ObjectSchema, object, string } from "yup";

interface AddressFormProps {
  onCancel?: () => void;
  onSubmit: (address: Address) => void;
}

const schema: ObjectSchema<FieldValues> = object({
  country: string()
    .oneOf(countries.map((country) => country.value))
    .defined()
    .required(),
  street: string().defined().max(20).required(),
  city: string().defined().max(20).required(),
});

const AddressForm = ({ onCancel, onSubmit }: AddressFormProps) => {
  const { state } = useAppMachine();

  const getFields = () => [
    {
      label: "Country",
      name: "country",
      type: "select",
      options: countries,
      defaultValue: state.context.address?.country || countries[0].value,
    },
    {
      label: "Street",
      name: "street",
      type: "text",
      defaultValue: state.context.address?.street,
    },
    {
      label: "City",
      name: "city",
      type: "text",
      defaultValue: state.context.address?.city,
    },
  ];

  const handleSubmit = (data: Address) => {
    onSubmit(data);
  };

  return (
    <Form
      fields={getFields()}
      schema={schema}
      onSubmit={handleSubmit}
      submitText="Save Address"
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

export { AddressForm };
