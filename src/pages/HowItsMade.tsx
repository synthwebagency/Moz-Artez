import { Hammer, Drill, Scissors, Cog, HandMetal } from 'lucide-react';

export default function HowItsMade() {
  const tools = [
    { icon: <Cog size={32} />, name: 'Grinders', desc: 'For smoothing and shaping recycled metal.' },
    { icon: <Drill size={32} />, name: 'Drilling Machines', desc: 'Precision holes for assembly and design.' },
    { icon: <Scissors size={32} />, name: 'Tin Snips', desc: 'Cutting through metal sheets with accuracy.' },
    { icon: <Hammer size={32} />, name: 'Hammers', desc: 'The fundamental tool for hand-shaping art.' },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-primary text-white py-32 relative overflow-hidden border-b border-border-custom">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <img
            src="/images/workshop-craftsmanship.jpg"
            alt="Workshop"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">The Art of Craftsmanship</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Discover the process behind our exotic and durable creations, where hand-made tradition meets mechanical precision.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 text-white rounded-full text-xs font-bold uppercase tracking-widest border border-border-custom">
                Our Process
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                60% Hand-Made, <br />
                <span className="text-secondary">100% Passion.</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed font-light">
                "Our products are 60% hand-made, but due to the resistance of some recycled materials, we have to use mechanical equipment such as grinders, drilling machines, tin snips, hammers & many other machines."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 bg-white/5 rounded-3xl space-y-4 border border-border-custom">
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-sm border border-border-custom">
                  <HandMetal size={24} />
                </div>
                <h4 className="font-bold text-xl text-white">Manual Artistry</h4>
                <p className="text-sm text-white/60">Intricate details and finishing touches are all done by hand to ensure uniqueness.</p>
              </div>
              <div className="p-8 bg-border-custom/50 rounded-3xl space-y-4 border border-border-custom">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-secondary shadow-sm border border-border-custom">
                  <Cog size={24} />
                </div>
                <h4 className="font-bold text-xl text-white">Mechanical Power</h4>
                <p className="text-sm text-white/60">Heavy-duty equipment allows us to work with the toughest recycled materials.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <img
              src="/images/manual-artistry-process.jpg"
              alt="Manual Artistry Process"
              className="rounded-3xl shadow-xl aspect-[3/4] object-cover mt-12 border-4 border-border-custom"
              referrerPolicy="no-referrer"
            />
            <img
              src="/images/mechanical-power-process.jpg"
              alt="Mechanical Power Process"
              className="rounded-3xl shadow-xl aspect-[3/4] object-cover border-4 border-border-custom"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-border-custom/30 py-24 border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-white">Our Toolkit</h2>
            <p className="text-white/70 max-w-xl mx-auto">The essential machinery and tools that power our creative workshop.</p>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-[2.5rem] text-center border border-border-custom shadow-sm hover:shadow-xl transition-all group">
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-secondary mx-auto mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300 border border-border-custom">
                  {tool.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{tool.name}</h4>
                <p className="text-sm text-white/60 leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
