"use client";

// State = completed

import { useAppMachine } from "@/context/AppMachineContext";

export default function Completed() {
  const { state } = useAppMachine();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>State: {state.value as string}</h1>
    </main>
  );
}
