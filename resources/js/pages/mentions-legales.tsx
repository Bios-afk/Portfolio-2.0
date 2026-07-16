import MainLayout from '@/components/layouts/MainLayout';
import { Head } from '@inertiajs/react';
import SectionLabel from '@/components/ui/SectionLabel';

const SECTIONS = [
    {
        title: 'ÉDITEUR DU SITE',
        body: [
            'Le site felixkorbendau.fr est édité par :',
            'Félix Korbendau, exerçant sous le nom commercial Kodenet Entreprise Individuelle (EI) SIRET : 98932615200018 Code APE : 6201Z',
            'Programmation informatique Siège social : 2 Chemin de Darrigaut, 33670 Sadirac, France TVA non applicable',
            'article 293 B du Code général des impôts Email : felix.kodenet@gmail.com',
            'Directeur de la publication : Félix Korbendau.',
        ],
    },
    {
        title: 'HÉBERGEMENT',
        body: [
            'Hébergement applicatif : Laravel Cloud, service opéré par Laravel Holdings Inc. Infrastructure sous-jacente : Amazon Web Services (AWS). Informations complètes : https://cloud.laravel.com/legal/terms',
            'Nom de domaine enregistré auprès de : OVH SAS, 2 rue Kellermann, 59100 Roubaix, France.',
        ],
    },
    {
        title: 'PROPRIÉTÉ INTELLECTUELLE',
        body: [
            "L'ensemble des contenus présents sur ce site (textes, visuels, charte graphique, code source) est la propriété de Félix Korbendau, sauf mention contraire.",
            'Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation préalable est interdite.',
        ],
    },
    {
        title: 'RESPONSABILITÉ',
        body: [
            "L'éditeur s'efforce d'assurer l'exactitude des informations diffusées sur ce site, sans garantie d'exhaustivité. L'éditeur ne saurait être tenu responsable d'éventuelles interruptions de service ou d'erreurs techniques indépendantes de sa volonté.",
        ],
    },
];
export default function MentionLegales() {
    return (
        <MainLayout>
            <Head title="Mentions légales" />
            <div className="section-grid relative overflow-hidden px-[clamp(20px,5vw,64px)]">
                <div className="bg-bg relative max-w-180 px-[clamp(20px,5vw,64px)] py-16 pb-24">
                    <h1 className="mb-3 text-[clamp(2rem,3vw,2.75rem)] leading-[1.1] font-semibold text-white">
                        Mentions légales &amp; politique de confidentialité
                    </h1>
                    <p className="mb-12 font-mono text-sm text-gray-caption">
                        Dernière mise à jour · {new Date().getFullYear()}
                    </p>
                    {SECTIONS.map((section, i) => (
                        <section key={section.title} className="mb-12">
                            <SectionLabel index={i + 1}>
                                {section.title}
                            </SectionLabel>
                            <div className="mt-4 flex flex-col gap-3.5">
                                {section.body.map((line, j) => (
                                    <p
                                        key={j}
                                        className="m-0 text-base leading-[1.6] text-gray-text"
                                    >
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </section>
                    ))}
                    <a
                        href="/"
                        className="text-jade-light text-[15px] font-medium hover:text-white"
                    >
                        ← Retour à l'accueil
                    </a>
                </div>
            </div>
        </MainLayout>
    );
}
