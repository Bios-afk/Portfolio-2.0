import React from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/Button';
import { ContactRow } from '@/components/ui/ContactRow';
import { Mail, Globe, Link2, Code2, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/Input';

export default function ContactForm() {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        name: '',
        email: '',
        message: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post('/contact', {
            onSuccess: () => reset(),
        });
    }

    return (
        <section
            id="contact"
            className="section-grid bg-bg relative overflow-hidden border-t border-jade/13 px-[clamp(20px,5vw,64px)] pt-16 pb-24"
        >
            <div className="relative">
                <SectionLabel index={4}>Contact</SectionLabel>
                <div className="mt-7 grid grid-cols-[minmax(280px,1fr)_minmax(280px,1fr)] gap-12 max-sm:grid-cols-1 max-sm:gap-8">
                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="flex max-w-105 flex-col gap-5.5"
                    >
                        <Input
                            label="Nom"
                            name="name"
                            placeholder="Jean Dupont"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            error={errors.name}
                        />
                        <Input
                            label="email"
                            name="email"
                            type="email"
                            placeholder="example@example.com"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            error={errors.email}
                        />
                        <Input
                            label="message"
                            name="message"
                            placeholder="Décrivez votre projet..."
                            multiline
                            value={data.message}
                            onChange={(e) => setData('message', e.target.value)}
                            error={errors.message}
                        />
                        <div className="flex flex-wrap items-center gap-4">
                            <Button
                                type="submit"
                                variant="primary"
                                loading={processing === true}
                            >
                                {processing === true
                                    ? 'Envoi en cours…'
                                    : 'Envoyer'}
                            </Button>
                            <span
                                role="status"
                                aria-live="polite"
                                className={`inline-flex items-center gap-2 font-mono text-xs text-jade-clair transition-opacity duration-200 ${
                                    recentlySuccessful
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                }`}
                            >
                                <span className="relative flex size-2 items-center justify-center">
                                    <span className="absolute inline-flex h-2 w-2 rounded-full bg-jade" />
                                </span>
                                Message envoyé
                            </span>
                        </div>
                    </form>
                    <div className="flex flex-col gap-4">
                        <span className="font-mono text-xs tracking-[0.08em] text-gray-caption uppercase">
                            Coordonnées
                        </span>
                        <ContactRow
                            icon={Mail}
                            href="mailto:felix.kodenet@gmail.com"
                        >
                            felix.kodenet@gmail.com
                        </ContactRow>
                        <ContactRow
                            icon={Globe}
                            href="https://felixkorbendau.fr"
                        >
                            felixkorbendau.fr
                        </ContactRow>
                        <ContactRow icon={Link2} href="https://www.linkedin.com/in/felix-korbendau-713a63217/">
                            linkedin.com/in/felix-korbendau
                        </ContactRow>
                        <ContactRow
                            icon={Code2}
                            href="https://github.com/Bios-afk"
                        >
                            github.com/Bios-afk
                        </ContactRow>
                        <ContactRow icon={MapPin}>Bordeaux, France</ContactRow>
                    </div>
                </div>
            </div>
        </section>
    );
}
