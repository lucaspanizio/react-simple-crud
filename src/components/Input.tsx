interface InputProps {
  type?: "text" | "number";
  text: string;
  value: any;
  readOnly?: boolean;
  onChange?: (value: any) => void;
}

export const Input = ({
  type,
  value,
  text,
  readOnly,
  onChange,
}: InputProps) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 mt-4">{text}</label>
      <input
        type={type ?? "text"}
        value={value}
        readOnly={readOnly}
        onChange={(e) => onChange?.(e.target.value)}
        className={`border border-purple-500 rounded-lg 
          focus:outline-none ${readOnly ? "" : "focus:bg-white"}
          bg-gray-100 px-4 py-2`}
      />
    </div>
  );
};
