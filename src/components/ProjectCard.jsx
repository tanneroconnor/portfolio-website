import { Card, Image, Text, Badge, Group } from '@mantine/core';

export default function ProjectCard(props) {

    const badges = props.technologies.map(technology => {
        return (
            <Badge size="lg" style={{margin: "10px"}}>
                {technology}
            </Badge>
        )
    })

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={props.link}
                    height={160}
                    alt={props.alt}
                />
            </Card.Section>

            <Text weight={700}>{props.title}</Text>

            <Text size="sm" color="dimmed">
                {props.description}
            </Text>
            {badges}
        </Card>
    );
}