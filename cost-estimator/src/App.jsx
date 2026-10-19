import './App.css'
import Projects from './components/Projects.jsx'

const projects = [
  {
    id: 1,
    name: 'Phoenix Project',
    client: 'GlobalTech Industries',
    status: 'In Progress',
    owner: 'Arjun Reddy',
    dateRange: '2025-01-15 to 2027-12-31',
    hours: 250,
    cost: 4500000,
  },
  {
    id: 2,
    name: 'Nova Project',
    client: 'BlueWave Technologies',
    status: 'Completed',
    owner: 'Priya Sharma',
    dateRange: '2023-06-01 to 2025-03-31',
    hours: 320,
    cost: 7200000,
  },
  {
    id: 3,
    name: 'Orion Project',
    client: 'NextGen Digital Solutions',
    status: 'In Progress',
    owner: 'Rahul Verma',
    dateRange: '2024-09-10 to 2027-05-20',
    hours: 175,
    cost: 5800000,
  },
  {
    id: 4,
    name: 'Horizon Project',
    client: 'Vertex Cloud Systems',
    status: 'Completed',
    owner: 'Meera Nair',
    dateRange: '2022-11-01 to 2025-08-15',
    hours: 400,
    cost: 9500000,
  },
];

function App() {
  return (
    <main className="app-shell">
      <header className="page-header">
        <p className="eyebrow">Project Overview</p>
        <h1>Projects</h1>
        <p className="page-description">
          A quick look at project ownership, timelines, effort, and cost.
        </p>
      </header>

      <Projects projects={projects} />
    </main>
  )
}

export default App
