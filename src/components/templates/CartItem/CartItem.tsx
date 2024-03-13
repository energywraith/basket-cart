import { Card } from "@/components/common/Card";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { TrashIcon } from "@/components/icons/TrashIcon";
import { Product } from "@/context/AppMachineContext/types";
import { classNames } from "@/utils/classnames";

interface CartItemProps extends Product {
  onDelete?: (id: string) => void;
}

const CartItem = ({ id, name, price, delivery, onDelete }: CartItemProps) => {
  return (
    <Card as="article" className="flex items-center gap-4">
      <div className="flex-grow flex flex-col md:flex-row">
        <h2 className="text-lg">{name}</h2>
        <h3 className="text-base font-medium md:ml-auto flex items-center gap-x-2">
          Delivery
          <CheckIcon
            className={classNames(
              "w-4 h-4",
              delivery ? "text-blue-600" : "text-neutral-300"
            )}
          />
        </h3>
      </div>
      <h4 className="text-md md:text-xl font-medium ml-auto md:ml-0">
        {price.toFixed(2)} zł
      </h4>
      {onDelete && (
        <TrashIcon className="w-5 h-5" onClick={() => onDelete(id)} />
      )}
    </Card>
  );
};

export { CartItem };
