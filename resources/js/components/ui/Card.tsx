import React from 'react';
import { type LucideIcon } from 'lucide-react';


interface CardProps {
    id: string;
    icon: LucideIcon;
    title: string;
    desc: string;
    padding?: 'sm' | 'md' | 'lg';
    hoverable?: boolean;
}

export default function Card({
    id,
    icon: Icon,
    title,
    desc,
    padding = 'md',
    hoverable = false,
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
            <Icon className="h-5.5 w-5.5 text-jade" />
            <h3 className="mt-4.5 mb-2 font-sans text-lg leading-[1.3] font-medium text-white">
                {title}
            </h3>
            <p className="text-gray-text font-sans text-sm leading-normal">
                {desc}
            </p>
        </div>
    );
}
