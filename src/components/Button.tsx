interface ButtonProps {
  text: string;
  color?: "green" | "blue" | "gray";
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  const color = props.color ?? "gray";
  return (
    <button
      onClick={props.onClick}
      className={`
      bg-gradient-to-r from-${color}-400 to-${color}-700
      text-white px-4 py-2 rounded-md
    `}
    >
      {props.text}
    </button>
  );
}
