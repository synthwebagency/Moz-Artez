import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Hammer, ShieldCheck, Zap } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { clsx } from 'clsx';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-24 pb-12">
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 z-10" />
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Moz-artez Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 drop-shadow-lg">
            Artistic Sustainability
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-10 font-light leading-relaxed">
            Hand-crafted furniture and decor from recycled metal, wood, and stone.
            Exotic, durable, and uniquely Mozambican.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products/gates"
              className="px-10 py-4 bg-primary text-white rounded-full font-semibold hover:bg-teal-600 transition-all shadow-xl hover:shadow-primary/20"
            >
              Explore Collection
            </Link>
            <Link
              to="/about"
              className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-widest border border-border-custom">
              Welcome to Moz-artez
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Crafting Beauty from <span className="text-secondary italic">Recycled</span> Elements
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Based in Tete, Moçambique, we specialize in creating high-quality furniture and artwork that aligns with environmental values. Our work is a testament to the versatility of metal, wood, and stone.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-border-custom">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-secondary">60%</div>
                <p className="text-sm text-white/70 uppercase font-semibold tracking-wider">Hand-Made</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-secondary">100%</div>
                <p className="text-sm text-white/70 uppercase font-semibold tracking-wider">Sustainable</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/welcome-craft.jpg"
              alt="Craftsmanship"
              className="rounded-3xl shadow-2xl object-cover w-full aspect-[4/5] border-4 border-border-custom"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl hidden md:block border border-border-custom">
              <p className="font-display italic text-xl text-white">"Exotic and durable work."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-primary/50 py-24 border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-white">Explore Our Categories</h2>
            <p className="text-white/70 max-w-xl mx-auto">Discover our diverse range of artistic solutions for your home and business.</p>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                to={`/products/${cat.toLowerCase()}`}
                className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl text-center border border-border-custom hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:text-white transition-colors text-secondary">
                  <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
                <span className="font-semibold text-white">{cat}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Featured Pieces</h2>
            <p className="text-white/70">A selection of our most popular hand-crafted works.</p>
            <div className="w-16 h-1 bg-secondary"></div>
          </div>
          <Link to="/products/gates" className="text-white font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            View All Products <ArrowRight size={18} className="text-secondary" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square overflow-hidden rounded-2xl mb-4 border border-border-custom">
                <img
                  src={product.image}
                  alt={product.name}
                  className={clsx(
                    "w-full h-full transition-transform duration-500 group-hover:scale-110",
                    ['Decorations', 'Lights', 'Domestic food grinding machines'].includes(product.category) ? "object-contain p-4" : "object-cover"
                  )}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
              <p className="text-sm text-white/60 mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-white font-bold">{product.price.toLocaleString()} MZN</span>
                <Link
                  to="/contact"
                  className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-white transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-white overflow-hidden relative border border-border-custom">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -mr-48 -mt-48" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Our Core Values</h2>
              <p className="text-xl text-white/80 leading-relaxed font-light">
                "Our quality, durability, recyclability, and design versatility make it an essential component in furniture, decoration, and storage solutions."
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-full font-semibold hover:bg-secondary/80 transition-all border border-border-custom"
              >
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Leaf className="text-secondary" />, title: 'Eco-Friendly', desc: 'Sustainable materials' },
                { icon: <Hammer className="text-secondary" />, title: 'Artisan', desc: '60% hand-made' },
                { icon: <ShieldCheck className="text-secondary" />, title: 'Durable', desc: 'Built to last' },
                { icon: <ArrowRight className="text-secondary" />, title: 'Versatile', desc: 'Custom designs' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-border-custom p-8 rounded-3xl backdrop-blur-sm">
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="font-bold text-lg mb-1 text-white"> {item.title}</h4>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Attribution */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
          <span>Done by</span>
          <div className="flex items-center gap-1 group cursor-default">
            <Zap size={12} className="fill-secondary text-secondary" />
            <span className="transition-colors">
              <span className="text-[#1A2B3C]">Synth</span>
              <span className="text-white">web</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
