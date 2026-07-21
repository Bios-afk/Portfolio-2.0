import { Head } from '@inertiajs/react';
import Form from '@/components/ContactForm';
import Hero from '@/components/Hero';
import MainLayout from '@/components/layouts/MainLayout';
import Projects from '@/components/Projects';
import ServicesSection from '@/components/ServicesSection';
import Stacks from '@/components/Stack';
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
