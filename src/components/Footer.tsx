import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/products';

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-300 pt-16 pb-8 border-t border-border-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Moz-artez Logo" className="h-12 w-auto" referrerPolicy="no-referrer" />
              <span className="text-2xl font-display font-bold text-white">Moz-artez</span>
            </div>
            <p className="text-sm leading-relaxed">
              Sustainable high-quality products made from recycled metal, wood, and stone. Artistic furniture and decoration from Tete, Moçambique.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/how-its-made" className="hover:text-primary transition-colors">How It's Made</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Categories</h4>
            <ul className="space-y-3 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <Link to={`/products/${cat.toLowerCase()}`} className="hover:text-primary transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>Tete, Moçambique, Bairro Chingodzi</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>851410047</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>mozartes968@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Moz-artez. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/share/1DKWABTgMJ/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
