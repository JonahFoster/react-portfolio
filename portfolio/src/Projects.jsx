import moviePickerImg from "./assets/popchoice.jpg";
import planetsImg from "./assets/planetsapp.jpg";
import hologramImg from "./assets/Jonah Foster Hologram.jpg";
import collegeBaseball from "./assets/jonah foster college baseball stats.jpg";
import githubIcon from "./assets/github.svg";
import gnvWebDesign from "./assets/gnv-web-design.jpg";
import catalyst from "./assets/gainesville-web-design-catalyst-consulting-mockup.webp"
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const projects = [
    {
      title: "GNV Web Design",
      img: gnvWebDesign,
      description:
        "A simple website for a local web design agency. It is only built with HTML, CSS, and JavaScript, but it is well optimized for SEO, performance, and responsiveness. It consistently hits 98-100 on Lightspeed Page Speed scores. There's a basic setup of DecapCMS to allow for editing.",
      attributeList: ["HTML", "CSS", "JavaScript", "DecapCMS"],
      siteLink: "https://www.gnvwebdesign.com/",
      githubLink: "",
    },
    {
      title: "Catalyst Consulting",
      img: catalyst,
      description:
        "A full website built for a consulting agency going through a comprehensive rebrand. The site was fully designed and developed by me, with a focus on a clean aesthetic and smooth performance. Using primarily Astro and only React when necessary allows the site to have incredible PageSpeed scores.",
      attributeList: ["Astro", "React", "Tailwind", "Framer Motion"],
      siteLink: "https://catalyticeffects.com/",
      githubLink: "",
    },
    {
      title: "College Baseball Stats",
      img: collegeBaseball,
      description:
        "A site containing the stats from every college baseball player since 2020. My first solo full-stack project, I went through many iterations on the architecture of the site until ending with a React.js frontend with Firebase handling the backend. Stats are collected using the college-baseball Python library.",
      attributeList: ["React", "Firebase", "MaterialUI", "Python"],
      siteLink: "https://college-baseball-stats.web.app/",
      githubLink: "https://github.com/JonahFoster/college-baseball-frontend",
    },
  ];

  const oldProjects = [
    {
      title: "Movie Picker",
      img: moviePickerImg,
      description:
        "An OpenAI powered site to suggest movies based on user-preferences. Supports both individuals and groups.",
      attributeList: [
        "React",
        "CSS",
        "OpenAI API",
        "Supabase Embeddings Database",
      ],
      siteLink: "https://peaceful-piroshki-a2d371.netlify.app/",
      githubLink: "https://github.com/JonahFoster/scrimba-popchoice",
    },
    {
      title: "The Planets",
      img: planetsImg,
      description: "Explore the Solar System in this React design project.",
      attributeList: ["React", "CSS", "Responsive", "Dynamic Content"],
      siteLink: "https://jonah-planet-facts.netlify.app/",
      githubLink: "https://github.com/JonahFoster/planet-facts",
    },
    {
      title: "Hologram",
      img: hologramImg,
      description: "An Instagram clone from a galaxy far, far away.",
      attributeList: ["HTML5", "CSS", "JavaScript", "The Force"],
      siteLink: "https://starwars-hologram.netlify.app/",
      githubLink: "https://github.com/JonahFoster/scrimba-instagram-clone",
    },
  ];

  return (
    <section className="work" id="work">
      <div className="row">
        <h2>My Work</h2>
        <div className="work__boxes">
          {projects.map((project, index) => (
            <CreateProject key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CreateProject({ project }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const projectVariants = {
    offscreen: { opacity: 0, x: -100 },
    onscreen: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="offscreen"
      animate={inView ? "onscreen" : "offscreen"}
      variants={projectVariants}
      className="work__box"
    >
      <div className="work__text">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="work__list">
          {project.attributeList.map((attribute) => {
            return <li key={attribute}>{attribute}</li>;
          })}
        </ul>
        <div className="work__links">
          <a
            href={project.siteLink}
            target="_blank"
            rel="noreferrer"
            className="link__text"
          >
            Visit Site <span>&rarr;</span>
          </a>
          {project?.githubLink && (
            <a
              href={project.githubLink}
              title="View Source Code"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} className="work__code" alt="GitHub Icon" />
            </a>
          )}
        </div>
      </div>
      <div className="work__image-box">
        <motion.img
          src={project.img}
          whileHover={{ scale: 1.1 }}
          className="work__image"
          alt={`Jonah Foster ${project.title}`}
        />
      </div>
    </motion.div>
  );
}

CreateProject.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    attributeList: PropTypes.arrayOf(PropTypes.string).isRequired,
    siteLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
};
