import ProjectsList from "../components/ProjectsList";
import '../style/project.css'

export default function Projects() {
  return (
    <div>
      <h2 className="title">A list of my projects:</h2>
      <ProjectsList />
    </div>
  );
}
