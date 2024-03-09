"use client";

// State = cart, check if products.length > 0

import { useAppMachine } from "@/context/AppMachineContext";
import Link from "next/link";

export default function Address() {
  const { states } = useAppMachine();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <section className="flex flex-col items-center gap-y-2 mt-auto">
        <Link href="/shipment" onClick={() => states.goNext()}>
          Next Step
        </Link>
        <Link href="/">Back</Link>
      </section>
    </main>
  );
}
