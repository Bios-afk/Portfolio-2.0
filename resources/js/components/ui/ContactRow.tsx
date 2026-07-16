import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface ContactRowProps {
    icon: LucideIcon;
    children: React.ReactNode;
    href?: string;
}

/** Single contact line — icon + label, used in footer / signature / contact card. */
export function ContactRow({ icon, children, href }: ContactRowProps) {
    const Icon = icon;
    const content = (
        <span className="flex items-center gap-2.5 font-mono text-sm text-gray-text">
            <Icon className="h-4 w-4 text-jade" />
            {children}
        </span>
    );
    if (!href) return content;
    return (
        <a
            href={href}
            className="hover:text-jade-clair text-inherit no-underline transition-colors duration-120"
        >
            {content}
        </a>
    );
}
