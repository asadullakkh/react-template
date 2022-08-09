import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router/routes";

const Default = React.lazy(() => import("./layout/default"));
const Empty = React.lazy(() => import("./layout/empty"));

const layouts = {
  default: Default,
  empty: Empty,
};

function App() {
  let element = useRoutes(routes);

  return element;
}

export default App;
