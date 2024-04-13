import projectsData from "../../assets/projectsData.json";
import "./project.scss";

const Project = () => (
  <div id="project" className="project">
    <div className="project-upper-part">
      <h2 style={{ color: "rgb(28, 133, 231)" }}>Projects</h2>
      <h3 style={{ color: "rgb(58, 57, 57)" }}>
        Each project is a unique peice of development🧩
      </h3>
    </div>
    <div className="project-list">
      {projectsData?.projects?.map((e, i) => (
        <div key={`${e}--$--${i}`} className="project-card">
          <img src={e?.imgSrc} alt="profile" />
          <div className="project-card-text-part">
            <h3>{e?.title}</h3>
            <p>{e?.description}</p>

            <div className="tech-list">
              {e?.techStack?.map((tech, index) => (
                <span key={`${tech}-%-${i}`}>
                  <strong>{tech}</strong>
                </span>
              ))}
            </div>
            <div className="project-card-code-demo">
              <a href={e?.gihubLink} target="blank" className="github-link">
                Code <i className="fab fa-github icon" />
              </a>
              {e?.liveDemoLink ? (
                <a href={e?.liveDemoLink} target="blank" className="live-link">
                  Live Demo{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Project;
