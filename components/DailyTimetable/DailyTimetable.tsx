import { Text } from '@mantine/core';
import classes from './DailyTimetable.module.css';

export const DailyTimetable = () => {
    const englishDate = '30 September 2024';
    const islamicDate = '30 Jamada Al-Awwal 2024';
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
                    <th>Jummah</th>
                    <th>Asr</th>
                    <th>Maghrib</th>
                    <th>Isha</th>
                </tr>
                </thead>
                <tbody>
                <tr className={classes.activeRow}>
                    <td>Begins</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                </tr>
                <tr className={classes.activeRow}>
                    <td>Jamat</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                </tr>
                </tbody>
            </table>
        </>
    );
};
