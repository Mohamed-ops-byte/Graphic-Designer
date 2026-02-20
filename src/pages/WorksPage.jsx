import { useDispatch, useSelector } from 'react-redux';
import { SectionTitle } from '../components/ui/SectionTitle';
import { PortfolioGrid } from '../features/portfolio/components/PortfolioGrid';
import { setActiveCategory } from '../features/portfolio/portfolioSlice';

export function WorksPage() {
  const dispatch = useDispatch();
  const { projects, activeCategory } = useSelector((state) => state.portfolio);

  const categories = ['All', ...new Set(projects.map((item) => item.category))];
  const categoryCount = categories.length - 1;

  return (
    <main className="container section-space">
      <section className="works-hero">
        <div>
          <h2>Creative Work Library</h2>
          <p>
            Explore high-quality design styles, filter by category, and choose the direction that
            matches your brand.
          </p>
        </div>
        <div className="works-stats">
          <article>
            <strong>{projects.length}+</strong>
            <span>Design Concepts</span>
          </article>
          <article>
            <strong>{categoryCount}+</strong>
            <span>Creative Categories</span>
          </article>
        </div>
      </section>

      <SectionTitle
        title="Portfolio Gallery"
        subtitle="Browse by category and choose a visual style before checkout."
      />

      <div className="filters">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => dispatch(setActiveCategory(category))}
          >
            {category}
          </button>
        ))}
      </div>

      <PortfolioGrid />
    </main>
  );
}