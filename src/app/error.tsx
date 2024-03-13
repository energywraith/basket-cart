"use client";

import { Card } from "@/components/common/Card";
import { Link } from "@/components/common/Link";
import { CartCrossIcon } from "@/components/icons/CartCrossIcon";
import { useAppMachine } from "@/context/AppMachineContext";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const { reset } = useAppMachine();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-col md:flex-row w-full gap-4">
      <Card as="section" className="flex-grow flex flex-col items-center py-12">
        <CartCrossIcon className="w-24 h-24 text-red-700" />
        <h1 className="font-semibold text-lg mt-4">
          There was a problem with your order
        </h1>
        <p className="font-light text-md max-w-72 text-center mt-1">
          {error.message}
        </p>
        <Link href="/" className="mt-6" fitWidth onClick={reset}>
          Restart Shopping
        </Link>
      </Card>
    </section>
  );
}
