import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import AgencePage from "../pages/AgencePage";

const router: RouteObject[] = [
  {
    path: "/",
    index: true,
    element: <HomePage />,
  },
  {
    path: "/agence",
    index: true,
    element: <AgencePage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const routes = createBrowserRouter(router);

export default routes;
