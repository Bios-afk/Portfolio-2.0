import { Head } from '@inertiajs/react';
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
    return (
        <MainLayout>
            <Head title="Page introuvable" />
            <section className="section-grid bg-bg relative flex flex-1 flex-col items-start justify-center px-[clamp(20px,5vw,64px)] font-sans text-white">
                <div className="relative max-w-160">
                    <span className="font-mono text-[clamp(4rem,14vw,11rem)] leading-none font-semibold tracking-[-0.02em] text-jade">
                        404
                    </span>
                    <h1 className="mt-5 mb-3 text-[clamp(2rem,3vw,2.75rem)] leading-[1.1] font-semibold text-white">
                        Cette page n'existe pas.
                    </h1>
                    <p className="mb-8 text-base leading-[1.6] text-gray-text">
                        Le lien est peut-être obsolète, ou l'adresse a été mal
                        saisie.
                    </p>
                    <Button variant="primary" href="/">
                        Retour à l'accueil
                    </Button>
                </div>
            </section>
        </MainLayout>
    );
}
