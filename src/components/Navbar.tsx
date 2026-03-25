import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { clsx } from 'clsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'How It\'s Made', path: '/how-its-made' },
    { name: 'Contact', path: '/contact' },
  ];

  const categories = [
    'Gates', 'Tables', 'Rocks', 'Shelves', 'Chairs', 'Decorations'
  ];

  return (
    <nav className="bg-primary/95 backdrop-blur-md sticky top-0 z-50 border-b border-border-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <img src="/images/logo.png" alt="Moz-artez Logo" className="h-16 w-auto" referrerPolicy="no-referrer" />
              <span className="text-3xl font-display font-bold text-white tracking-tight">Moz-artez</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  clsx(
                    "text-sm font-medium transition-colors hover:text-secondary",
                    isActive ? "text-secondary" : "text-white/70"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="relative group">
              <button className="text-sm font-medium text-white/70 hover:text-secondary flex items-center gap-1">
                Products
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-primary border border-border-custom shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    to={`/products/${cat.toLowerCase()}`}
                    className="block px-4 py-2 text-sm text-white/70 hover:bg-secondary hover:text-white"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/80 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={clsx("md:hidden bg-primary border-b border-white/10", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-md"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 pb-2 border-t border-white/10">
            <p className="px-3 text-xs font-semibold text-white/50 uppercase tracking-wider">Categories</p>
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/products/${cat.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-md"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
