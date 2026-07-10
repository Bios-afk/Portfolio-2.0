import { Head } from '@inertiajs/react';
import MainLayout from '@/components/layouts/MainLayout';
import Hero from '@/components/Hero';

interface HomeProps {
    message: string;
}

export default function Home({ message }: HomeProps) {
    return (
        <MainLayout>
            <Head title="Home" />
            <Hero />
        </MainLayout>
    );
}
