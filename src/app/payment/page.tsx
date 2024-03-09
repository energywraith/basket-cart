"use client";

// State = shipping.selected | shipping.skipped

import { useAppMachine } from "@/context/AppMachineContext";
import Link from "next/link";

export default function Address() {
  const { states } = useAppMachine();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <section className="flex flex-col items-center gap-y-2 mt-auto">
        <Link href="/summary" onClick={() => states.goNext()}>
          Next Step
        </Link>
        <Link href="/summary" onClick={() => states.skipStep()}>
          Skip Step
        </Link>
        <Link href="/shipment" onClick={() => states.goBack()}>
          Back
        </Link>
      </section>
    </main>
  );
}
