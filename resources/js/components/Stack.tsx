import React from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import { Tag } from '@/components/ui/Tag';

const STACK = [
    'React',
    'Laravel',
    'TypeScript',
    'TailwindCSS',
    'PHP',
    'MySQL',
    'Docker',
    'Git',
];

export default function Stacks() {
    return (
        <section
            id="stack"
            className="relative overflow-hidden border-t border-jade/13 bg-bg-alt px-[clamp(20px,5vw,64px)] py-16"
        >
            <div className="relative">
                <SectionLabel index={3}>Stack</SectionLabel>
                <div className="mt-6 flex flex-wrap gap-2.5">
                    {STACK.map((s) => (
                        <Tag
                            key={s}
                            tone={
                                ['Laravel', 'React', 'PHP'].includes(s)
                                    ? 'accent'
                                    : 'neutral'
                            }
                        >
                            {s}
                        </Tag>
                    ))}
                </div>
            </div>
        </section>
    );
}
