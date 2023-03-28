import {Button, Center, createStyles, Title} from "@mantine/core"
import {useScrollIntoView, useViewportSize} from "@mantine/hooks";
import {IconArrowRight} from "@tabler/icons-react";



const useStyles = createStyles(() => ({

    greetingContainer: {
        marginTop: "350px",
        marginBottom: "20px"
    },
    viewProjectsButton: {
        marginTop: "30px"
    }
}));

export default function Greeting() {

    const { width } = useViewportSize()
    const { classes } = useStyles();

    const greetingSize = width < 650 ? "xx-large" : "xxx-large";

    return (
            <div className={classes.greetingContainer}>
                <Title order={2} size={greetingSize} weight={800}>
                    Hi, I'm Tanner O'Connor.
                </Title>
                <Title order={2} size={greetingSize} weight={800}>
                    A Software Developer.
                </Title>
            </div>
    )
}