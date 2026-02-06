import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";

function Login({ setIsLogin, setIsOpen }) {
  const [activeField, setActiveField] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    phoneNo: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.phoneNo || !formData.password) {
      alert("Please enter phone number and password");
      return;
    }

    console.log("Login Data:", formData);
    setIsOpen(false);
  };

  return (
    <div className="w-2/5 min-h-screen fixed top-0 right-0 bg-white z-50 p-5 flex flex-col gap-4">
      {/* Close */}
      <ImCross
        className="cursor-pointer"
        onClick={() => setIsOpen(false)}
      />

      {/* Header */}
      <div className="w-full flex justify-between items-start">
        <div className="w-1/2 flex flex-col gap-2">
          <h2 className="text-3xl font-medium">Login</h2>
          <p>
            or{" "}
            <span
              className="text-orange-600 font-bold cursor-pointer"
              onClick={() => setIsLogin(false)}
            >
              create an account
            </span>
          </p>
          <div className="w-1/4 h-px border" />
        </div>

        <img
          className="w-1/5"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
          alt="login"
        />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
        {/* Phone Number */}
        {activeField !== "phoneNo" && !formData.phoneNo ? (
          <span
            className="border border-gray-400 text-2xl text-gray-500 p-3 cursor-text"
            onClick={() => setActiveField("phoneNo")}
          >
            Phone Number
          </span>
        ) : (
          <div className="flex flex-col p-3 border border-gray-400 text-gray-500">
            <label className="text-sm">Phone Number</label>
            <input
              type="tel"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              autoFocus
              className="outline-none text-black"
              onBlur={() =>
                !formData.phoneNo && setActiveField(null)
              }
            />
          </div>
        )}

        {/* Password */}
        {activeField !== "password" && !formData.password ? (
          <span
            className="border border-gray-400 text-2xl text-gray-500 p-3 cursor-text"
            onClick={() => setActiveField("password")}
          >
            Password
          </span>
        ) : (
          <div className="flex flex-col p-3 border border-gray-400 text-gray-500 relative">
            <label className="text-sm">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="outline-none text-black pr-16"
              onBlur={() =>
                !formData.password && setActiveField(null)
              }
            />

            {/* Show / Hide */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-8 text-sm font-bold text-orange-600 cursor-pointer"
            >
              {showPassword ? "HIDE" : "SHOW"}
            </span>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-orange-600 text-white p-3 font-bold uppercase"
        >
          Login
        </button>

        <p className="text-sm">
          By continuing, I accept the{" "}
          <NavLink to="/terms" className="font-bold text-black">
            Terms & Conditions
          </NavLink>{" "}
          &{" "}
          <NavLink to="/policy" className="font-bold text-black">
            Privacy Policy
          </NavLink>
        </p>
      </form>
    </div>
  );
}

export default Login;
