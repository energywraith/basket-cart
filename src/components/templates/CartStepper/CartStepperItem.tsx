import { CheckIcon } from "@/components/icons/CheckIcon";
import { classNames } from "@/utils/classnames";

interface CartStepperItemProps {
  step: string;
  index: number;
  isCompleted: boolean;
  isActive: boolean;
  isLast: boolean;
}

const CartStepperItem = ({
  step,
  isCompleted,
  isActive,
  isLast,
}: CartStepperItemProps) => {
  return (
    <li
      className={classNames(
        "flex items-center pointer-events-none",
        isActive && "text-blue-600",
        isCompleted ? "after:!border-gray-400" : "after:border-transparent",
        !isLast &&
          "md:w-full after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-4"
      )}
    >
      <span className="flex items-center">
        {isCompleted && (
          <CheckIcon className="hidden md:block w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
        )}
        {step}
      </span>
    </li>
  );
};

export { CartStepperItem };
