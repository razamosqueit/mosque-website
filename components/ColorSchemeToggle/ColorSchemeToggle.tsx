import { Button, useMantineColorScheme } from '@mantine/core';
import { useState } from 'react';
import classes from './ColourSchemeToggle.module.css';

export function ColorSchemeToggle() {
    const { setColorScheme, colorScheme } = useMantineColorScheme();
    const [themeText, setThemeText] = useState('light mode');
    const changeTheme = () => {
        if (colorScheme === 'dark') {
            setColorScheme('light');
            setThemeText('dark mode');
        } else {
            setColorScheme('dark');
            setThemeText('light mode');
        }
    };
    return (
        <Button
          className={classes.root}
          variant="outline"
          color="green"
          onClick={() => changeTheme()}
        >{themeText}
        </Button>
    );
}
