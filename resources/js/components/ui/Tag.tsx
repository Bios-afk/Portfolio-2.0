import React from 'react';

interface TagProps {
  children: React.ReactNode;
  tone?: 'neutral' | 'accent';
}

/** Stack/skill tag — e.g. "PHP", "Laravel", "React". Neutral, non-interactive by default. */
export function Tag({ children, tone = 'neutral' }: TagProps) {
    const toneCls = tone === 'accent' ? 'text-jade-clair border-jade/35' : 'text-gris-texte border-gris-legende/20';
  return (
    <span className={`inline-flex items-center font-mono text-xs tracking-[0.04em] rounded px-2.5 py-[5px] border ${toneCls}`}>
      {children}
    </span>
  );
}
