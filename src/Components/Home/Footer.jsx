import { TbSquareRoundedLetterC } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoPinterest } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io5";

function Footer() {
  return (
    <div className="bg-gray-300 flex flex-col gap-5 mt-15">
      <div className="h-fit w-full  flex justify-around   ">
        <div className="flex h-[500px] w-[70%] justify-between mt-10  ">
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <img
                src="https://i.pinimg.com/1200x/77/7f/ce/777fcedd52f716089e33baf6fc3ff1ac.jpg"
                alt="Foodhub Logo"
                className="w-10 h-10 object-contain "
              />
              <h1 className="text-2xl font-bold text-white">FoodHub</h1>
            </div>
            <div className="flex items-center gap-2">
              <TbSquareRoundedLetterC className="mt-5" />
              <span className="mt-5">2025 Foodhub Limited</span>
            </div>
          </div>
          <div>
            <span className="text-[20px] font-bold">Company</span>
            <ul className="text-gray-700 text-[17px] flex flex-col  gap-4 mt-2">
              <li> About us</li>
              <li>
                Swiggy <br /> Corporate
              </li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy One</li>
              <li>
                Swiggy <br /> Instamart{" "}
              </li>
              <li>Swiggy Dineout</li>
              <li>Minis</li>
              <li>Pyng</li>
            </ul>
          </div>
          <div>
            <span className="text-[20px] font-bold">Contact us</span>
            <ul className="text-gray-700 text-[17px] flex flex-col  gap-4 mt-2 ">
              <li>Help & Support</li>
              <li>Partner With Us</li>
              <li>Ride With Us</li>
            </ul>
            <div className="mt-20">
              <span className="text-[20px] font-bold ">Legal</span>
              <ul className="text-gray-700 text-[17px] flex flex-col  gap-4 mt-2 ">
                <li>Terms & Condition </li>
                <li>Cookie Policy</li>
                <li>Privacy policy</li>
              </ul>
            </div>
          </div>
          <div>
            <span className="text-[20px] font-bold">Available in:</span>
            <ul className="text-gray-700 text-[17px] flex flex-col  gap-4 mt-2  ">
              <li>Banglore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
            <button className="flex items-center border rounded-xl p-2  mt-5 ">
              685 Cites <IoIosArrowDown className="ml-10" />
            </button>
          </div>
          <div>
            <span className="text-[20px] font-bold">Life at Swiggy</span>
            <ul className="text-gray-700 text-[17px] flex flex-col  gap-4 mt-2 ">
              <li>Explore With Swiggy </li>
              <li>Swiggy News</li>
              <li> Snackables</li>
            </ul>
            <div className="mt-30">
              <span className="text-[20px] font-bold ">Social Links</span>
              <span className="text-gray-700 text-[20px] flex gap-3 mt-2  ">
                <RxLinkedinLogo /> <IoLogoInstagram />
                <BiLogoFacebook />
                <BiLogoPinterest />
                <IoLogoTwitter />
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-[80%] border-px border-gray-500 mx-auto" />
      <div className=" h-20 w-full  flex justify-center items-center gap-10">
        <span className="text-[28px] text-gray-800 font-bold">
          For better experience, download the Swiggy app now
        </span>
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
          alt=""
        />
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer;
