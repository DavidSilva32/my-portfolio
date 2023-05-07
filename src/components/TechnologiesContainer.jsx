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
      "HTML5 is a markup language for the World Wide Web and is a key Internet technology, originally proposed by Opera Software.",
    icon: <DiHtml5 />,
  },
  {
    id: "css",
    name: "CSS3",
    description:
      "CSS3 is the third newest version of the famous Cascading Style Sheets, by which styles are defined for a web project.",
    icon: <DiCss3 />,
  },
  {
    id: "js",
    name: "JavaScript",
    description:
      "JavaScript is a structured, high-level scripting, dynamically typed, multiparadigm, interpreted programming language.",
    icon: <DiJsBadge />,
  },
  {
    id: "sass",
    name: "Sass",
    description:
      "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.",
    icon: <DiSass />,
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    description:
      "Bootstrap is an open-source web framework for developing interface and front-end components for websites and web applications.",
    icon: <DiBootstrap />,
  },
  {
    id: "react",
    name: "React",
    description:
      "React is an open source JavaScript front-end library focused on creating user interfaces on web pages.",
    icon: <DiReact />,
  },
  {
    id: "node",
    name: "Node.js",
    description:
      "Node.js is open-source, cross-platform software based on Google's V8 interpreter that allows you to run JavaScript code outside of a web browser.",
    icon: <DiNodejsSmall />,
  },
  {
    id: "mongodb",
    name: "MongoDb",
    description:
      "MongoDB is a free, open source, cross-platform document-oriented database software.",
    icon: <DiMongodb />,
  },
  {
    id: "postman",
    name: "Postman",
    description:
      "Postman is an API platform for developers to design, build, test and iterate their APIs.",
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
