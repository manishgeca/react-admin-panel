import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="sidebar">
    <nav>
      <ul>
        <li><Link to="/" className="nav-link">Dashboard</Link></li>
        <li><Link to="/tables" className="nav-link">Tables</Link></li>
        <li><Link to="/charts" className="nav-link">Charts</Link></li>
        <li><Link to="/calendar" className="nav-link">Calendar</Link></li>
        <li><Link to="/kanban" className="nav-link">Kanban</Link></li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;