import {createStyles, Title, Text, Grid} from "@mantine/core";
import aboutPhoto from "../../../assets/about-me-photo.png"

const useStyles = createStyles(() => ({

    aboutTextContainer: {
        textAlign: "left",
        padding: "0 20px",
    },
    aboutTitle: {
        marginBottom: "20px",
        textAlign: "center"
    },
    aboutImage: {
        maxWidth: "65%"
    },
    paragraphText: {
        marginBottom: "20px",
    },
    list: {
        textAlign: "left",
    }

}));

const data = {
    titleText: "Tanner O'Connor",
    openingText: "Over a year ago, I made the exciting decision to switch careers and pursue my passion " +
        "for software development. Since then, I've taken a disciplined approach to my learning journey and used a " +
        "variety of resources to expand my knowledge. In addition to my B.A. in Mathematics, I’ve taken courses on: " +
        "Object Oriented Programming, Java, Data Structures, the Spring Framework, Web Development, React, SQL, Git, " +
        "and Python. I've also read books, consulted documentation, and actively sought out opportunities to practice " +
        "my skills and deepen my understanding. Thanks to this proactive approach, " +
        "I've been able to create self-directed, full-stack projects that I'm proud of.",

    hobbiesTitle: "When I'm not programming, you can find me: ",
    listOfHobbies:
        <ul>
            <li>Spending quality time with quality people</li>
            <li>Composing, making music, and playing guitar</li>
            <li>Honing the art of brewing coffee</li>
            <li>Playing the bots on chess.com</li>
            <li>Most recently, learning how to properly swing a golf club</li>
        </ul>
};

export default function AboutSection() {

    const { classes } = useStyles();

    return (
        <Grid>
            <Grid.Col  md={6} sm={12}>
                <img className={classes.aboutImage} src={aboutPhoto} alt="Trip to Scotland" />
            </Grid.Col>
            <Grid.Col md={6} sm={12}>
                <div className={classes.aboutTextContainer}>
                    <Title size="xxx-large" weight={800} className={classes.aboutTitle}>
                        {data.titleText}
                    </Title>
                    <Text size="lg" className={classes.paragraphText}>
                        {data.openingText}
                    </Text>
                    <Text size="lg" className={classes.list}>
                        {data.hobbiesTitle}
                    </Text>
                    <Text size="lg" className={classes.list}>
                        {data.listOfHobbies}
                    </Text>
                </div>
            </Grid.Col>
        </Grid>

    )
}