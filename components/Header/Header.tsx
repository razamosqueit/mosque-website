'use client';

import {
    Anchor,
    Box,
    Burger,
    Collapse,
    Container,
    Drawer,
    Group,
    Menu,
    rem,
    ScrollArea,
    Stack,
    useMantineColorScheme,
} from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { AhleSunnahBlock } from '@/components/AhleSunnahBlock/AhleSunnahBlock';
import { DailyTimetable } from '@/components/DailyTimetable/DailyTimetable';

// eslint-disable-next-line max-len
const getMobileDrawer = (opened: boolean, close: () => void, toggleAboutUs: () => void, openedAboutUs: boolean) =>
    <Drawer
      opened={opened}
      onClose={close}
      size="50%"
      padding="md"
      title="Navigation"
      hiddenFrom="sm"
      zIndex={1000000}
    >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Stack gap={0} justify="flex-end" className={classes.mainLinks}>
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
                <Anchor className={classes.mainLink} onClick={toggleAboutUs}>About Us</Anchor>
                <Collapse in={openedAboutUs}>
                    <Anchor<'a'> className={classes.link} href="/about-us/history">
                        History
                    </Anchor>
                    <Anchor<'a'> className={classes.link} href="/about-us/imam-profile">
                        Imam Profile
                    </Anchor>
                    <Anchor<'a'> className={classes.link} href="/about-us/philosophy">
                        Philosophy
                    </Anchor>
                </Collapse>
            </Stack>
        </ScrollArea>
    </Drawer>;

export const Header = () => {
    const { colorScheme } = useMantineColorScheme();
    const [opened, { toggle, close }] = useDisclosure(false);
    const [openedAboutUs, { toggle: toggleAboutUs }] = useDisclosure(false);
    const logo = colorScheme === 'light' ? '/images/mosque_green.png' : '/images/mosque_white.png';

    return (
        <header className={classes.header}>
            <Container fluid className={classes.inner}>
                <Link href="/">
                    <Image src={logo} width={175} height={175} alt="logo" />
                </Link>
                <AhleSunnahBlock />
                <Box className={classes.links}>
                    <DailyTimetable />
                    <Group gap={0} justify="flex-end" className={classes.mainLinks} visibleFrom="sm">
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
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                </Box>
            </Container>
            {getMobileDrawer(opened, close, toggleAboutUs, openedAboutUs)}
        </header>
    );
};
