import { Home } from "../pages/index";
import { Error } from "../pages/error";

const routes = [
  {
    path: "/",
    element: <Home />,
    state: { title: "Home", layout: "default" },
  },

  {
    path: "*",
    element: <Error />,
    state: { title: "Error", layout: "empty" },
  },
];

export default routes;
