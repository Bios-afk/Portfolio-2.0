import React from 'react';
import monogram from '@/../images/monogram-jade.svg';

const Footer = () => {
    return (
        <footer className="section-grid relative flex flex-wrap items-center justify-between gap-3 overflow-hidden border-t border-jade/13 px-[clamp(20px,5vw,64px)] pt-7 pb-22 font-mono text-xs tracking-[0.04em]">
            <div className="relative flex items-center gap-2.5">
                <img src={monogram} alt="Monogramme FK" className="h-5 w-5" />
                <span>
                    © {new Date().getFullYear()} Félix Korbendau — Tous droits
                    réservés
                </span>
            </div>
            <div>
                {/* <a href=''>Mentions légales</a> */}
                <span>Charte de marque · v1</span>
            </div>
        </footer>
    );
};

export default Footer;
