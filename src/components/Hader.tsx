import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="px-10 py-4 flex gap-2">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};
