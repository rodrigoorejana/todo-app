import { useRef, useState } from "react";
import PropTypes from "prop-types";
import TaskStock from "../entities/TaskStock";
import useTascks from "../hooks/useTasks";


const CATEGORIES = [
  "Anotações",
  "Diário",
  "Lista de Leitura",
];

ItemForm.propTypes = {
  taskToUpdate: PropTypes.object,
};

export default function ItemForm({ taskToUpdate }) {
  const defaultTask = {
    name: "",
    category: "",
    description: "",
  };

  const [task, setTask] = useState(taskToUpdate ? taskToUpdate : defaultTask);
  const {addTask, updateTask} = useTascks();
  const inputRef = useRef(null);

  // Atualiza o estado
  const handleChange = (ev) => {
    setTask((currentState) => ({
      ...currentState,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();


    try {
      if(taskToUpdate){
        updateTask(taskToUpdate.id, task)
        alert(task.name + " atualizado com sucesso")
      }else{
      const newTask = new TaskStock(task);
      addTask(newTask);
      setTask(defaultTask);
      alert(task.name + " cadastrado com sucesso")
    }
    } catch (error) {
      console.log(error.message);
    }finally{
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div>
          <label htmlFor="name">Tarefa</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            ref={inputRef}
            value={task.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">Descrição</label>
          <textarea
            name="description"
            id="description"
            required
            rows={1}
            value={task.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="category">Categoria</label>
          <select
            name="category"
            id="category"
            required
            value={task.category}
            onChange={handleChange}
          >
            <option disabled value="">
              Selecione uma categoria...
            </option>
            {CATEGORIES.map((category) => (
              <option
                key={category}
                value={category}
                defaultChecked={task.category === category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button className="button is-primary is-large">
        Salvar
      </button>
    </form>
  );
}
