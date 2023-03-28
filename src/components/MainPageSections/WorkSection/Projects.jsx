import React from 'react'
import ProjectCard from "./ProjectCard.jsx";
import {Button, createStyles, Grid, Title} from "@mantine/core";
import { useScrollIntoView } from '@mantine/hooks';
import {IconArrowRight} from "@tabler/icons-react";
import shredShedMockup from "../../../assets/the-shred-shed-mockup.png"
import photosClone from "../../../assets/photos-clone-mockup.png"
import {links} from "../../links.js";


const useStyles = createStyles(() => ({
    projectsSectionContainer: {
        marginTop: "375px",
        textAlign: "center"
    },
    projectCardContainer: {
        marginTop: "30px",
        marginBottom: "500px",
        display: "flex",
        justifyContent: "space-evenly"
    }
}));

const data = [
    {
        link: links.github.photosClone,
        src: photosClone,
        alt: "Google photos clone application",
        title: "Google Photos Clone",
        description: "A full-stack CRUD Web Application",
        technologies: ["Java", "Spring", "React.js", "SQL", "Maven", "Mantine", "Git"]
    },
    {
        link: links.github.theShredShed,
        src: shredShedMockup,
        alt: "shred-shed-mockup",
        title: "The Shred Shed",
        description: "A Music Theory Practicing Web Application",
        technologies: ["Java", "Spring", "React.js", "Maven", "Mantine", "Git"]
    },
];

const projectCards = data.map((project, index) => {
    return (
        <Grid.Col key={index} sm={12} md={4}>
            <ProjectCard
                link={project.link}
                title={project.title}
                src={project.src}
                alt={project.alt}
                description={project.description}
                technologies={project.technologies}
            />
        </Grid.Col>
    )
})

export default function Projects() {

    const { scrollIntoView, targetRef } = useScrollIntoView({offset: -100,});
    const { classes } = useStyles()

    return (
        <>
            <Button
                variant="filled"
                size="lg"
                rightIcon={<IconArrowRight />}
                onClick={() =>
                    scrollIntoView({
                        alignment: "start"
                    })}>
                View Projects
            </Button>

            <div className={classes.projectsSectionContainer}>
                <Title order={3} size="xxx-large" weight={800} style={{marginBottom: "80px"}}>
                    Projects
                </Title>
                <Grid
                    style={{margin: "10px 40px"}}
                    ref={targetRef}
                    className={classes.projectCardContainer}
                    gutter={30} grow>
                    {projectCards}
                </Grid>
            </div>
        </>
    );
}