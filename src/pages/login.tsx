import { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";

function handleLogin() {
  console.log("handleLogin");
}
export const Login = () => {
  const form = {
    email: "",
    password: "",
  };

  return (
    <div className=" h-screen flex-center-center">
      <div
        style={styles.login}
        className="bg-white p-8 border-[1px] rounded-[24px] max-w-[580px] w-full">
        <h4 className="text-black-200 leading-[130%] font-semibold text-[32px]">
          Login
        </h4>

        <div className="mt-10 flex flex-col gap-6">
          <TextField
            className="w-full"
            placeholder="Enter your email adress"
            defaultValue={form.email}
          />
          <TextField
            className="w-full"
            placeholder="Enter your password"
            defaultValue={form.password}
          />
        </div>
        <div className="flex items-end justify-end mt-6">
          <Button
            onClick={handleLogin}
            size="large"
            variant="outlined"
            className="">
            login
          </Button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  login: {
    boxShadow:
      "0px 3px 11px rgba(0, 0, 0, 0.06), 0px 12px 32px rgba(0, 0, 0, 0.06)",
  },
};
