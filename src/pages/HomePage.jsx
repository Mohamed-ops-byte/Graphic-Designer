import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/ui/SectionTitle';
import { PortfolioGrid } from '../features/portfolio/components/PortfolioGrid';

export function HomePage() {
  const settings = useSelector((state) => state.dashboard.settings);
  const serviceItems = [
    {
      title: 'Brand Identity Systems',
      text: 'Logo, colors, and full visual direction crafted for premium positioning.'
    },
    {
      title: 'Social Content Design',
      text: 'High-converting post templates and ad creatives for multi-platform growth.'
    },
    {
      title: 'Packaging & Print',
      text: 'Product packaging and editorial layouts with modern digital aesthetics.'
    }
  ];

  const processItems = [
    { step: '01', title: 'Discovery', text: 'Goals, audience, and style direction.' },
    { step: '02', title: 'Concept', text: 'Moodboard and first visual routes.' },
    { step: '03', title: 'Refinement', text: 'Feedback loops and final assets.' },
    { step: '04', title: 'Delivery', text: 'Production-ready files and handoff.' }
  ];

  const testimonials = [
    {
      name: 'Lina K.',
      role: 'Startup Founder',
      text: 'The new branding gave us a premium look and boosted campaign performance immediately.'
    },
    {
      name: 'Mazen R.',
      role: 'Marketing Lead',
      text: 'Fast delivery, top visual quality, and very organized design files for our whole team.'
    }
  ];

  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <p className="hero-tag">Digital / Modern / Premium</p>
          <h2>{settings.heroTitle}</h2>
          <p>{settings.heroSubtitle}</p>
          <div className="hero-actions">
            <Link to="/works" className="btn-primary">
              Explore Works
            </Link>
            <Link to="/dashboard" className="btn-outline">
              Open Dashboard
            </Link>
          </div>
        </div>
      </section>

      <section className="container section-space">
        <SectionTitle
          title="Featured Projects"
          subtitle="High-quality creative cards with premium visual presentation."
        />
        <PortfolioGrid />
      </section>

      <section className="container section-space">
        <SectionTitle
          title="Services"
          subtitle="Complete digital design services for modern brands and creators."
        />
        <div className="info-grid">
          {serviceItems.map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-space">
        <SectionTitle
          title="How We Work"
          subtitle="A clear design workflow that keeps quality high and deadlines on track."
        />
        <div className="process-grid">
          {processItems.map((item) => (
            <article key={item.step} className="process-card">
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-space">
        <SectionTitle
          title="Client Feedback"
          subtitle="What clients say after launching their new visual identity."
        />
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <p>“{item.text}”</p>
              <h4>{item.name}</h4>
              <small>{item.role}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-space">
        <div className="cta-banner">
          <div>
            <h3>Ready to launch your next visual project?</h3>
            <p>Pick a style from the portfolio and move directly to secure checkout.</p>
          </div>
          <Link to="/works" className="btn-primary">
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}