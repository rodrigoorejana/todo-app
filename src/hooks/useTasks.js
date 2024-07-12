import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";

export default function useTascks(){
    return useContext(TasksContext)
}