import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiMongodb,
  DiBootstrap,
} from "react-icons/di";

import {SiPostman} from "react-icons/si";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolores harum libero.",
    icon: <DiHtml5 />,
  },
  {
    id: "css",
    name: "CSS3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolores harum libero.",
    icon: <DiCss3 />,
  },
  {
    id: "js",
    name: "JavaScript",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolores harum libero.",
    icon: <DiJsBadge />,
  },
  {
    id: "sass",
    name: "Sass",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolores harum libero.",
    icon: <DiSass />,
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolores harum libero.",
    icon: <DiBootstrap />,
  },
  {
    id: "react",
    name: "React",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolores harum.",
    icon: <DiReact />,
  },
  {
    id: "node",
    name: "Node.js",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolores harum.",
    icon: <DiNodejsSmall />,
  },
  {
    id: "mongodb",
    name: "MongoDb",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolores harum.",
    icon: <DiMongodb />,
  },
  {
    id: "postman",
    name: "Postman",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolores harum.",
    icon: <SiPostman />,
  },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Technologies</h2>
      <div className="technologies-container-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
