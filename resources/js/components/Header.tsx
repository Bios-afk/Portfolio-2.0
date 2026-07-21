import React from 'react';
import Wordmark from '@/components/ui/Brand/Wordmark';
import { Button } from '@/components/ui/Button';

const LINKS = [
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#stack', label: 'Stack' },
];

const Header = () => {
    function scrollToSection(href: string) {
        return (
            event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
        ) => {
            event.preventDefault();
            document
                .getElementById(href.replace('#', ''))
                ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        };
    }

    return (
        <header className="sticky top-0 z-20 border-b border-border-alt bg-[rgba(8,10,9,0.85)] backdrop-blur-[10px]">
            <div className="flex items-center justify-between px-[clamp(20px,5vw,64px)] py-4.5">
                <Wordmark compact />
                <nav className="hidden items-center gap-7 font-mono text-[13px] tracking-widest text-gray-text sm:flex">
                    {LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-inherit no-underline transition-colors duration-120 hover:text-white"
                            onClick={scrollToSection(l.href)}
                        >
                            {l.label}
                        </a>
                    ))}
                    <Button
                        variant="secondary"
                        size="sm"
                        href="#contact"
                        onClick={scrollToSection('#contact')}
                    >
                        Me contacter
                    </Button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
