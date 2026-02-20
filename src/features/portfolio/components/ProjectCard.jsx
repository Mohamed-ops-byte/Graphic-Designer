import { useDispatch } from 'react-redux';
import { selectProject } from '../../payment/paymentSlice';
import { useNavigate } from 'react-router-dom';

export function ProjectCard({ project }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrder = () => {
    dispatch(selectProject(project.id));
    navigate('/checkout');
  };

  return (
    <article className="project-card">
      <img src={project.image} alt={project.title} loading="lazy" />
      <div className="project-content">
        <span>{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="card-row">
          <strong>${project.price}</strong>
          <button onClick={handleOrder}>Order This Style</button>
        </div>
      </div>
    </article>
  );
}