import toLogo from "../../assets/logo-background.png";
import {createStyles} from "@mantine/core";

const useStyles = createStyles(() => ({
    backgroundLogo: {
        position: 'fixed',
        top: "0",
        left: "-20px",
        zIndex: "-3",
        transform: "rotate(-10deg)",
        userSelect: "none",
        overflow: "hidden",
        width: "1000px"
    },
}));

export default function BackgroundLogo() {

    const { classes } = useStyles();

    return <img src={toLogo} alt="to logo" className={classes.backgroundLogo}/>

}