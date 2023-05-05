import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  {
    name: "linkedin",
    link: "https://linkedin.com/in/david-teixeira-devloper-designer/?locale=en_US",
    icon: <FaLinkedinIn />,
  },
  { name: "github", link: "https://github.com/DavidSilva32", icon: <FaGithub /> },
  { name: "instagram", link: "https://www.instagram.com/david_teixeira32/?next=%2F", icon: <FaInstagram /> },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.link}
          target="_blank"
          rel="external"
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
