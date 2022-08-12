import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import routes from "./routes";
const Default = React.lazy(() => import("../layout/default"));
const Empty = React.lazy(() => import("../layout/empty"));

const layouts: { [key: string]: any } = {
  default: Default,
  empty: Empty,
};

function AppRouter() {
  let elements = useRoutes(routes);
  let location = useLocation();

  let found = routes.find((el) => {
    return el.path == location.pathname;
  });

  return (
    <>
      {React.createElement(layouts[found?.meta.layout || "empty"])}
      {elements}
    </>
  );
}

export default AppRouter;
