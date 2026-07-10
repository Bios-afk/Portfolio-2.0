import React from 'react';
import Wordmark from '@/components/ui/Brand/Wordmark';

const LINKS = [
    { href: '#services', label: 'Services' },
    { href: '#projets', label: 'Projets' },
    { href: '#stack', label: 'Stack' },
    { href: '#contact', label: 'Contact' },
];

const Header = () => {
    return (
        <header className="sticky top-0 z-20 bg-[rgba(8,10,9,0.85)] backdrop-blur-[10px] border-b border-border-subtle">
            <div className="flex items-center justify-between py-4.5 px-[clamp(20px,5vw,64px)]">
                <Wordmark compact />
                <nav className="hidden sm:flex items-center gap-7 font-mono text-[13px] tracking-widest text-gray-text">
                    {LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-inherit no-underline"
                        >
                            {l.label}
                        </a>
                    ))}
                    {/* <div>Me contacter</div> */}
                </nav>
            </div>
        </header>
    );
};

export default Header;
