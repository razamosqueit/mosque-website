import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

export function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
