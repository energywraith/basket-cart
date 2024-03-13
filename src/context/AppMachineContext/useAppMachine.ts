"use client";

import { AppContext } from "@/context/AppMachineContext";

export const useAppMachine = () => {
  const actor = AppContext.useActorRef();
  const state = AppContext.useSelector((state) => state);

  const states = {
    goNext: () => {
      actor.send({
        type: "NEXT_STEP",
      });
    },
    skipStep: () => {
      actor.send({
        type: "SKIP_STEP",
      });
    },
    goBack: () => {
      actor.send({
        type: "PREVIOUS_STEP",
      });
    },
  };

  const reset = () => {
    actor.send({
      type: "RESET",
    });
  };

  return { actor, state, states, reset };
};
