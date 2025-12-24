import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";

function AuthLayout({ signInClicked }) {
  return (
    <div
      className={`h-screen flex
       w-screen bg-black/50  justify-end absolute top-0 right-0 z-40 `}
    >
      <Signin />
    </div>
  );
}

export default AuthLayout;
