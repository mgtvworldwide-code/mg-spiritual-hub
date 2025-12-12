import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Tv, Film, Users, Mail, Heart } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'ዋና ገጽ', icon: Tv },
    { href: '/videos', label: 'ቪዲዮዎች', icon: Film },
    { href: '/about', label: 'ስለ እኛ', icon: Users },
    { href: '/contact', label: 'ያግኙን', icon: Mail },
    { href: '/donate', label: 'ይለግሱ', icon: Heart },
  ];

  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
        <Link to='/' className='flex items-center space-x-2'>
          <h1 className='text-2xl font-bold text-blue-900'>MG TV Channel</h1>
        </Link>

        <nav className='hidden md:flex items-center space-x-6'>
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-base font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-gray-600 hover:text-blue-600'>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white border-t border-gray-200'>
          <nav className='flex flex-col p-4 space-y-2'>
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
                }
              >
                <link.icon size={20} />
                <span>{link.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;