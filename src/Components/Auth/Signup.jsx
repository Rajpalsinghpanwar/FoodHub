import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";

function SignUp({ setIsLogin, setIsOpen }) {
  const [activeField, setActiveField] = useState(null);
  const [showReferral, setShowReferral] = useState(false);

  const [formData, setFormData] = useState({
    phoneNo: "",
    name: "",
    email: "",
    referral: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.phoneNo || !formData.name || !formData.email) {
      alert("Please fill all required fields");
      return;
    }

    console.log("Signup Data:", formData);
    setIsOpen(false);
  };

  const renderField = (label, name, type = "text") => (
    <>
      {activeField !== name && !formData[name] ? (
        <span
          className="border border-gray-400 text-2xl text-gray-500 p-3 cursor-text"
          onClick={() => setActiveField(name)}
        >
          {label}
        </span>
      ) : (
        <div className="flex flex-col p-3 border border-gray-400 text-gray-500">
          <label className="text-sm">{label}</label>
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            autoFocus
            className="outline-none text-black"
            onBlur={() => !formData[name] && setActiveField(null)}
          />
        </div>
      )}
    </>
  );

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
          <h2 className="text-3xl font-medium">Sign up</h2>
          <p>
            or{" "}
            <span
              className="text-orange-600 font-bold cursor-pointer"
              onClick={() => setIsLogin(true)}
            >
              login to your account
            </span>
          </p>
          <div className="w-1/4 h-px border" />
        </div>

        <img
          className="w-1/5"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
          alt="signup"
        />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
        {renderField("Phone Number", "phoneNo", "tel")}
        {renderField("Name", "name")}
        {renderField("Email", "email", "email")}
        {renderField("Password", "password", "password")}
        

        {showReferral && renderField("Referral Code", "referral")}

        {!showReferral && (
          <span
            onClick={() => setShowReferral(true)}
            className="text-blue-500 font-bold cursor-pointer"
          >
            Have a referral code?
          </span>
        )}

        <button
          type="submit"
          className="w-full bg-orange-600 text-white p-3 font-bold uppercase"
        >
          Continue
        </button>

        <p className="text-sm">
          By creating an account, I accept the{" "}
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

export default SignUp;
