
import React from 'react';
import Navbar from './components/Navbar';
import PlatformCard from './components/PlatformCard';
import IdeaGenerator from './components/IdeaGenerator';
import { Platform } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-purple-500/30">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-purple-400 uppercase tracking-widest mb-6">
            Dein Weg zum Viral-Status
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]">
            Faceless Videos skalieren mit <br />
            <span className="gradient-text">Viral-KI & Fliki.ai</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Erstelle hochwertige YouTube-Dokus, fesselnde TikTok-Shorts und ästhetische Instagram Reels – ganz ohne Gesicht, in Minuten statt Stunden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://fliki.ai/?via=viral-ki" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all transform hover:scale-105"
            >
              Kostenlos Starten mit Fliki
            </a>
            <a 
              href="#generator" 
              className="px-8 py-4 glass-card rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all"
            >
              Idee generieren
            </a>
          </div>
        </div>
      </header>

      {/* Platforms Section */}
      <section id="platforms" className="py-24 px-6 bg-slate-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Plattform-Strategien</h2>
            <p className="text-slate-400">Jedes Format braucht einen eigenen Ansatz. So nutzt du Fliki optimal.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <PlatformCard 
              platform={Platform.TIKTOK}
              icon="📱"
              description="TikTok liebt Geschwindigkeit und Energie. Nutze schnelle Schnitte und emotionale KI-Stimmen."
              strategy={[
                "Extreme Hook in den ersten 2 Sekunden",
                "Untertitel mit leuchtenden Farben",
                "Trending AI-Voices von Fliki nutzen",
                "Dichte: Alle 3 Sek. ein neuer Bildimpuls"
              ]}
            />
            <PlatformCard 
              platform={Platform.YOUTUBE}
              icon="📺"
              description="YouTube-Automatisierung braucht Qualität. Erstelle 10-Minuten Dokus mit Stock-Footage."
              strategy={[
                "Ausführliches Storytelling (Text-to-Video)",
                "Professionelle Voiceovers (z.B. 'Kore')",
                "Millionen Premium-Stocks direkt in Fliki",
                "SEO-optimierte Skripte durch KI"
              ]}
            />
            <PlatformCard 
              platform={Platform.INSTAGRAM}
              icon="📸"
              description="Instagram Reels drehen sich um Ästhetik und Lifestyle. Perfekt für Zitate und News."
              strategy={[
                "Cinematische Stock-Videos wählen",
                "Subtile, elegante Untertitel",
                "Reel-Format (9:16) Voreinstellungen",
                "Passende Hintergrundmusik aus Library"
              ]}
            />
          </div>
        </div>
      </section>

      <IdeaGenerator />

      {/* Features / Why Fliki */}
      <section id="features" className="py-24 px-6 bg-slate-900/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Warum <span className="text-blue-500">Fliki.ai</span> für Faceless Kanäle?</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 text-purple-500 rounded-xl flex items-center justify-center font-bold">01</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Text-zu-Video Magie</h4>
                  <p className="text-slate-400">Kopiere dein Skript hinein, und Fliki findet automatisch passendes Bildmaterial und Untertitel.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 text-blue-500 rounded-xl flex items-center justify-center font-bold">02</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">2000+ Realistische Stimmen</h4>
                  <p className="text-slate-400">Keine Roboter-Stimmen mehr. Nutze emotionale Sprecher in über 75 Sprachen inklusive Deutsch.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600/20 text-emerald-500 rounded-xl flex items-center justify-center font-bold">03</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Affordable Scaling</h4>
                  <p className="text-slate-400">Ein Bruchteil der Kosten eines Video-Editors. Erstelle 10x mehr Content in der gleichen Zeit.</p>
                </div>
              </div>
            </div>
            <a 
              href="https://fliki.ai/?via=viral-ki" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-12 bg-blue-600 px-8 py-4 rounded-2xl font-bold transition-all hover:bg-blue-500"
            >
              Jetzt mit Fliki starten
            </a>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=1000" 
              alt="YouTube Analytics und Statistiken Dashboard" 
              className="rounded-3xl border border-slate-700 shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl border-purple-500/30">
              <div className="text-3xl font-bold">+500%</div>
              <div className="text-sm text-slate-400">Watchtime Steigerung</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-slate-900 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <div className="text-2xl font-bold mb-2">Viral-<span className="text-purple-500">KI</span></div>
            <p className="text-slate-500 text-sm">Die Nr. 1 Anlaufstelle für Faceless Content Creator.</p>
          </div>
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="https://fliki.ai/?via=viral-ki" target="_blank" className="hover:text-white transition-colors">Affiliate Link Info</a>
          </div>
          <p className="text-xs text-slate-600 max-w-xs text-center md:text-right">
            Hinweis: Diese Seite enthält Affiliate Links zu Fliki.ai. Bei einem Kauf erhalte ich eine kleine Provision ohne Extrakosten für dich.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
