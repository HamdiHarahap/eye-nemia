import { Link, useLocation } from 'react-router-dom';

const NavItem = (props) => {
  const { text, icon, url } = props;

  const location = useLocation();
  const isActive = location.pathname === url;

  return (
    <li>
      <Link
        to={url}
        className="flex items-center gap-2 text-sm font-medium group"
      >
        <div className="relative w-6 h-6 cursor-pointer">
          <img
            src={`/assets/icons/${icon}.svg`}
            alt={text}
            className={`absolute inset-0 ${
              isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
            }`}
          />
          <img
            src={`/assets/icons/${icon}-active.svg`}
            alt={text}
            className={`absolute inset-0 ${
              isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
          />
        </div>

        <p
          className={
            isActive
              ? 'text-[#FF93B0]'
              : 'text-black/45 group-hover:text-[#FF93B0]'
          }
        >
          {text}
        </p>
      </Link>
    </li>
  );
};

export default NavItem;
