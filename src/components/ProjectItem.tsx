import "../style/project.css";

interface ProjectProp{
  name: string;
  photo: string;
  desc: string;
  link: string;
  ended: boolean
}

export default function ProjectItem(item: ProjectProp) {
  return (
    <div className="projectItem">
      <h4>{item.name}</h4>
      <div className="secondLayer">
        <div className="imgDiv">
          <img src={item.photo} alt="test" />
        </div>
        <div className="descDiv">
          <p>
            {item.desc}
          </p>
          {item.ended ? null : <p className="status">Not ended</p>}
        </div>
      </div>
      <a href={item.link} className="github-link">
        GitHub
        <img
          src="../src/assets/ext-link.svg"
          alt="External Link"
          className="external-link"
        />
      </a>
    </div>
  );
}
