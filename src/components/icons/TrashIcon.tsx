import { IconProps } from "./types";

const TrashIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-3 0 32 32"
    {...props}
    className={props.className}
  >
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <g fill="currentColor" transform="translate(-261 -205)">
        <path d="M268 220a1 1 0 012 0v12a1 1 0 11-2 0v-12zm5 0a1 1 0 012 0v12a1 1 0 11-2 0v-12zm5 0a1 1 0 012 0v12a1 1 0 11-2 0v-12zm-15 13a4 4 0 004 4h14a4 4 0 004-4v-16h-22v16zm14-24h-6v-1a1 1 0 011-1h4a1 1 0 011 1v1zm8 0h-6v-2a2 2 0 00-2-2h-6a2 2 0 00-2 2v2h-6a2 2 0 00-2 2v2a2 2 0 001.999 2h22.003a2 2 0 001.998-2v-2a2 2 0 00-2-2z"></path>
      </g>
    </g>
  </svg>
);

export { TrashIcon };
