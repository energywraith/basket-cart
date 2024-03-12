"use client";

import { Button } from "@/components/common/Button";
import { Form } from "@/components/common/Form";
import {
  internationalShippingMethods,
  polishShippingMethods,
  shippingMethods,
  usaShippingMethods,
} from "@/consts";
import { useAppMachine } from "@/context/AppMachineContext";
import { ShippingMethod } from "@/context/AppMachineContext/types";
import { FieldValues } from "react-hook-form";
import { ObjectSchema, object, string } from "yup";

interface ShippingFormProps {
  onCancel?: () => void;
  onSubmit: (address: ShippingMethod) => void;
}

const schema: ObjectSchema<FieldValues> = object({
  shippingMethod: string()
    .oneOf(shippingMethods.map((method) => method.value))
    .defined()
    .required(),
});

const ShippingForm = ({ onCancel, onSubmit }: ShippingFormProps) => {
  const { state } = useAppMachine();

  const getCountrySpecificMethods = () => {
    if (state.context.address?.country === "usa") {
      return usaShippingMethods;
    }

    return polishShippingMethods;
  };

  const options = [
    ...getCountrySpecificMethods(),
    ...internationalShippingMethods,
  ];

  const getFields = () => [
    {
      name: "shippingMethod",
      type: "select",
      options,
      defaultValue: state.context.shippingMethod || options[0].value,
    },
  ];

  const handleSubmit = ({
    shippingMethod,
  }: {
    shippingMethod: ShippingMethod;
  }) => {
    onSubmit(shippingMethod);
  };

  return (
    <Form
      fields={getFields()}
      schema={schema}
      onSubmit={handleSubmit}
      submitText="Save Shipping Method"
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

export { ShippingForm };
