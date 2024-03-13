import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { countries } from "@/consts";
import { useAppMachine } from "@/context/AppMachineContext";

interface AddressCardProps {
  onChangeAddress: () => void;
}

const AddressCard = ({ onChangeAddress }: AddressCardProps) => {
  const { state } = useAppMachine();
  const address = state.context.address;

  const country =
    countries.find((country) => country.value === address?.country)?.label ||
    "";

  return (
    <Card as="section" className="flex flex-col gap-y-4">
      <Card.Header as="h2">Address Details</Card.Header>
      <ul className="flex flex-col gap-y-2">
        <li>{country}</li>
        <li>{address?.street}</li>
        <li>{address?.city}</li>
      </ul>
      <Button variant="text" className="self-start" onClick={onChangeAddress}>
        Change Address
      </Button>
    </Card>
  );
};

export { AddressCard };
