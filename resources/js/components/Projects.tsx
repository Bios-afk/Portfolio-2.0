import React from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import Card from '@/components/ui/Card';
import { ArrowUpRight } from 'lucide-react';
import { Tag } from '@/components/ui/Tag';

const PROJECTS = [
    {
        id: 'test-1',
        title: 'test',
        desc: 'test',
        stack: ['test', 'test', 'test'],
        img: 'test',
    },
    {
        id: 'test-2',
        title: 'test',
        desc: 'test',
        stack: ['test', 'test', 'test'],
        img: 'test',
    },
    {
        id: 'test-3',
        title: 'test',
        desc: 'test',
        stack: ['test', 'test', 'test'],
        img: 'test',
    },
];
export default function Projects() {
    return (
        <section
            id="projects"
            className="section-grid bg-bg relative overflow-hidden border-t border-jade/13 px-[clamp(20px,5vw,64px)] py-16"
        >
            <div className="relative">
                <SectionLabel index={2}>Projects</SectionLabel>
                <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
                    {PROJECTS.map((p) => (
                        <Card key={p.id} hoverable padding="lg" id={p.id}>
                            <div className="-m-9 mb-4 h-40 overflow-hidden rounded-t-[14px]">
                                <img src={p.img} alt="photo de projet" />
                            </div>
                            <div className="flex items-center justify-between">
                                <h3 className="font-sans text-lg leading-[1.3] font-medium text-white">
                                    {p.title}
                                </h3>
                                <ArrowUpRight className="h-4.5 w-4.5 text-jade" />
                            </div>
                            <p className="mt-2.5 mb-4 font-sans text-sm leading-normal text-gray-text">
                                {p.desc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {p.stack.map((tech) => (
                                    <Tag key={tech}>{tech}</Tag>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
