interface Props {
  width?: string;
  height?: string;
}

export default function IconMenu({ width, height }: Props) {
  return (
    <svg
      width={width || 25}
      height={height || 25}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 16H3V14H21V16ZM21 10H3V8H21V10Z" fill="#AAAAAA" />
    </svg>
  );
}
