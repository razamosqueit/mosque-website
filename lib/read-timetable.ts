import * as fs from 'fs';
import { unstable_cache } from 'next/cache';
import { MonthlyTimetable } from '@/lib/MonthyTimetable';
import { fallbackTimetable } from '@/lib/fallback-timetable';

const readfile = (month: string, year: number) => {
    const path = `${process.cwd()}/public/timetable/${month}-${year}.json`;
    if (fs.existsSync(path)) {
        return JSON.parse(fs.readFileSync(path, 'utf-8')) as MonthlyTimetable;
    }
    return fallbackTimetable;
};

export const getMonthlyTimetable = unstable_cache(
    async (month: string, year: number) => readfile(month, year),
    ['monthly-timetable'],
    {
        tags: ['monthly-timetable'],
        revalidate: 1800,
    }
);
