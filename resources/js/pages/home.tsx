import { Head } from '@inertiajs/react';
import MainLayout from '@/components/layouts/MainLayout';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import Projects from '@/components/Projects';
import Stacks from '@/components/Stack';
import Form from '@/components/ContactForm';
import type { Project } from '@/types';

interface HomeProps {
    projects: Project[];
}

export default function Home({ projects }: HomeProps) {
    return (
        <MainLayout>
            <Head title="Home" />
            <Hero />
            <ServicesSection />
            <Projects projects={projects} />
            <Stacks />
            <Form />
        </MainLayout>
    );
}
