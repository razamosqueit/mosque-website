import { Anchor, Box, Container, Group, Image, Menu, useMantineColorScheme } from '@mantine/core';
import Link from 'next/link';
import classes from './Header.module.css';
import { AhleSunnahBlock } from '@/components/AhleSunnahBlock/AhleSunnahBlock';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { DailyTimetable } from '@/components/DailyTimetable/DailyTimetable';

export const Header = () => {
    const { colorScheme } = useMantineColorScheme();
    const logo = colorScheme === 'light' ? '/mosque_green.png' : '/mosque_white.png';

    return (
        <header className={classes.header}>
            <Container fluid className={classes.inner}>
                <Image src={logo} w="175px" h="175px" />
                <AhleSunnahBlock />
                <Box className={classes.links}>
                    <DailyTimetable />
                    <Group gap={0} justify="flex-end" className={classes.mainLinks}>
                        <Anchor<'a'>
                          className={classes.mainLink}
                          href="/"
                        >
                            Home
                        </Anchor>
                        <Anchor<'a'>
                          className={classes.mainLink}
                          href="/"
                        >
                            Calendar
                        </Anchor>
                        <Anchor<'a'>
                          className={classes.mainLink}
                          href="/"
                        >
                            Madrassah
                        </Anchor>
                        <Menu trigger="click-hover" shadow="md" width={150}>
                            <Menu.Target>
                                <Anchor className={classes.mainLink}>About Us
                                </Anchor>
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
                    </Group>
                </Box>
            </Container>
        </header>
    );
};
