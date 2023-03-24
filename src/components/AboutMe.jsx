import {Avatar, createStyles, Group, Text, Title} from "@mantine/core"
import {useViewportSize} from "@mantine/hooks";
import {HEADER_HEIGHT} from "./PortfolioHeader.jsx";
import toLogo from "../assets/logo-toAsset 5.png"


const useStyles = createStyles(() => ({
    backgroundLogo: {
        position: 'relative',
        marginTop: "-200px",
        marginLeft: "1000px",
        zIndex: "-3",
        transform: "rotate(10deg)",
        userSelect: "none",
    },
    sticky: {
        height: 0,
        overflow: "visible",
    },
}));
export default function AboutMe() {

    const { height } = useViewportSize()
    const { classes } = useStyles();


    return (
        <div style={{height: height, scrollBehavior: "smooth"}}>
            <Group position="center">
                <div style={{ flex: 1, textAlign: "center" }}>
                    <div className={classes.sticky}>
                        <img src={toLogo} alt="to logo" className={classes.backgroundLogo}/>
                    </div>
                    <Title order={2} size="xxx-large" weight={800}>
                        Hi, I'm Tanner O'Connor.
                    </Title>
                    <Title order={2} size="xxx-large" weight={800}>
                        A Software Developer
                    </Title>
                    <div style={{marginTop: "25px"}}>
                        <Text size="lg">
                            I'm ready get started in the industry.
                        </Text>
                        <Text size="lg">
                            I’m excited to quickly contribute and help foster positive vibes on a team.
                        </Text>
                    </div>
                </div>
            </Group>
        </div>
    )
}