const Input = (props) => {
  const {
    label,
    name,
    type = 'text',
    placeholder,
    disabled = false,
    value = '',
    onChange = () => {},
  } = props;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium text-black/70">
        {label}
      </label>

      <input
        name={name}
        id={name}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="w-full rounded-lg px-4 py-2 border border-black/10 text-sm placeholder:text-black/30 focus:outline-none focus:ring-1 focus:ring-[#FF93B0] focus:border-[#FF93B0] transition duration-200"
      />
    </div>
  );
};

export default Input;
