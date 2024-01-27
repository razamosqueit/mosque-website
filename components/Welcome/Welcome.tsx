import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './Welcome.module.css';

export function Welcome() {
    const logo = '/mosque_white.png';
    return (
        <Container fluid className={classes.root}>
            <div className={classes.inner}>
                <Image src={logo} className={classes.image} />
                <div className={classes.content}>
                    <Title className={classes.title}>
                        Our Goal Is To Serve Humanity
                    </Title>
                    <Text >
                        Through the teachings of the Holy Quran, and the hadith of Prophet Muhammed ﷺ our aim is to become better human beings first and foremost.
                    </Text>
                </div>
            </div>
        </Container>
    );
}
