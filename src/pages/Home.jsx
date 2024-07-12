import useTasks from "../hooks/useTasks"
import { Link } from "react-router-dom"
export default function Home() {
    const { tasks } = useTasks();

    const today = new Date();
    const limitDate = new Date();
    limitDate.setDate(limitDate.getDate() - 7)
    const recentTasks = tasks.filter((task) => task.createdAt >= limitDate && task.createdAt <= today);

    return (
      <main>
        <h2>Página Inicial</h2>
      <div className="row">
        <div className="recent">
          <table>
            <thead>
              <tr><th>Tarefas Recentes</th>
              <th>Ações</th>
            </tr>
            </thead>
            <tbody>
              {recentTasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.name}</td>
                  <td><Link to={`/tasks/${task.id}/update`} className="button is-small">
                Ver
              </Link>
              </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </main>
    )
  }