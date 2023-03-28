import { useState } from 'react';
import {
    createStyles,
    Header,
    Container,
    Group,
    Burger,
    Paper,
    Transition,
    rem, Button,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Logo from "../logos/Logo.jsx";
import { IconDownload } from "@tabler/icons-react";
import resume from "../../assets/tanner-oconnor-resume.pdf";

export const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
    dropdown: {
        position: 'absolute',
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        width: "vw"
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },

    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },

        [theme.fn.smallerThan('sm')]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },
}));

const data = [
    { label: 'Work', link: "work" },
    { label: 'About', link: "about" },
    { label: 'Contact', link: "contact" },
];

export function PortfolioHeader(props) {
    const [opened, { toggle, close }] = useDisclosure(false);
    const [active, setActive] = useState(props.activePage);
    const { classes, cx } = useStyles();

    const items = data.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={cx(classes.link, { [classes.linkActive]: active === link.link })}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
                props.handlePageChange(link.link)
                close();
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <Header height="80px" fixed={true}>
            <Container className={classes.header}>
                <Logo width="200px" />
                <Group spacing={5} className={classes.links}>
                    {items}
                    <Button
                        key="resume"
                        target="_blank"
                        component="a"
                        variant="filled"
                        href={resume}
                        leftIcon={<IconDownload size="1rem"/>}
                        size="xs">
                        Resume
                    </Button>
                </Group>

                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            {items}
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>

    );
}