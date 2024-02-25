import { Container, Title, Text } from '@mantine/core';
import React from 'react';
import classes from './FindUsBlock.module.css';

export default function FindUsBlock() {
    return (
        <>
            <Container fluid className={classes.topText}>
                <Title>Find us</Title>
                <Text fw={700} size="xl">71 Blades Street, LA1 1TS</Text>
            </Container>
            <Container fluid className={classes.root}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2342.5928130568846!2d-2.8054655!3d54.045491399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b627beb0b19d1%3A0xf414d5f0e2ce7dad!2s71%20Blades%20St%2C%20Lancaster%20LA1%201TS!5e0!3m2!1sen!2suk!4v1652715255053!5m2!1sen!2suk"
                  width="100%"
                  height="450"
                  style={
                        {
                            border: 0,
                        }
                    }
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
            </Container>
        </>
    );
}
