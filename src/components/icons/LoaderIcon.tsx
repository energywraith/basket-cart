import { classNames } from "@/utils/classnames";
import { HTMLProps } from "react";

interface LoaderIconProps extends HTMLProps<HTMLDivElement> {
  fullScreen?: boolean;
}

const LoaderIcon = ({ className, fullScreen, ...props }: LoaderIconProps) => (
  <div {...props} className={className}>
    <div
      className={classNames(
        "inline-block h-full w-full animate-spin rounded-full border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite] border-4"
      )}
      role="status"
    >
      <span className="absolute h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  </div>
);

export { LoaderIcon };
