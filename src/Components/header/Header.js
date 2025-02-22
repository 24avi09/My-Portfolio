import { Link } from "react-scroll";
import "./header.scss";

const headerList = [
  {
    to: "hero",
    spy: true,
    smooth: true,
    offset: 0,
    duration: 1000,
    label: "Home",
  },
  {
    to: "technologies",
    spy: true,
    smooth: true,
    offset: -130,
    duration: 800,
    label: "Skills",
  },
  {
    to: "project",
    spy: true,
    smooth: true,
    offset: 50,
    duration: 800,
    label: "Projects",
  },
  {
    to: "contact",
    spy: true,
    smooth: true,
    offset: -50,
    duration: 1000,
    label: "Contact",
  },
];

const Header = () => (
  <div className="header">
    <h1>Abhishekh.dev</h1>
    <div className="header-side-links">
      {headerList.map((e, i) => (
        <Link
          key={e?.label}
          className="header-links"
          to={e?.to}
          offset={e?.offset}
          duration={e?.duration}
          smooth={e?.smooth}
          spy={e?.spy}
        >
          {e?.label}
        </Link>
      ))}
    </div>
  </div>
);

export default Header;
