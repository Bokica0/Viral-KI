
import React from 'react';
import { Platform } from '../types';

interface PlatformCardProps {
  platform: Platform;
  icon: string;
  description: string;
  strategy: string[];
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform, icon, description, strategy }) => {
  return (
    <div className="glass-card p-8 rounded-3xl hover:border-purple-500/50 transition-all group">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{platform}</h3>
      <p className="text-slate-400 mb-6 text-sm leading-relaxed">
        {description}
      </p>
      <ul className="space-y-3">
        {strategy.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="text-purple-500 mt-1">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <a 
        href="https://fliki.ai/?via=viral-ki" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-8 block text-center w-full py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors text-sm font-semibold"
      >
        Fliki Vorlagen für {platform}
      </a>
    </div>
  );
};

export default PlatformCard;
