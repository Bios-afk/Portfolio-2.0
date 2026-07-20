import React from 'react';

interface MonogramProps {
    size?: number;
    inverted?: boolean;
}

export function Monogram({ size = 40, inverted = false }: MonogramProps) {
    return (
        <div
            className={`flex shrink-0 items-center justify-center rounded-sm font-sans font-bold tracking-[-0.02em] ${
                inverted ? 'bg-blanc text-encre' : 'bg-jade text-[#06110D]'
            }`}
            style={{ width: size, height: size, fontSize: size * 0.42 }}
        >
            FK
        </div>
    );
}

interface WordmarkProps {
    compact?: boolean;
}

const Wordmark = ({ compact = false }: WordmarkProps) => {
    return (
        <a className="flex items-center gap-3.5 font-sans" href="/">
            <Monogram size={compact ? 32 : 44} />
            <div className="flex flex-col gap-0.5">
                <span
                    className={`font-semibold tracking-[-0.01em] text-blanc ${compact ? 'text-base' : 'text-xl'}`}
                >
                    Félix Korbendau
                </span>
                {!compact && (
                    <span className="font-mono text-[0.6875rem] tracking-widest text-gris-legende uppercase">
                        Développeur full-stack
                    </span>
                )}
            </div>
        </a>
    );
};

export default Wordmark;
