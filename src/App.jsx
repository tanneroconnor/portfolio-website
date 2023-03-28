import {PortfolioHeader} from "./components/NavigationUI/PortfolioHeader.jsx";
import {createStyles} from "@mantine/core";

import BackgroundLogo from "./components/logos/BackgroundLogo.jsx";
import WorkSection from "./components/MainPageSections/WorkSection/WorkContent.jsx";
import ScrollBackToTop from "./components/NavigationUI/ScrollBackToTop.jsx";
import FooterSection from "./components/NavigationUI/FooterSection.jsx";
import AboutSection from "./components/MainPageSections/AboutSection/AboutSection.jsx";
import {useState} from "react";
import ContactSection from "./components/MainPageSections/ContactSection/ContactSection.jsx";


const useStyles = createStyles(() => ({
    mainPageContainer: {
        marginTop: "100px",
        textAlign: "center",
        backgroundImage: `url(${BackgroundLogo})`
    }
}));

export default function App() {

    const [activePage, setActivePage] = useState("work");
    const { classes } = useStyles();

    function mainPageContent() {
        switch (activePage) {
            case "work": return <WorkSection />
            case "about": return <AboutSection />
            case "contact": return <ContactSection />
            default: return <WorkSection />
        }
    }

    function handlePageChange(selectedPage) {
        setActivePage(selectedPage);
    }

    return (

        <div>
            <PortfolioHeader
                activePage={activePage}
                handlePageChange={handlePageChange} />
            <BackgroundLogo />
            <div className={classes.mainPageContainer}>
                {mainPageContent()}
            </div>
            <ScrollBackToTop />
            <FooterSection />


            {/*
            TODO: Conditionally render Work, About, Contact
            TODO: Add resume button to download resume. Maybe from linkedin?
            */}

        </div>

    )
}
