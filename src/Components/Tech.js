import technologyData from "../assets/technologyData.json";

const Tech = () => {
  return (
    <div id="technologies" className="tech">
      <p>Tech Stack</p>
      <ul>
        {technologyData.technologies?.map((e, i) => (
          <li className="tooltip">
            <img
              src={e?.imgSrc}
              alt={e?.name}
              style={
                e?.backgroundColor
                  ? { backgroundColor: e?.backgroundColor }
                  : {}
              }
            />
            <span style={{fontSize:14}} className="tooltiptext">{e?.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tech;
