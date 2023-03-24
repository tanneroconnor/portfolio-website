import {Navbar, Group, Code, createStyles, NavLink, Avatar, Text} from '@mantine/core';
import {
    IconActivity,
    IconFingerprint,
    IconGauge,
} from '@tabler/icons-react';
import Logo from "./Logo.jsx";
import {useState} from "react";
import {useViewportSize} from "@mantine/hooks";

const data = [
    { icon: IconGauge, label: 'About Me' },
    { icon: IconFingerprint, label: 'Projects' },
    { icon: IconActivity, label: 'Contact' },
];

const useStyles = createStyles((theme) => ({
    navbar: {
        paddingBottom: 0,
        position: "fixed",
    },

    header: {
        paddingBottom: "1rem",
        color: theme.white,
        borderBottom: `0.1rem solid ${theme.colors.gray[3]}`,
    },

    links: {
        marginLeft: `calc(${theme.spacing.md} * -1)`,
        marginRight: `calc(${theme.spacing.md} * -1)`,
    },

    footer: {
        marginLeft: `calc(${theme.spacing.md} * -1)`,
        marginRight: `calc(${theme.spacing.md} * -1)`,
        borderTop: `0.1rem solid ${theme.colors.gray[3]}`,
        padding: "10px"
    },
}));

export default function MyNavbar() {

    const [active, setActive] = useState(0);

    const { classes } = useStyles();
    const { height } = useViewportSize()


    const navLinks = data.map((item, index) => (
        <NavLink
            key={item.label}
            active={index === active}
            label={item.label}
            description={item.description}
            rightSection={item.rightSection}
            icon={<item.icon size="1rem" stroke={1.5} />}
            onClick={() => setActive(index)}
        />
    ));


    return (
        <Navbar height={height} width={{ base: 275 }} p="md" className={classes.navbar}>
            <Navbar.Section className={classes.header}>
                <Group position="apart">
                    <Logo width="200px" />
                    {/*<Code sx={{ fontWeight: 700 }}>v2.0.0</Code>*/}
                </Group>
            </Navbar.Section>
            <Navbar.Section grow className={classes.links} >
                <div className={classes.linksInner}>
                    {navLinks}
                </div>
            </Navbar.Section>
            <Navbar.Section className={classes.footer}>
                <Group>
                    <Avatar
                        size="lg"
                        radius="xl"
                        src="https://avatars.githubusercontent.com/u/104280415?v=4"
                        alt="it's me, Tanner"
                    />
                    <div style={{ flex: 1 }}>
                        <Text size="sm" weight={500}>
                            Tanner O'Connor
                        </Text>

                        <Text color="dimmed" size="xs">
                            tanneroconnordev@gmail.com
                        </Text>
                    </div>
                </Group>
            </Navbar.Section>
        </Navbar>
    );
}