import { Home } from "../pages/index";
import { About } from "../pages/about";
import { Login } from "../pages/login";
import { Registration } from "../pages/registration";
import { Profile } from "../pages/profile";
import { Error } from "../pages/error";

const routes = [
  {
    path: "/",
    element: <Home />,
    meta: { title: "Home", layout: "default" },
  },
  {
    path: "/login",
    element: <Login />,
    meta: { title: "Login", layout: "default" },
  },
  {
    path: "/registration",
    element: <Registration />,
    meta: { title: "Registration", layout: "default" },
  },
  {
    path: "/profile",
    element: <Profile />,
    meta: { title: "Profile", layout: "default" },
  },
  {
    path: "*",
    element: <Error />,
    meta: { title: "Error", layout: "empty" },
  },
];

export default routes;
