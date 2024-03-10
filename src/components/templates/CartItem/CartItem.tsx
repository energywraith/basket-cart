import { Card } from "@/components/common/Card";
import { TrashIcon } from "@/components/icons/TrashIcon";
import { Product } from "@/context/AppMachineContext/types";

interface CartItemProps extends Product {
  onDelete: (id: string) => void;
}

const CartItem = ({ id, name, price, onDelete }: CartItemProps) => {
  return (
    <Card as="article" className="flex items-center gap-4">
      <h2 className="text-lg">{name}</h2>
      <h3 className="text-xl font-medium ml-auto">{price.toFixed(2)} zł</h3>
      <TrashIcon className="w-5 h-5" onClick={() => onDelete(id)} />
    </Card>
  );
};

export { CartItem };
