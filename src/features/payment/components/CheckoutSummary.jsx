export function CheckoutSummary({ project }) {
  if (!project) {
    return (
      <aside className="checkout-summary">
        <h3>No project selected</h3>
        <p>Please choose a design style from the Works page.</p>
      </aside>
    );
  }

  return (
    <aside className="checkout-summary">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <strong>Total: ${project.price}</strong>
    </aside>
  );
}