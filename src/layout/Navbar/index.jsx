import NavItem from './NavItem';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navList = [
    { text: 'Beranda', url: '/', icon: 'home' },
    { text: 'Screening', url: '/screening', icon: 'screening' },
    { text: 'Riwayat', url: '/riwayat', icon: 'history' },
    { text: 'Profil', url: '/profil', icon: 'profile' },
  ];

  return (
    <nav className="flex justify-between px-28 py-6 max-[520px]:px-4 bg-white shadow-sm fixed w-full z-50 max-[520px]:flex-col max-[520px]:gap-6">
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-semibold tracking-wide">EyeNemia</h1>
        <img
          onClick={toggleMenu}
          src="/assets/icons/menu.svg"
          alt=""
          className="w-5 hidden max-[520px]:flex"
        />
      </div>
      <div
        className={`flex items-center ${isMenuOpen ? '' : 'max-[520px]:hidden'}`}
      >
        <ul className="flex items-center gap-10 max-[520px]:flex-col max-[520px]:gap-5 max-[520px]:items-start">
          {navList.map((item) => (
            <NavItem
              key={item.url}
              url={item.url}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
