import { Link } from 'react-router-dom';

const Button = (props) => {
  const {
    type = 'button',
    children,
    variant = 'primary',
    url,
    onClick = () => {},
  } = props;

  const variantType = {
    primary: `bg-[#FF93B0] text-white hover:bg-[#FF7FA3]`,
    secondary: `bg-white text-[#FF94B0] border border-[#FF93B0] hover:bg-[#FFEEF3]`,
  };

  if (url) {
    return (
      <Link to={url} className="w-full">
        <button
          type="button"
          className={`font-semibold w-full px-4 text-sm py-2 rounded-md transition-all duration-200 cursor-pointer ${variantType[variant]}`}
        >
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`font-semibold w-full px-4 text-sm py-2 rounded-md transition-all duration-200 cursor-pointer ${variantType[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
