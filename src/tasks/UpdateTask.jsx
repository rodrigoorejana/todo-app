import TaskForm from "../components/TaskForm";
import { useParams } from "react-router-dom";
import useTasks from "../hooks/useTasks";

export default function UpdateTask() {
  const { getTask } = useTasks();
  const { id } = useParams();
  const task = getTask(id);
  return (
    <>
      <TaskForm taskToUpdate={task} />
    </>
  );
}
