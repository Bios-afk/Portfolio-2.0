import React from 'react';

interface SectionLabelProps {
    children: React.ReactNode;
    index?: number;
}

export default function SectionLabel({ index, children }: SectionLabelProps) {
    return (
        <div className="flex items-center gap-2.5 font-mono text-xs font-medium tracking-[0.14em] text-gray-caption uppercase">
            <span className="h-2 w-2 animate-pulse rounded-full bg-jade" />
            {index != null && (
                <span className="text-jade">
                    {String(index).padStart(2, '0')}
                </span>
            )}
            <span className="text-border-strong">·</span>
            <span>{children}</span>
        </div>
    );
}
