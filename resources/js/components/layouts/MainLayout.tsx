import type { ReactNode } from 'react';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <div>
                <Header />
            </div>
            <main>{children}</main>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default MainLayout;
