"use client";

import { Form } from "@/components/common/Form";
import { Product } from "@/context/AppMachineContext/types";

interface CartFormProps {
  onSubmit: (product: Product) => void;
}

const delivery = {
  YES: true,
  NO: false,
};

const CartForm = ({ onSubmit }: CartFormProps) => {
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

  const handleSubmit = (data: any) => {
    onSubmit({
      ...data,
      price: +data.price,
      delivery: delivery[data.delivery as keyof typeof delivery],
    });
  };

  return <Form fields={fields} onSubmit={handleSubmit} submitText="Add" />;
};

export { CartForm };
