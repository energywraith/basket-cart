"use client";

// State = cart
import { v4 as uuidv4 } from "uuid";

import { Card } from "@/components/common/Card";
import { CartItem } from "@/components/templates/CartItem";

import { useAppMachine } from "@/context/AppMachineContext";
import { CartForm } from "@/components/templates/CartForm";
import { Link } from "@/components/common/Link";
import { Product } from "@/context/AppMachineContext/types";
import { formatPrice } from "@/utils/formatters";

export default function Home() {
  const { actor, state } = useAppMachine();

  const onAdd = (product: Product) => {
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
      <h1 className="self-start text-2xl font-medium">Your basket</h1>
      <section className="flex w-full gap-4">
        <section className="flex-grow flex flex-col gap-4">
          {state.context.products.length > 0 && (
            <ul className="flex flex-col gap-4">
              {state.context.products.map((product, index) => (
                <CartItem key={index} {...product} onDelete={onDelete} />
              ))}
            </ul>
          )}
          <Card className="flex flex-col gap-y-4">
            <Card.Header as="h3">Add Product</Card.Header>
            <CartForm onSubmit={onAdd} />
          </Card>
        </section>
        <Card
          as="aside"
          className="h-fit flex flex-col justify-center w-full max-w-sm gap-y-4 relative"
        >
          <Card.Header as="h3">Summary</Card.Header>
          <h4 className="flex items-end justify-between text-sm">
            Total price
            <span className="text-2xl font-medium">
              {formatPrice(
                state.context.products.reduce(
                  (acc, product) => acc + product.price,
                  0
                )
              )}
            </span>
          </h4>
          <Link
            href="/address"
            className="mt-2"
            disabled={state.context.products.length === 0}
          >
            Proceed to checkout
          </Link>
        </Card>
      </section>
    </>
  );
}
