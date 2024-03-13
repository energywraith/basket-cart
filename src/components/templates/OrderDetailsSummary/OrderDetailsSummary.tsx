import { Card } from "@/components/common/Card";
import { paymentMethods, shippingMethods } from "@/consts";
import { useAppMachine } from "@/context/AppMachineContext";

interface OrderDetailsSummaryProps {
  showPayment?: boolean;
}

const OrderDetailsSummary = ({ showPayment }: OrderDetailsSummaryProps) => {
  const { state } = useAppMachine();

  const shippingMethod = shippingMethods.find(
    (method) => method.value === state.context.shippingMethod
  )?.label;

  const paymentMethod = paymentMethods.find(
    (method) => method.value === state.context.paymentMethod
  )?.label;

  return (
    <Card as="section" className="w-full">
      <Card.Header as="h3">Order Details</Card.Header>
      <ul className="mt-3 flex flex-col gap-y-2">
        <li className="flex justify-between">
          Shipping
          <span>{shippingMethod || "SKIPPED"}</span>
        </li>
        {showPayment && (
          <li className="flex justify-between">
            Payment
            <span>{paymentMethod || "SKIPPED"}</span>
          </li>
        )}
      </ul>
    </Card>
  );
};

export { OrderDetailsSummary };
