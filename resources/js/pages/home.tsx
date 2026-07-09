import { Head } from '@inertiajs/react';
import MainLayout from '@/components/layouts/MainLayout';

interface HomeProps {
    message: string;
}

export default function Home({ message }: HomeProps) {
    return (
        <MainLayout>
            <Head title="Home" />

            <div className="flex min-h-screen items-center justify-center">
                <p>{message}</p>
            </div>
        </MainLayout>
    );
}
