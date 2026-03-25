import { Mail, Phone, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-border-custom/30 py-24 border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Moz-artez</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
            Blending tradition with sustainability to create exotic furniture and artwork in the heart of Moçambique.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-8"></div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-white/5 rounded-[3rem] -rotate-3 border border-border-custom" />
            <img
              src="/images/founder-sidney-norman.jpg"
              alt="Sidney Norman Ncanca"
              className="relative rounded-[2.5rem] shadow-2xl object-cover w-full aspect-[4/5] border-4 border-border-custom"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-12 -right-12 bg-primary border-4 border-border-custom p-12 rounded-3xl shadow-2xl text-white hidden md:block">
              <p className="text-sm uppercase font-bold tracking-widest mb-2 text-secondary">Founder</p>
              <p className="text-3xl font-display font-bold">Sidney Norman Ncanca</p>
            </div>
          </div>
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">The Visionary Behind the Art</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Sidney Norman Ncanca founded Moz-artez with a simple yet powerful mission: to transform recycled materials into high-quality, stylish pieces that align with environmental values.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 p-8 rounded-3xl border border-border-custom">
                <h3 className="text-2xl font-bold text-secondary mb-4">Our Value</h3>
                <p className="text-white/80 italic leading-relaxed">
                  "Our quality, durability, recyclability, and design versatility make it an essential component in furniture, decoration, and storage solutions. By embracing metal, wood & stone in sustainable high quality products, we can create long-lasting, stylish pieces that align with our environmental values."
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-3xl border border-border-custom shadow-sm">
                <h3 className="text-2xl font-bold text-secondary mb-4">Our Activities</h3>
                <p className="text-white/80 leading-relaxed">
                  "We make furniture artwork & domestic food power machines. We use recycled materials (Metal, wood & stone), which makes our work exotic and durable."
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-teal-200 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white font-medium">Tete, Moçambique, Bairro Chingodzi</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-teal-200 uppercase tracking-wider mb-1">Contact</p>
                  <p className="text-white font-medium">851410047</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-teal-200 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white font-medium">mozartes968@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
