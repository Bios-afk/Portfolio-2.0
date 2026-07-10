import React from 'react';
import Wordmark from '@/components/ui/Brand/Wordmark';
import { Button } from '@/components/ui/Button';

const LINKS = [
    { href: '#services', label: 'Services' },
    { href: '#projets', label: 'Projets' },
    { href: '#stack', label: 'Stack' },
    { href: '#contact', label: 'Contact' },
];

const Header = () => {
    return (
        <header className="border-border-alt sticky top-0 z-20 border-b bg-[rgba(8,10,9,0.85)] backdrop-blur-[10px]">
            <div className="flex items-center justify-between px-[clamp(20px,5vw,64px)] py-4.5">
                <Wordmark compact />
                <nav className="text-gray-text hidden items-center gap-7 font-mono text-[13px] tracking-widest sm:flex">
                    {LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-inherit no-underline"
                        >
                            {l.label}
                        </a>
                    ))}
                    <Button variant="secondary" size="sm" href="#contact">
                        Me contacter
                    </Button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
