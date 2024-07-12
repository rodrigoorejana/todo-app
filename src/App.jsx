import { RouterProvider } from "react-router-dom";
import router from "./router";
import { TasksContextProvider } from "./contexts/TasksContext";

function App() {
  return (
     <TasksContextProvider>
       <RouterProvider router={router} />
     </TasksContextProvider>
  )
}

export default App
