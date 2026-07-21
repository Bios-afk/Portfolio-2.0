import { Head } from '@inertiajs/react';
import MainLayout from '@/components/layouts/MainLayout';
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
    {
        title: 'RESPONSABLE DU TRAITEMENT',
        body: [
            'Félix Korbendau (Kodenet), 2 Chemin de Darrigaut, 33670 Sadirac, France — contact@felixkorbendau.fr',
        ],
    },
    {
        title: 'DONNÉES COLLECTÉES',
        body: [
            'Ce site collecte des données personnelles uniquement via le formulaire de contact : nom, adresse email, contenu du message.',
            "Aucun compte utilisateur n'est créé, aucun suivi publicitaire n'est réalisé.",
        ],
    },
    {
        title: 'FINALITÉS DU TRAITEMENT',
        body: [
            'Ces données sont utilisées exclusivement pour répondre à votre demande de contact.',
        ],
    },
    {
        title: 'BASE LÉGALE',
        body: [
            "Le traitement repose sur l'intérêt légitime de l'éditeur à répondre aux demandes qui lui sont adressées, la démarche étant à l'initiative de la personne concernée (soumission volontaire du formulaire).",
        ],
    },
    {
        title: 'DURÉE DE CONSERVATION',
        body: [
            "Les données transmises via le formulaire de contact sont conservées le temps nécessaire au traitement de la demande, puis supprimées, sauf si un échange commercial s'engage, auquel cas elles sont conservées 3 ans à compter du dernier contact, conformément aux recommandations de la CNIL.",
        ],
    },
    {
        title: "D'ESTINATAIRES ET SOUS-TRAITANTS",
        body: [
            'Les données peuvent être transmises aux prestataires techniques suivants, dans la stricte mesure nécessaire au fonctionnement du site :',
            'Resend (traitement et envoi des emails générés par le formulaire de contact) — société basée aux États-Unis, transfert encadré par des clauses contractuelles types conformes au RGPD.',
            "Laravel Cloud / AWS (hébergement de l'application et de la base de données) — infrastructure localisée dans l'Union européenne / Royaume-Uni, ce dernier bénéficiant d'une décision d'adéquation de la Commission européenne.",
        ],
    },
    {
        title: 'COOKIES',
        body: [
            "Le site utilise uniquement un cookie technique de session, strictement nécessaire à son fonctionnement (protection contre les attaques CSRF). Aucun cookie de mesure d'audience ou publicitaire n'est déposé à ce jour. Si un outil de mesure d'audience était ajouté ultérieurement, un bandeau de consentement conforme au RGPD serait mis en place au préalable.",
        ],
    },
    {
        title: 'VOS DROITS',
        body: [
            "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition concernant vos données personnelles, ainsi que d'un droit à la portabilité. Vous pouvez exercer ces droits en écrivant à contact@felixkorbendau.fr.",
            "Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr) si vous estimez que le traitement de vos données n'est pas conforme à la réglementation.",
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
