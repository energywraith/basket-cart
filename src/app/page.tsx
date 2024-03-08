"use client";

import { AppContext } from "@/context/AppMachineContext";

export default function Home() {
  const actor = AppContext.useActorRef();
  const appContext = AppContext.useSelector((state) => state);

  const onCart = () => {
    actor.send({
      type: "PROCEED_TO_ADDRESSED",
    });
  };

  const onAdd = () => {
    actor.send({
      type: "ADD_PRODUCT",
      product: `Product ${Math.floor(Math.random() * (50 - 2) + 1)}`,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>State: {appContext.value as string}</h1>
      <ul>
        {appContext.context.products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
      <section className="flex flex-col gap-y-2">
        <button onClick={onAdd}>Add Product</button>
        <button onClick={onCart}>Proceed to Addressed</button>
      </section>
    </main>
  );
}
