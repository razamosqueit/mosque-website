import { Container } from '@mantine/core';
import Image from 'next/image';
import classes from './Footer.module.css';

export function Footer() {
    const logo = '/images/mosque_white.png';
    return (
        <>
            <Container fluid className={classes.divider} />
            <Container fluid className={classes.root}>
                <Image src={logo} alt="logo" height={150} width={150} />
            </Container>
        </>
    );
}
