import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import RootLayout from "./pages/RootLayout"
import TasksLayout from "./tasks/TasksLayout"
import CreateTask from "./tasks/CreateTask"
import ListTasks from "./tasks/ListTasks"
import UpdateTask from "./tasks/UpdateTask"

const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "tasks",
        element: <TasksLayout />,
        children: [
          { index: true, element: <ListTasks /> },
          { path: "new", element: <CreateTask /> },
          { path: ":id/update", element: <UpdateTask/> }
        ]
      }
    ]
  }])

  export default router