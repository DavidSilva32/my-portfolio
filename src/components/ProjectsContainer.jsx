import "../styles/components/projectscontainer.sass";
import imgcep from "../img/cep-finder.jpg";
import imggallery from "../img/gallery.jpg";
import imglist from "../img/to-do-list.jpg";

const projects = [
  {
    id: "cep-finder",
    name: "Cep Finder",
    img: imgcep,
    description: "A project builded with React.js, API and Sass.",
    live: "https://cep-finder-delta.vercel.app/",
    code: "https://github.com/DavidSilva32/cep-finder",
  },
  {
    id: "gallery",
    name: "Gallery",
    img: imggallery,
    description: "My first project using the Technology Sass. The gallery.",
    live: "https://davidsilva32.github.io/sass/index.html",
    code: "https://github.com/DavidSilva32/sass",
  },
  {
    id: "to-do-list",
    name: "To-do List",
    img: imglist,
    description:
      "In this project i used API end React.js, to make a To-do list.",
    live: "https://to-do-list-lac-theta.vercel.app/",
    code: "https://github.com/DavidSilva32/curso-react",
  },
];

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projects</h2>
      <p id="paragraph">Some of my projects you can access on my Github.</p>
      <div className="projects-container-grid">
        {projects.map((project) => (
          <div className="card" id={project.id} key={project.id}>
            <h3>{project.name}</h3>
            <img src={project.img} alt="Project picture" />
            <p>{project.description}</p>
            <div className="card-btn">
              <a href={project.live} target="_blank" rel="external">
                Live
              </a>
              <a href={project.code} target="_blank" rel="external">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="projects-more">
        <a
          href="https://github.com/DavidSilva32"
          target="_blank"
          rel="external"
          className="btn"
        >
          View more Projects
        </a>
      </div>
    </section>
  );
};

export default ProjectsContainer;
