import React from 'react';


interface CardProps {
    id: string;
    padding?: 'sm' | 'md' | 'lg';
    hoverable?: boolean;
    children: React.ReactNode;
}

export default function Card({
    id,
    padding = 'md',
    hoverable = false,
    children,
}: CardProps) {
    const padCls = { sm: 'p-5', md: 'p-7', lg: 'p-9' }[padding];

    const hoverCls = hoverable
        ? 'hover:border-border-strong transition-colors duration-200'
        : '';

    return (
        <div
            id={id}
            className={`bg-card border border-border-subtle rounded-[14px] overflow-hidden ${padCls} ${hoverCls}`}
        >
            {children}
        </div>
    );
}
