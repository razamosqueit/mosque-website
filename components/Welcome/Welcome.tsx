import { Image, Container, Title, Text } from '@mantine/core';
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
                    <Text className={classes.textBlock}>
                        Through the teachings of the Holy Quran, and the hadith of Prophet Muhammed ﷺ our aim is to become better human beings first and foremost.
                    </Text>
                    <Text className={classes.textBlock}>
                        We abide by the laws of the Holy Quran, and live our lives in accordance to the etiquettes shown to us by Prophet Muhammed ﷺ.
                    </Text>
                    <Text className={classes.textBlock}>
                        We aim to be better Muslims & better people, to all people, regardless of their religious or other beliefs.
                    </Text>
                    <Text className={classes.textBlock}>
                        We practice the love of Allah, and his Messenger, Prophet Muhammad ﷺ.
                    </Text>

                </div>
            </div>
        </Container>
    );
}
