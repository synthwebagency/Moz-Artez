import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { clsx } from 'clsx';

export default function ProductCategory() {
  const { category } = useParams<{ category: string }>();
  
  const filteredProducts = PRODUCTS.filter(
    (p) => p.category.toLowerCase() === category?.toLowerCase()
  );

  const categoryTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-border-custom/30 py-20 border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white font-semibold mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={18} className="text-secondary" /> Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-white mb-4">{categoryTitle}</h1>
          <p className="text-white/70 max-w-xl">
            Explore our unique collection of {categoryTitle.toLowerCase()}, hand-crafted with precision and artistic vision.
          </p>
          <div className="w-16 h-1 bg-secondary mt-6"></div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-border-custom shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border-custom">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={clsx(
                      "w-full h-full transition-transform duration-700 group-hover:scale-110",
                      ['Decorations', 'Lights', 'Domestic food grinding machines'].includes(product.category) ? "object-contain p-4" : "object-cover"
                    )}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-8 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{product.description}</p>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-border-custom">
                    <span className="text-2xl font-bold text-white">{product.price.toLocaleString()} MZN</span>
                    <Link
                      to="/contact"
                      className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-full text-sm font-semibold hover:bg-secondary/80 transition-colors border border-border-custom"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-white/50">No products found in this category yet. Check back soon!</p>
          </div>
        )}
      </section>
    </div>
  );
}
