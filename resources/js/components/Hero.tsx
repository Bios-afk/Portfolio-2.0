import { Tag } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';

export default function Hero() {
    return (
        <section className="section-grid relative overflow-hidden px-[clamp(20px,5vw,64px)] pt-[clamp(48px,10vw,120px)] pb-20">
            <div className="relative max-w-225">
                <div className="mb-5 inline-flex items-center gap-2 font-mono text-xs text-gris-texte">
                    <span className="relative flex size-3 justify-center items-center">
                        <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-jade opacity-75"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-jade"></span>
                    </span>
                    Disponible
                </div>
                <h1 className="mt-7 mb-5 font-sans text-[clamp(2.5rem,4vw,4.5rem)] leading-[1.05] font-semibold tracking-[-0.01em] text-white">
                    Vos idées en produits
                    <br />
                    digitaux solides et évolutifs.
                </h1>
                <p className="mb-8 max-w-140 font-sans text-lg leading-[1.6] text-gris-texte">
                    Développeur web full-stack basé à Bordeaux — applications
                    sur mesure et sites vitrines, construits avec PHP / Laravel
                    / React.
                </p>
                <div className="mb-8 flex flex-wrap gap-2.5">
                    <Tag>PHP</Tag>
                    <Tag tone="accent">Laravel</Tag>
                    <Tag tone="accent">React</Tag>
                </div>
                <div className="flex flex-wrap gap-3.5">
                    <Button variant="primary" href="#contact">
                        Démarrer un projet
                    </Button>
                    <Button variant="ghost" href="#services">
                        Voir les services
                    </Button>
                </div>
            </div>
        </section>
    );
}
