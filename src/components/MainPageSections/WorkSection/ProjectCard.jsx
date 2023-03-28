import { Card, Image, Text, Badge } from '@mantine/core';

export default function ProjectCard(props) {

    const badges = props.technologies.map((technology, index)=> {
        return (
            <Badge key={index} size="lg" style={{margin: "10px"}}>
                {technology}
            </Badge>
        )
    })

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={props.src}
                    height={"300px"}
                    alt={props.alt}
                />
            </Card.Section>

            <Text size="lg" weight={700} style={{margin: "10px"}}>{props.title}</Text>

            <Text size="sm" color="dimmed" style={{margin: "10px"}}>
                {props.description}
            </Text>
            {badges}
        </Card>
    );
}