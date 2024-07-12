import { Link } from "react-router-dom";
import useTasks from "../hooks/useTasks";
import DeleteButton from "./DeleteButton";

export default function TasksTable() {
  const { tasks, toggleCompleteTask } = useTasks();

  return (
    <table>
      <thead>
        <tr>
          <th>Tarefa</th>
          <th>Descrição</th>
          <th>Categoria</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id} className={task.completed ? "completed" : ""}>
            <td>{task.name}</td>
            <td>{task.description}</td>
            <td>{task.category}</td>
            <td>
              <button 
                onClick={() => toggleCompleteTask(task.id)} 
                className="button is-primary is-small"
              >
                {task.completed ? "Concluido" : "Concluir"}
              </button>
              <Link to={`/tasks/${task.id}/update`} className="button is-small">
                Atualizar
              </Link>
              <DeleteButton taskId={task.id} taskName={task.name} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
