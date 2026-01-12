
import React, { useState } from 'react';
import { generateViralIdea } from '../services/geminiService';
import { Platform, ViralIdea } from '../types';

const IdeaGenerator: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [platform, setPlatform] = useState<Platform>(Platform.TIKTOK);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ViralIdea | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche) return;
    setLoading(true);
    try {
      const idea = await generateViralIdea(niche, platform);
      setResult(idea);
    } catch (error) {
      console.error(error);
      alert("Fehler beim Generieren der Idee. Bitte versuche es erneut.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="generator" className="py-24 px-6">
      <div className="max-w-4xl mx-auto glass-card p-10 rounded-3xl border-2 border-purple-500/20 shadow-2xl shadow-purple-900/10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-4">Dein Viraler <span className="gradient-text">Ideen-Generator</span></h2>
          <p className="text-slate-400">Wähle deine Nische und lass die KI einen Skript-Entwurf für Fliki erstellen.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-4 mb-10">
          <input 
            type="text" 
            placeholder="Deine Nische (z.B. Motivation, Krypto, Kochen)" 
            className="md:col-span-2 bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
          />
          <select 
            className="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            value={platform}
            onChange={(e) => setPlatform(e.target.value as Platform)}
          >
            {Object.values(Platform).map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          <button 
            type="submit" 
            disabled={loading}
            className="md:col-span-3 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800 py-4 rounded-xl font-bold transition-all"
          >
            {loading ? "Generiere Magie..." : "Video Idee erstellen"}
          </button>
        </form>

        {result && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
              <h4 className="text-purple-400 font-bold uppercase text-xs mb-2 tracking-widest">Titel</h4>
              <p className="text-xl font-semibold">{result.title}</p>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
              <h4 className="text-blue-400 font-bold uppercase text-xs mb-2 tracking-widest">Der Hook (Erste 3 Sek.)</h4>
              <p className="italic text-slate-300">"{result.hook}"</p>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
              <h4 className="text-emerald-400 font-bold uppercase text-xs mb-2 tracking-widest">Skript-Struktur</h4>
              <p className="whitespace-pre-line text-slate-300 leading-relaxed">{result.scriptOutline}</p>
            </div>
            <div className="p-6 bg-purple-900/20 rounded-2xl border border-purple-500/30">
              <h4 className="text-purple-400 font-bold uppercase text-xs mb-2 tracking-widest">Fliki Umsetzungstipp</h4>
              <p className="text-slate-300">{result.flikiTips}</p>
              <a 
                href="https://fliki.ai/?via=viral-ki" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-bold text-white bg-purple-600 px-4 py-2 rounded-lg"
              >
                Direkt in Fliki umsetzen →
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IdeaGenerator;
