import ProjectCard from "./ProjectCard.jsx";
import {createStyles, Text, Title} from "@mantine/core";



const data = [
    {
        link: "https://github.com/tanneroconnor/photos-clone",
        src: "",
        alt: "Google photos clone application",
        title: "Google Photos Clone",
        description: "A full-stack CRUD Web Application",
        technologies: ["Java", "Spring", "React.js", "SQL", "Maven", "Mantine", "Git"]
    },
    {
        link: "https://github.com/tanneroconnor/the-shred-shed",
        src: "",
        alt: "",
        title: "The Shred Shed",
        description: "A Music Theory Practicing Web Application",
        technologies: ["Java", "Spring", "React.js", "Maven", "Mantine", "Git"]
    },
];

const useStyles = createStyles(() => ({
    projectsSectionContainer: {
        marginTop: "50px",
        textAlign: "center"
    },
    projectCardContainer: {
        marginTop: "30px",
        display: "flex",
        justifyContent: "space-evenly"
    }
}));

const projectCards = data.map(project => {
    return (
        <ProjectCard
            link={project.link}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
        />
    )
})

export default function Projects() {

    const { classes } = useStyles()
    return (
        <div className={classes.projectsSectionContainer}>
            <Title order={3} size="xx-large" weight={800}>
                Projects
            </Title>
            <div className={classes.projectCardContainer}>
                {projectCards}
            </div>
        </div>
    );
}