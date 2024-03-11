"use client";

import { v4 as uuidv4 } from "uuid";
import { Card } from "@/components/common/Card";
import { CartItem } from "@/components/templates/CartItem";
import { useAppMachine } from "@/context/AppMachineContext";
import { CartForm } from "@/components/templates/CartForm";
import { Product } from "@/context/AppMachineContext/types";
import { CartSummary } from "@/components/templates/CartSummary";

// State = cart

export default function Home() {
  const { actor, state } = useAppMachine();

  const onAdd = (product: Omit<Product, "id">) => {
    actor.send({
      type: "ADD_PRODUCT",
      product: {
        ...product,
        id: uuidv4(),
      },
    });
  };

  const onDelete = (id: string) => {
    actor.send({
      type: "DELETE_PRODUCT",
      productId: id,
    });
  };

  return (
    <>
      <h1 className="self-start text-2xl font-medium">Your Basket</h1>
      <section className="flex flex-col md:flex-row w-full gap-4">
        <section className="flex-grow flex flex-col gap-4">
          {state.context.products.length > 0 && (
            <ul className="flex flex-col gap-4">
              {state.context.products.map((product) => (
                <CartItem key={product.id} {...product} onDelete={onDelete} />
              ))}
            </ul>
          )}
          <Card className="flex flex-col gap-y-4">
            <Card.Header as="h3">Add Product</Card.Header>
            <CartForm onSubmit={onAdd} />
          </Card>
        </section>
        <CartSummary
          proceedTo="address"
          proceedText="Proceed to checkout"
          isProceedDisabled={state.context.products.length === 0}
        />
      </section>
    </>
  );
}
