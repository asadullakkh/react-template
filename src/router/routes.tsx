import { Home } from "../pages/index";
import { Error } from "../pages/error";
import React from "react";

type RouteTypes = Array<{
  path: string;
  element: React.ReactNode;
  meta: { title: string; layout: string };
}>;

const routes: RouteTypes = [
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
