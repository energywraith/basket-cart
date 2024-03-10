"use client";

// State = cart
import { v4 as uuidv4 } from "uuid";

import { Card } from "@/components/common/Card";
import { CartItem } from "@/components/templates/CartItem";

import { useAppMachine } from "@/context/AppMachineContext";
import Link from "next/link";
import { classNames } from "@/utils/classnames";

export default function Home() {
  const { actor, state } = useAppMachine();

  const onAdd = () => {
    actor.send({
      type: "ADD_PRODUCT",
      product: {
        id: uuidv4(),
        name: `Product ${Math.floor(Math.random() * (50 - 2) + 1)}`,
        price: 7.92,
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
            <h4>Form</h4>
          </Card>
          <button
            onClick={onAdd}
            className="w-full bg-blue-600 text-white p-2 rounded-sm text-center"
          >
            Add product
          </button>
        </section>
        <Card
          as="aside"
          className="h-fit flex flex-col justify-center w-full max-w-sm gap-y-4 relative"
        >
          <Card.Header as="h3">Summary</Card.Header>
          <h4 className="flex items-end justify-between text-sm">
            Total price
            <span className="text-2xl font-medium">
              {`${state.context.products
                .reduce((acc, product) => acc + product.price, 0)
                .toFixed(2)} `}
              zł
            </span>
          </h4>
          <Link
            href="/address"
            className={classNames(
              "w-full text-white p-2 rounded-sm text-center mt-2",
              state.context.products.length === 0
                ? "bg-neutral-300 pointer-events-none"
                : "bg-blue-600"
            )}
          >
            Proceed to checkout
          </Link>
        </Card>
      </section>
    </>
  );
}
