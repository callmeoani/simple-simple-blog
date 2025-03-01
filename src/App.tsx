import { createBrowserRouter, RouterProvider } from "react-router";
// import Layout from "./layouts/Layout";
import Layout from "./layouts/Layout";
import LandingRoutes from "./routes/LandingRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [LandingRoutes],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
