import { ActionFunctionMap, EventObject, ProvidedActor, assign } from "xstate";
import { AppMachineActions, AppMachineContext } from "./types";

function assertEventType<TE extends EventObject, TType extends TE["type"]>(
  event: TE,
  eventType: TType
): asserts event is TE & { type: TType } {
  if (event.type !== eventType) {
    return;
  }
}
export const appMachineActions: ActionFunctionMap<
  AppMachineContext,
  AppMachineActions,
  ProvidedActor
> = {
  addProduct: assign(({ context, event }) => {
    assertEventType(event, "addProduct");
    return {
      products: [...context.products, event.product],
    };
  }),
  deleteProduct: assign(({ context, event }) => {
    assertEventType(event, "deleteProduct");
    return {
      products: context.products.filter(
        (product) => product.id !== event.productId
      ),
    };
  }),
  setAddress: assign(({ event }) => {
    assertEventType(event, "setAddress");
    return {
      address: event.address,
    };
  }),
  setShippingMethod: assign(({ event }) => {
    assertEventType(event, "setShippingMethod");
    return {
      shippingMethod: event.shippingMethod,
    };
  }),
  setPaymentMethod: assign(({ event }) => {
    assertEventType(event, "setPaymentMethod");
    return {
      paymentMethod: event.paymentMethod,
    };
  }),
};
