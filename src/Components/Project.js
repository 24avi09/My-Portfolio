import projectsData from "../assets/projectsData.json";

const Project = () => {
  return (
    <div id="project" className="project">
      <div className="project-upper-part">
        <h3 className="project-header">Projects</h3>
        <h3 className="project-line">
          Each project is a unique peice of development🧩
        </h3>
      </div>
      <div
        // className="project"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          padding: "0 4rem",
          gap: "2rem",
        }}
      >
        {projectsData?.projects?.map((e, i) => (
          <div
            key={`${e}--$--${i}`}
            className={e % 2 === 0 ? "project-1" : "project-2"}
          >
            <img src={e?.imgSrc} alt="profile" />
            <div
              className={
                e % 2 === 0 ? "project-1-text-part" : "project-2-text-part"
              }
            >
              <h3>{e?.title}🎬</h3>
              <p style={{ fontSize: 14 }}>{e?.description}</p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.5rem",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {e?.techStack?.map((tech, index) => (
                  <span key={`${tech}-%-${i}`} style={{ fontSize: 14 }}>
                    <strong>{tech}</strong>
                  </span>
                ))}
              </div>
              <div
                className={
                  e % 2 === 0 ? "project-1-code-demo" : "project-2-code-demo"
                }
              >
                <a href={e?.gihubLink} target="blank" style={{ fontSize: 15 }}>
                  Code <i className="fab fa-github icon"></i>
                </a>
                {e?.liveDemoLink ? (
                  <a
                    href={e?.liveDemoLink}
                    target="blank"
                    style={{ fontSize: 15 }}
                  >
                    Live Demo{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
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
};

export default Project;
