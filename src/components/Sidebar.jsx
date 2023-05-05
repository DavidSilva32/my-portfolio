import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworks";
import Avatar from "../img/perfil.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="David Teixeira" />
      <p className="title">Software Developer</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="../src/curriculum/curriculo-en.pdf" download="curriculum" className="btn">
        Donwload curriculum
      </a>
    </aside>
  );
};

export default Sidebar;
