import { createStyles, Container, Group, ActionIcon, rem } from '@mantine/core';
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandSpotify,
    IconMail
} from '@tabler/icons-react';
import Logo from "../logos/Logo.jsx"
import {links} from "../links.js";

const useStyles = createStyles((theme) => ({
    footer: {
        backgroundColor: "white",
        marginTop: rem(120),
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
}));

const iconData = {
    size: "1.25rem",
    stroke: 1.4
}

const data = [
    {
        icon: <IconMail size={iconData.size} stroke={iconData.stroke}/>,
        href: links.email
    },
    {
        icon: <IconBrandGithub size={iconData.size} stroke={iconData.stroke}/>,
        href: links.github.profile
    },
    {
        icon: <IconBrandLinkedin size={iconData.size} stroke={iconData.stroke}/>,
        href: links.linkedin
    },
    {
        icon: <IconBrandSpotify size={iconData.size} stroke={iconData.stroke}/>,
        href: links.spotify
    }
]



export default function FooterSection() {

    const { classes } = useStyles();

    const icons = data.map((item, index )=> {
        return (
            <ActionIcon
                key={index}
                component="a"
                target="_blank"
                href={item.href}
                size="xl">
                {item.icon}
            </ActionIcon>
    )
    })

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Logo width="200px" />
                <Group spacing={0} className={classes.links} position="right" noWrap>
                    {icons}
                </Group>
            </Container>
        </div>
    );
}
