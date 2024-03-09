"use client";

// State = cart

import { useAppMachine } from "@/context/AppMachineContext";
import Link from "next/link";

export default function Home() {
  const { actor, state } = useAppMachine();

  const onAdd = () => {
    actor.send({
      type: "ADD_PRODUCT",
      product: `Product ${Math.floor(Math.random() * (50 - 2) + 1)}`,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <ul className="my-auto">
        {state.context.products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
      <section className="flex flex-col items-center gap-y-2 mt-auto">
        <button onClick={onAdd}>Add Product</button>
        <Link href="/address">Next Step</Link>
      </section>
    </main>
  );
}
