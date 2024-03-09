"use client";

import { AppContext } from "@/context/AppMachineContext";

export const useAppMachine = () => {
  const actor = AppContext.useActorRef();
  const state = AppContext.useSelector((state) => state);

  const states = {
    goNext: (args?: { [key: string]: any }) => {
      actor.send({
        type: "NEXT_STEP",
        ...args,
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

  return { actor, state, states };
};
