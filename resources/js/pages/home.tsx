import { Head } from '@inertiajs/react';
import MainLayout from '@/components/layouts/MainLayout';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import Projects from '@/components/Projects';

interface HomeProps {
    message: string;
}

export default function Home({ message }: HomeProps) {
    return (
        <MainLayout>
            <Head title="Home" />
            <Hero />
            <ServicesSection />
            <Projects />
        </MainLayout>
    );
}
