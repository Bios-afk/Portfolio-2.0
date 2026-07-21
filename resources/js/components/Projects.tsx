import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import Card from '@/components/ui/Card';
import SectionLabel from '@/components/ui/SectionLabel';
import { Tag } from '@/components/ui/Tag';
import type { Project } from '@/types';

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
    return (
        <section
            id="projects"
            className="section-grid bg-bg relative overflow-hidden border-t border-jade/13 px-[clamp(20px,5vw,64px)] py-16"
        >
            <div className="relative">
                <SectionLabel index={2}>Projects</SectionLabel>
                <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            hoverable
                            padding="lg"
                            id={project.slug}
                        >
                            <div>
                                <div className="-m-9 mb-4 h-40 overflow-hidden rounded-t-[14px]">
                                    <img
                                        src={project.image_url ?? undefined}
                                        alt={`Aperçu du projet ${project.title}`}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <h3 className="font-sans text-lg leading-[1.3] font-medium text-white">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight className="h-4.5 w-4.5 text-jade" />
                                </div>
                                <p className="mt-2.5 mb-4 font-sans text-sm leading-normal text-gray-text">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.stacks.map((stack) => (
                                    <Tag key={stack.id}>{stack.name}</Tag>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
