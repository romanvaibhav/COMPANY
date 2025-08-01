import "./App.css";
import { RouterProvider } from "react-router-dom";
import appRouter from "./appRouter";
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
