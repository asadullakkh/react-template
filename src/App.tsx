import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router/routes";

const Default = React.lazy(() => import("./layout/default"));
const Empty = React.lazy(() => import("./layout/empty"));

const layouts = {
  default: Default,
  empty: Empty,
};

console.log(Default, "default");

function App() {
  let route = useRoutes(routes);

  return route;
}

export default App;
