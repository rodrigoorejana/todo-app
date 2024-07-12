import { Link, Outlet, useLocation } from "react-router-dom";

export default function TasksLayout() {
  const { pathname } = useLocation();

  return (
    <main>
      <h1>Tarefas</h1>
      <div className="tabs">
        <Link to="/tasks" className={`tab ${pathname === "/tasks" ? "active" : ""}`}>Todas as tarefas</Link>
        <Link to="/tasks/new" className={`tab ${pathname === "/tasks/new" ? "active" : ""}`}>Nova tarefa</Link>
      </div>
      <Outlet />
    </main>
  );
}
