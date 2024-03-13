"use client";

import { Card } from "@/components/common/Card";
import { Link } from "@/components/common/Link";
import { CartCheckIcon } from "@/components/icons/CartCheckIcon";
import { useAppMachine } from "@/context/AppMachineContext";

// State = completed

export default function Completed() {
  const { reset } = useAppMachine();

  return (
    <section className="flex flex-col md:flex-row w-full gap-4">
      <Card className="flex-grow flex flex-col items-center py-12">
        <CartCheckIcon className="w-24 h-24 text-blue-600" />
        <h1 className="font-semibold text-lg mt-4">
          Your order has been placed
        </h1>
        <p className="font-light text-md max-w-72 text-center mt-1">{`Sit back and relax as your products are on it's way!`}</p>
        <Link href="/" className="mt-6 w-fit px-4" onClick={reset}>
          Continue Shopping
        </Link>
      </Card>
    </section>
  );
}
