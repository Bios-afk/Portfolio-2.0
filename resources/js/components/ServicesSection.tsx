import React from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import Card from '@/components/ui/Card';
import { Code, LayoutDashboard, Users, type LucideIcon } from 'lucide-react';

interface Service {
    id: string;
    icon: LucideIcon;
    title: string;
    desc: string;
}

const SERVICES: Service[] = [
    {
        id: 'web-dev',
        icon: Code,
        title: "Développement d'applications web sur mesure",
        desc: "Conception et développement d'applications complètes avec Laravel et React, adaptées à vos process métier.",
    },
    {
        id: 'websites',
        icon: LayoutDashboard,
        title: 'Admin panel / back-office',
        desc: "Interfaces d'administration claires pour piloter vos données, vos équipes et votre activité au quotidien.",
    },
    {
        id: 'client-portal',
        icon: Users,
        title: 'Portail client / espace extranet',
        desc: 'Espaces sécurisés où vos clients suivent leurs commandes, documents et échanges en autonomie.',
    },
];
export default function ServicesSection() {
    return (
        <section
            id="services"
            className="relative overflow-hidden border-t border-jade/13 bg-bg-alt px-[clamp(20px,5vw,64px)] py-16"
        >
            <div className="relative">
                <SectionLabel index={1}>Services</SectionLabel>
                <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
                    {SERVICES.map((s) => {
                        const ServiceIcon = s.icon;
                        return (
                            <Card key={s.id} id={s.id} hoverable padding="lg">
                                <div>
                                    <ServiceIcon className="h-5.5 w-5.5 text-jade" />
                                    <h3 className="mt-4.5 mb-2 font-sans text-lg leading-[1.3] font-medium text-white">
                                        {s.title}
                                    </h3>
                                </div>
                                <p className="font-sans text-sm leading-normal text-gray-text">
                                    {s.desc}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
