import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Todos from "./pages/Todos";
import RootLayout from "./pages/RootLayout";
import AddTodo from "./pages/AddTodo";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { getDesignTokens } from "./heplers/getDesignTokens";
import { ColorModeContext } from "./heplers/ColorModeContext";
import { useMemo, useState } from "react";

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
        element: <AddTodo />,
      },
    ],
  },
]);

function App() {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
    }),
    []
  );
  const theme = createTheme(getDesignTokens(mode));

  return (
    <ColorModeContext value={colorMode}>
      <ThemeProvider theme={theme} noSsr>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext>
  );
}

export default App;
