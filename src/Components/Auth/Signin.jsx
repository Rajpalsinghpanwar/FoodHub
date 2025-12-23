import React from "react";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router";

function Signin() {
  return (
    <div className="w-[35%] h-full m-5 flex flex-col gap-5 bg-white p-5 ">
      <div className="flex justify-between mt-5">
        <div>
          <ImCross />
          <span className="text-3xl font-bold ">Login</span>
          <br />
          <span className="font-bold ">
            or{" "}
            <NavLink className="text-[#FF5200]" to="/Signup">
              create an account
            </NavLink>
          </span>
        </div>
        <img
          className="h-30 w-30"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
          alt=""
        />
      </div>
      <div className="h-15 w-full border rounded-xl flex flex-col">
        <span>Phone number</span>
        <input className="border-none" type="text" />
      </div>
      <div className="h-10 w-full bg-[#FF5200] flex justify-center items-center">
        <span>Login</span>
      </div>
      <span className='text-gray-500 font-bold text-[13px]'>By clicking on Login,I accept the <NavLink className="text-black" to="/Terms and conditions ">Terms & Conditions</NavLink> and <NavLink className="text-black" to="/privacy policy ">Privacy Policy</NavLink></span>
    </div>
  );
}

export default Signin;
