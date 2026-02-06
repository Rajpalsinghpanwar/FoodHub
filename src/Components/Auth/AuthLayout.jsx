import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function AuthLayout({ isOpen, setIsOpen }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <>
      {isLogin ? (
        <Login setIsLogin={setIsLogin} setIsOpen={setIsOpen} />
      ) : (
        <Signup setIsLogin={setIsLogin} setIsOpen={setIsOpen} />
      )}
    </>
  );
}

export default AuthLayout;
