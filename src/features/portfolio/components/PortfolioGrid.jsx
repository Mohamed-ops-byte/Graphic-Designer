import { useSelector } from 'react-redux';
import { ProjectCard } from './ProjectCard';

export function PortfolioGrid() {
  const { projects, activeCategory } = useSelector((state) => state.portfolio);

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((item) => item.category === activeCategory);

  return (
    <div className="project-grid">
      {filtered.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}