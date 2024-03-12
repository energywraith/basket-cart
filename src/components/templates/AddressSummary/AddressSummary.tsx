import { Card } from "@/components/common/Card";
import { countries } from "@/consts";
import { useAppMachine } from "@/context/AppMachineContext";

const AddressSummary = () => {
  const { state } = useAppMachine();
  const address = state.context.address;

  const country =
    countries.find((country) => country.value === address?.country)?.label ||
    "";

  return (
    <Card className="w-full">
      <Card.Header as="h3">Address</Card.Header>
      <ul className="mt-3 flex flex-col gap-y-2">
        <li className="flex justify-between">
          Country
          <span>{country}</span>
        </li>
        <li className="flex justify-between">
          Street
          <span>{address?.street}</span>
        </li>
        <li className="flex justify-between">
          City
          <span>{address?.city}</span>
        </li>
      </ul>
    </Card>
  );
};

export { AddressSummary };
