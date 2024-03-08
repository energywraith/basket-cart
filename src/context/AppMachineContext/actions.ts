import { ActionFunctionMap, ProvidedActor, assign } from "xstate";
import { AppMachineActions, AppMachineContext } from "./types";

export const appMachineActions: ActionFunctionMap<
  AppMachineContext,
  AppMachineActions,
  ProvidedActor
> = {
  addProduct: assign(({ context, event }) => {
    return {
      products: [...context.products, event.product],
    };
  }),
};
