import {Button, createStyles, Title} from "@mantine/core";
import resume from "../../../assets/tanner-oconnor-resume.pdf"
import {
    IconArrowRight,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandSpotify,
    IconDownload,
    IconMail
} from "@tabler/icons-react";
import {links} from "../../links.js";

const useStyles = createStyles(() => ({

    contactContainer: {
    },
    title: {
        marginTop: "350px"
    },
    buttonsContainer: {
        display: "flex",
        flexFlow: "row wrap",
        gap: "40px",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
        marginBottom: "482px"
    },
    button: {

    }
}));

const iconData = {
    size: "1.4rem",
    stroke: 1.5
}

const data = [
    {
        text: "Email",
        url: links.email,
        icon: <IconMail size={iconData.size} stroke={iconData.stroke} />,
        color: "gray"
    },
    {
        text: "Github",
        url: links.github.profile,
        icon: <IconBrandGithub size={iconData.size} stroke={iconData.stroke} />,
        color: "dark"
    },
    {
        text: "LinkedIn",
        url: links.linkedin,
        icon: <IconBrandLinkedin size={iconData.size} stroke={iconData.stroke} />,
        color: "blue"
    },
    {
        text: "Spotify",
        url: links.spotify,
        icon: <IconBrandSpotify size={iconData.size} stroke={iconData.stroke} />,
        color: "green"
    },
]


export default function ContactSection() {

    const { classes } = useStyles();

    const buttons = data.map(link => {
        return (
            <div className={classes.button}>
                <Button
                    key={link.text}
                    target="_blank"
                    color={link.color}
                    leftIcon={link.icon}
                    rightIcon={<IconArrowRight size={iconData.size} stroke={iconData.stroke -.2} />}
                    component="a"
                    href={link.url}
                    size="md"

                >
                    {link.text}
                </Button>
            </div>
            )
    })

    return (
        <div className="contactContainer">
            <Title size="xxx-large" weight={800} className={classes.title}>
                Get in Touch
            </Title>
            <div className={classes.buttonsContainer}>
                {buttons}
                <Button
                    key="resume-button"
                    variant="outline"
                    target="_blank"
                    href={resume}
                    rightIcon={<IconDownload size={iconData.size} stroke={iconData.stroke -.2} />}
                    component="a"
                    size="md">
                    Resume
                </Button>
            </div>
        </div>

    )
}