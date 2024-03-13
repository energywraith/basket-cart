"use client";

import { Form } from "@/components/common/Form";
import { Product } from "@/context/AppMachineContext/types";
import { FieldValues } from "react-hook-form";
import { ObjectSchema, number, object, string } from "yup";

interface CartFormData {
  name: string;
  price: string;
  delivery: keyof typeof delivery;
}

interface CartFormProps {
  onSubmit: (product: Omit<Product, "id">) => void;
}

const delivery = {
  YES: true,
  NO: false,
};

const fields = [
  {
    label: "Name",
    name: "name",
    type: "text",
  },
  {
    label: "Price",
    name: "price",
    type: "number",
  },
  {
    label: "Require Delivery",
    name: "delivery",
    type: "radio",
    defaultValue: "true",
    options: [
      {
        label: "Yes",
        value: "YES",
      },
      {
        label: "No",
        value: "NO",
      },
    ],
  },
];

const schema: ObjectSchema<FieldValues> = object({
  name: string().defined().max(20).required(),
  price: number().defined().positive().required(),
  delivery: string()
    .defined()
    .oneOf(Object.keys(delivery))
    .required("select one of above options"),
});

const CartForm = ({ onSubmit }: CartFormProps) => {
  const handleSubmit = (data: CartFormData) => {
    onSubmit({
      ...data,
      price: +data.price,
      delivery: delivery[data.delivery as keyof typeof delivery],
    });
  };

  return (
    <Form
      fields={fields}
      schema={schema}
      onSubmit={handleSubmit}
      submitText="Add"
    />
  );
};

export { CartForm };
