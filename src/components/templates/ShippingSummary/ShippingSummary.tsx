import { Card } from "@/components/common/Card";
import { paymentMethods, shippingMethods } from "@/consts";
import { useAppMachine } from "@/context/AppMachineContext";

const ShippingSummary = () => {
  const { state } = useAppMachine();

  const shippingMethod = shippingMethods.find(
    (method) => method.value === state.context.shippingMethod
  )?.label;

  const paymentMethod = paymentMethods.find(
    (method) => method.value === state.context.paymentMethod
  )?.label;

  return (
    <Card className="w-full">
      <Card.Header as="h3">Order Details</Card.Header>
      <ul className="mt-3 flex flex-col gap-y-2">
        <li className="flex justify-between">
          Shipping
          <span>{shippingMethod}</span>
        </li>
        {paymentMethod && (
          <li className="flex justify-between">
            Payment
            <span>{paymentMethod}</span>
          </li>
        )}
      </ul>
    </Card>
  );
};

export { ShippingSummary };
