import { Home } from "../pages/index";
import { Error } from "../pages/error";

const routes = [
  {
    path: "/",
    element: <Home />,
    meta: { title: "Home", layout: "default" },
  },

  {
    path: "*",
    element: <Error />,
    meta: { title: "Error", layout: "empty" },
  },
];

export default routes;
