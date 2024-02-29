import { Text } from '@mantine/core';
import classes from './DailyTimetable.module.css';
import { getMonthlyTimetable } from '@/lib/read-timetable';

export const DailyTimetable = async () => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' }).toLowerCase();
    const year = date.getFullYear();
    const timetable = await getMonthlyTimetable(month, year);
    const englishDate = date.toDateString();
    const dailyRecord = timetable![date.getDate()];
    const islamicDate = `${dailyRecord.IslamicDate} ${dailyRecord.IslamicMonth} ${year}`;
    return (
        <>
            <div>
                <Text className={classes.dateText}>{englishDate} | {islamicDate}</Text>
            </div>
            <table className={classes.styledTable}>
                <thead>
                <tr>
                    <th />
                    <th>Fajr</th>
                    <th>{dailyRecord.Day === 'Fri' ? 'Jummah' : 'Zuhr'}</th>
                    <th>Asr</th>
                    <th>Maghrib</th>
                    <th>Isha</th>
                </tr>
                </thead>
                <tbody>
                <tr className={classes.activeRow}>
                    <td>Begins</td>
                    <td>{dailyRecord.FajrBeg}</td>
                    <td>{dailyRecord.ZoharBeg}</td>
                    <td>{dailyRecord.AsarBeg}</td>
                    <td>{dailyRecord.MagribAzan}</td>
                    <td>{dailyRecord.IshaAzan}</td>
                </tr>
                <tr className={classes.activeRow}>
                    <td>Jamat</td>
                    <td>{dailyRecord.FajrAzan}</td>
                    <td>{dailyRecord.ZoharJumaAzan}</td>
                    <td>{dailyRecord.AsarAzan}</td>
                    <td>{dailyRecord.MagribAzan}</td>
                    <td>{dailyRecord.IshaAzan}</td>
                </tr>
                </tbody>
            </table>
        </>
    );
};
