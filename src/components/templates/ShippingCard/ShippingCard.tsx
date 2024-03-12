import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { shippingMethods } from "@/consts";
import { useAppMachine } from "@/context/AppMachineContext";

interface ShippingCardProps {
  onChangeShipping: () => void;
}

const ShippingCard = ({ onChangeShipping }: ShippingCardProps) => {
  const { state } = useAppMachine();

  const shippingMethod = state.context.shippingMethod;
  const shippingMethodLabel = shippingMethods.find(
    (method) => method.value === shippingMethod
  )?.label;

  return (
    <Card className="flex flex-col gap-y-4">
      <Card.Header as="h2">Shipping Details</Card.Header>
      <h3>{shippingMethodLabel}</h3>
      <Button variant="text" className="self-start" onClick={onChangeShipping}>
        Change Shipping
      </Button>
    </Card>
  );
};

export { ShippingCard };
