import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import routes from "./routes";

const Default = React.lazy(() => import("../layout/default"));
const Empty = React.lazy(() => import("../layout/empty"));

const layouts = {
  default: Default,
  empty: Empty,
};

console.log(routes, "routes");

console.log(Default, "default");

function AppRouter() {
  let elements = useRoutes(routes);
  let location = useLocation();

  return elements;
  // <{layouts[elements[0].meta.leyout]} >
}

export default AppRouter;
