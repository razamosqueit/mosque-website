import { Image, Container } from '@mantine/core';
import classes from './Footer.module.css';

export function Footer() {
    const logo = '/mosque_white.png';
    return (
        <>
        <Container fluid className={classes.divider} />
        <Container fluid className={classes.root}>
                <Image src={logo} className={classes.image} />
        </Container>
        </>
    );
}
