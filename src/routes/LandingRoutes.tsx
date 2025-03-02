import { Outlet, RouteObject } from "react-router";
import HomePage from "../pages/home";
import { lazy } from "react";

const GamePage = lazy(() => import("../pages/game"));

const LandingRoutes: RouteObject = {
  path: "/",
  element: <Outlet />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: "/game",
      element: <GamePage />,
    },
  ],
};

export default LandingRoutes;
