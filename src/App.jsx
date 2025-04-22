import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Todos from "./pages/Todos";
import CustomForm from "./components/CustomForm";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/todos", element: <Todos /> },
      {
        path: "/newTodo",
        element: <CustomForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
