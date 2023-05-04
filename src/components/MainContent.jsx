import Aboutcontainer from "./AboutContainer";
import TechnologyContainer from "./TechnologyContainer";
import ProjectsContainer from "./ProjectsContainer";

import "../styles/components/maincontent.sass";

const MainContent = () => {
    return (
        <main id="main-content">
            <Aboutcontainer />
            <TechnologyContainer />
            <ProjectsContainer />
        </main>
    )
};

export default MainContent;