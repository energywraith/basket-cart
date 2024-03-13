import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { paymentMethods } from "@/consts";
import { useAppMachine } from "@/context/AppMachineContext";

interface PaymentCardProps {
  onChangeShipping: () => void;
}

const PaymentCard = ({ onChangeShipping }: PaymentCardProps) => {
  const { state } = useAppMachine();

  const paymentMethod = state.context.paymentMethod;
  const paymentMethodLabel = paymentMethods.find(
    (method) => method.value === paymentMethod
  )?.label;

  return (
    <Card as="section" className="flex flex-col gap-y-4">
      <Card.Header as="h2">Payment Details</Card.Header>
      <h3>{paymentMethodLabel}</h3>
      <Button variant="text" className="self-start" onClick={onChangeShipping}>
        Change payment
      </Button>
    </Card>
  );
};

export { PaymentCard };
