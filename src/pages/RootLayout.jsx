import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <Link to="/" className="logo">TO-DO APP</Link>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/tasks">Tarefas</Link>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        Feito com React e React Router!
      </footer>
    </>
  )
}