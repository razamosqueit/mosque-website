import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { DailyTimetable } from '@/components/DailyTimetable/DailyTimetable';

export function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header dailyTimetable={<DailyTimetable />} />
            {children}
            <Footer />
        </div>
    );
}
