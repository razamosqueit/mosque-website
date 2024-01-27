import { Table, Text } from '@mantine/core';
import classes from './DailyTimetable.module.css';

export const DailyTimetable = () => {
    const englishDate = '30 September 2024';
    const islamicDate = '30 Jamada Al-Awwal 2024';
    return (
        <>
            <div>
                <Text className={classes.dateText}>{englishDate} | {islamicDate}</Text>
            </div>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th />
                        <Table.Th>Fajr</Table.Th>
                        <Table.Th>Zuhr</Table.Th>
                        <Table.Th>Asr</Table.Th>
                        <Table.Th>Maghrib</Table.Th>
                        <Table.Th>Isha</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    <Table.Tr>
                        <Table.Td>Begins</Table.Td>
                        <Table.Td>8</Table.Td>
                        <Table.Td>9</Table.Td>
                        <Table.Td>10</Table.Td>
                        <Table.Td>11</Table.Td>
                        <Table.Td>12</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Jamat</Table.Td>
                        <Table.Td>8</Table.Td>
                        <Table.Td>9</Table.Td>
                        <Table.Td>10</Table.Td>
                        <Table.Td>11</Table.Td>
                        <Table.Td>12</Table.Td>
                    </Table.Tr>
                </Table.Tbody>
            </Table>
        </>
    );
};
