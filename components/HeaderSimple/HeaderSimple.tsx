import { Button, Container, Image, Menu, Text, useMantineColorScheme } from '@mantine/core';
import Link from 'next/link';
import classes from './HeaderSimple.module.css';
import { AhleSunnahBlock } from '@/components/AhleSunnahBlock/AhleSunnahBlock';

export const HeaderSimple = () => {
    const { colorScheme } = useMantineColorScheme();

    const logo = colorScheme === 'light' ? '/mosque_green.png' : '/mosque_white.png';
    return (
        <header className={classes.header}>
            <Container fluid className={classes.inner}>
                <Image src={logo} w="150px" h="150px" />
                <AhleSunnahBlock />
                <Button.Group>
                    <Button styles={{ root: { border: 'none' } }} variant="default" component={Link} href="/">Home</Button>
                    <Button styles={{ root: { border: 'none' } }} variant="default" component={Link} href="/">Madrassah</Button>
                    <Button styles={{ root: { border: 'none' } }} variant="default" component={Link} href="/">Calendar</Button>
                    <Menu trigger="click-hover" shadow="md" width={200}>
                        <Menu.Target>
                            <Button styles={{ root: { border: 'none' } }} variant="default">About Us
                            </Button>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item>
                                <Link className={classes.link} href="/about-us/history">
                                    History
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link className={classes.link} href="/about-us/imam-profile">
                                    Imam Profile
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link className={classes.link} href="/about-us/philosophy">
                                    Philosophy
                                </Link>
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Button.Group>
            </Container>
        </header>
    );
};
