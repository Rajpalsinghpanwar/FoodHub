import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";

function Login({ setIsLogin, setIsOpen }) {
  const [activeField, setActiveField] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.phone || !formData.password) {
      setError("Please enter phone number and password");
      return;
    }

    try {
      setLoading(true);

      const res = await axiosInstance.post("/user/login", formData);

      console.log("Login successful:", res.data);

      // Save token
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("auth", res.data.data);

        if (res.data.data.role == "admin") {
          navigate("/admin");
        }

       else if (res.data.data.role == "driver") {
          navigate("/driver");
        }

        else if (res.data.data.role == "user") {
          navigate("/user");
        }

        else if (res.data.data.role == "super-admin") {
          navigate("/super-admin");
        }

        // Close modal
        setIsOpen(false);

        // Optional redirect
       
      } else {
        setError(res.data?.message || "Login failed");
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data);

      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-2/5 min-h-screen fixed top-0 right-0 bg-white z-50 p-5 flex flex-col gap-4 shadow-lg">
      {/* Close Button */}
      <ImCross className="cursor-pointer" onClick={() => setIsOpen(false)} />

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

      {/* Error Message */}
      {error && (
        <div className="text-red-600 text-sm bg-red-100 p-2 rounded">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
        {/* Phone */}
        {activeField !== "phone" && !formData.phone ? (
          <span
            className="border border-gray-400 text-2xl text-gray-500 p-3 cursor-text"
            onClick={() => setActiveField("phone")}
          >
            Phone Number
          </span>
        ) : (
          <div className="flex flex-col p-3 border border-gray-400 text-gray-500">
            <label className="text-sm">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              autoFocus
              className="outline-none text-black"
              onBlur={() => !formData.phone && setActiveField(null)}
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
              onBlur={() => !formData.password && setActiveField(null)}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-8 text-sm font-bold text-orange-600 cursor-pointer"
            >
              {showPassword ? "HIDE" : "SHOW"}
            </span>
          </div>
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-600 text-white p-3 font-bold uppercase disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
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
