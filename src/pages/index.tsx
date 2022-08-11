import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex-center-center">
        <h1 className="text-3xl -500:text-[yellow] text-red-500 font-bold underline">
          Hello world!
        </h1>
      </div>
      <Button variant="contained">Hello World</Button>
    </div>
  );
};
