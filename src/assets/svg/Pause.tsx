interface Props {
  width?: string;
  height?: string;
}

export default function Pause({ width, height }: Props) {
  return (
    <svg
      width={width || 25}
      height={height || 25}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 22C6.977 22 2.5 17.523 2.5 12C2.5 6.477 6.977 2 12.5 2C18.023 2 22.5 6.477 22.5 12C22.494 17.52 18.02 21.994 12.5 22ZM13.5 8V16H15.5V8H13.5ZM9.5 8V16H11.5V8H9.5Z"
        fill="black"
      />
    </svg>
  );
}
