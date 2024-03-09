"use client";

// State = payment.selected | payment.skipped

import { useAppMachine } from "@/context/AppMachineContext";
import Link from "next/link";

export default function Address() {
  const { states } = useAppMachine();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <section className="flex flex-col items-center gap-y-2 mt-auto">
        <Link href="/completed" onClick={() => states.goNext()}>
          Complete
        </Link>
        <Link href="/payment" onClick={() => states.goBack()}>
          Back
        </Link>
      </section>
    </main>
  );
}
