import useGithubProjects from "./useGithubProjects";
import ProjectCard from "./ProjectCard";
import "./projects.css";

export default function Projects() {
  const { projects, loading } = useGithubProjects();

  if (loading) return <p className="center">Loading projects…</p>;

  return (
    <section className="projects-grid p-2">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
