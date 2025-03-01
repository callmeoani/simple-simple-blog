import { Outlet, RouteObject } from "react-router";
import HomePage from "../pages/home";

const LandingRoutes: RouteObject = {
  path: "/",
  element: <Outlet />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
  ],
};

export default LandingRoutes;
