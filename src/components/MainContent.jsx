import Aboutcontainer from "./AboutContainer";
import TechnologiesContainer from "./TechnologiesContainer";
import ProjectsContainer from "./ProjectsContainer";

import "../styles/components/maincontent.sass";

const MainContent = () => {
    return (
        <main id="main-content">
            <Aboutcontainer />
            <TechnologiesContainer />
            <ProjectsContainer />
        </main>
    )
};

export default MainContent;