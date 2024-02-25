import { Text, Title } from '@mantine/core';
import classes from './AhleSunnahBlock.module.css';

export const AhleSunnahBlock = () => (
        <div>
            <Text className={classes.root} fw={700}>Proudly Ahlus Sunnah Wal Jammah</Text>
            <Title className={classes.root} order={1} fw={700}>اهل السنة و الجماعة‎</Title>
        </div>
    );
