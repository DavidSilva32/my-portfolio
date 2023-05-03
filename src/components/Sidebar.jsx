import Avatar from "../img/perfil.jpg"

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="David Teixeira" />
      <p className="title">Full-Stack Software Developer</p>
      <p>social medias</p>
      <p>contact informations</p>
      <a href="#" className="btn">
        Donwload curriculum
      </a>
    </aside>
  );
};

export default Sidebar;
