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
  deleteProduct: assign(({ context, event }) => {
    return {
      products: context.products.filter(
        (product) => product.id !== event.productId
      ),
    };
  }),
  setAddress: assign(({ event }) => {
    return {
      address: event.address,
    };
  }),
  setShippingMethod: assign(({ event }) => {
    return {
      shippingMethod: event.shippingMethod,
    };
  }),
  setPaymentMethod: assign(({ event }) => {
    return {
      paymentMethod: event.paymentMethod,
    };
  }),
};
