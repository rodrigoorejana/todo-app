import protypes from "prop-types"
import useTascks from "../hooks/useTasks"
import {useNavigate} from "react-router-dom"

DeleteButton.prototype ={
    taskId: protypes.number,
    taskName: protypes.string
}
export default function DeleteButton({taskId, taskName}){
    const {deleteTask} = useTascks()
    const navigate = useNavigate()

    const handleDelete = () =>{
        if(confirm(`Tem certeza que deseja excluir ${taskName}`)){
            deleteTask(taskId)
            navigate("/tasks")
        }
    }
    return(
        <button className="button is-danger is-small" onClick={handleDelete}>
            Excluir
        </button>
    )
}