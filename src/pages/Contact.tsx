import { Mail, Phone, MapPin, Facebook } from 'lucide-react';
import React from 'react';

export default function Contact() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-border-custom/30 py-24 border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
            Have a question or want to request a custom quote? We'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-8"></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Contact Info */}
          <div className="space-y-12 text-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">Contact Information</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Visit our workshop in Tete or reach out via phone or email. We are always open to discussing new artistic projects and furniture solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-4 group p-8 bg-white/5 rounded-3xl border border-border-custom hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all border border-border-custom">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-1">Our Location</p>
                  <p className="text-lg font-semibold text-white">Tete, Moçambique, Bairro Chingodzi</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 group p-8 bg-white/5 rounded-3xl border border-border-custom hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all border border-border-custom">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-xl font-semibold text-white">851410047</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 group p-8 bg-white/5 rounded-3xl border border-border-custom hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all border border-border-custom">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-xl font-semibold text-white">mozartes968@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-border-custom flex flex-col items-center">
              <h4 className="font-bold text-white mb-6">Follow Our Journey</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/1DKWABTgMJ/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-secondary transition-all border border-border-custom">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
