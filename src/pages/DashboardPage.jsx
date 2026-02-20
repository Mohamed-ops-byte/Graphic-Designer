import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardStats } from '../features/dashboard/components/DashboardStats';
import { addProject, removeProject } from '../features/portfolio/portfolioSlice';
import { updateSettings } from '../features/dashboard/dashboardSlice';

const newProjectInitial = {
  title: '',
  category: 'Branding',
  price: 200,
  image:
    'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1400&q=80',
  description: ''
};

export function DashboardPage() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.portfolio.projects);
  const settings = useSelector((state) => state.dashboard.settings);
  const orders = useSelector((state) => state.dashboard.orders);

  const [projectForm, setProjectForm] = useState(newProjectInitial);
  const [settingsForm, setSettingsForm] = useState(settings);

  const addNewProject = (event) => {
    event.preventDefault();
    if (!projectForm.title || !projectForm.description) return;
    dispatch(addProject({ ...projectForm, price: Number(projectForm.price) }));
    setProjectForm(newProjectInitial);
  };

  const saveSettings = (event) => {
    event.preventDefault();
    dispatch(updateSettings(settingsForm));
  };

  return (
    <main className="container section-space dashboard">
      <h2>Dashboard Control Center</h2>
      <p>Manage projects, site text, and incoming orders from one place.</p>

      <DashboardStats />

      <section className="dashboard-grid">
        <article className="panel">
          <h3>Add New Project</h3>
          <form className="stack-form" onSubmit={addNewProject}>
            <input
              placeholder="Project title"
              value={projectForm.title}
              onChange={(event) => setProjectForm({ ...projectForm, title: event.target.value })}
            />
            <input
              placeholder="Category"
              value={projectForm.category}
              onChange={(event) => setProjectForm({ ...projectForm, category: event.target.value })}
            />
            <input
              placeholder="Price"
              type="number"
              value={projectForm.price}
              onChange={(event) => setProjectForm({ ...projectForm, price: event.target.value })}
            />
            <input
              placeholder="Image URL"
              value={projectForm.image}
              onChange={(event) => setProjectForm({ ...projectForm, image: event.target.value })}
            />
            <textarea
              placeholder="Description"
              value={projectForm.description}
              onChange={(event) => setProjectForm({ ...projectForm, description: event.target.value })}
            />
            <button type="submit">Add Project</button>
          </form>
        </article>

        <article className="panel">
          <h3>Site Settings</h3>
          <form className="stack-form" onSubmit={saveSettings}>
            <input
              placeholder="Brand Name"
              value={settingsForm.brandName}
              onChange={(event) =>
                setSettingsForm({ ...settingsForm, brandName: event.target.value })
              }
            />
            <input
              placeholder="Hero Title"
              value={settingsForm.heroTitle}
              onChange={(event) =>
                setSettingsForm({ ...settingsForm, heroTitle: event.target.value })
              }
            />
            <textarea
              placeholder="Hero Subtitle"
              value={settingsForm.heroSubtitle}
              onChange={(event) =>
                setSettingsForm({ ...settingsForm, heroSubtitle: event.target.value })
              }
            />
            <button type="submit">Save Settings</button>
          </form>
        </article>
      </section>

      <section className="panel">
        <h3>Project List</h3>
        <ul className="list-table">
          {projects.map((project) => (
            <li key={project.id}>
              <span>{project.title}</span>
              <button onClick={() => dispatch(removeProject(project.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <h3>Latest Orders</h3>
        {orders.length === 0 ? <p>No orders yet.</p> : null}
        <ul className="list-table">
          {orders.map((order) => (
            <li key={order.id}>
              <span>
                {order.clientName} - {order.projectTitle} - ${order.amount}
              </span>
              <small>{order.method}</small>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}