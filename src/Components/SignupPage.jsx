import React, { useContext, useState } from "react";
import logo from "../assets/pngegg (70) 1.svg";
import text from "../assets/Getting Started With VR Creation.svg";
import mainimg from "../assets/Abstraction.svg";
import googlelogo from "../assets/8c030bd6bd7ee87ad41485e3c7598dd4 1.svg";
import facebooklogo from "../assets/pngegg (69) 1.svg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import TokenContext from "../context/TokenContext";
const SignupPage = () => {
  const { token, setToken } = useContext(TokenContext);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function getUserData(e) {
    e.preventDefault();
    axios
      .post("https://instagram-express-app.vercel.app/api/auth/signup", {
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        setSuccess(response.data.message);
        setToken(response.data.data.token);
        setError("");
      })
      .catch((error) => {
        setError(error.response.data.message);
        console.log(error.response.data.message);
        setSuccess("");
      });
  }

  return (
    <div className="bg-[#1A4A60] w-screen h-screen relative flex justify-center items-center">
      <div className="bg-[#1F485B] h-3/4 w-9/12 absolute rounded-lg flex drop-shadow-xl">
        <div className=" bg-transparent flex flex-col flex-none w-2/5 h-full relative">
          <img className=" w-12 h-12 mx-4 my-4" src={logo} alt="image" />
          <div className="text-slate-300 mx-4 my-1">
            <p>Getting</p>
            <p> Started With</p>
            <p> SR Creative</p>
          </div>
          <img
            className="relative z-50 bottom-20 left-28 "
            src={mainimg}
            alt=""
          />
        </div>
        <div className="flex flex-col grow bg-white h-full w-3/5 rounded-lg relative gap-3">
          <div className=" mr-3 ml-auto py-2">
            <select className="selectClass">
              <option>Eng(UK)</option>
              <option>Eng(US)</option>
              <option>Eng(IN)</option>
            </select>
            <div className="dropDownArrow"></div>
          </div>
          <h1 className="text-start mx-28 mb-4 font-extrabold">
            Create Account
          </h1>
          <div className="flex flex-row justify-center items-center mx-5">
            <div className="flex text-sm space-x-10 ">
              <div>
                <img className="inline-block mx-2 " src={googlelogo} />
                <label>Signup with Google</label>
              </div>
              <div>
                <img className="inline-block mx-2" src={facebooklogo} />
                <label>Signup with Facebook</label>
              </div>
            </div>
          </div>
          <div className="grow flex justify-center items-center gap-10">
            <form onSubmit={getUserData}>
              <label className="block uppercase  text-black text-xs  my-2">
                Full Name
              </label>
              <input
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="appearance-none block  bg-white text-black border border-[#0369a1] rounded px-4  focus:outline-none focus:bg-white my-2 w-full"
                type="text"
                placeholder="Full Name"
              ></input>
              <label className="block uppercase  text-black text-xs  my-2">
                Email Address
              </label>
              <input
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="appearance-none block  bg-white text-black border border-[#0369a1] rounded px-4  focus:outline-none focus:bg-white my-2 w-full"
                type="text"
                placeholder="Email Address"
              ></input>
              <label className="block uppercase  text-black text-xs  my-2">
                Password
              </label>
              <input
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="appearance-none block  bg-white  border border-[#0369a1] rounded px-4  focus:outline-none focus:bg-white my-2 w-full"
                type="text"
                placeholder="Password"
              ></input>
              <button className="bg-[#1F485B] hover:bg-[#1F485B] text-white  px-4 rounded focus:outline-none focus:shadow-outline my-2 w-full">
                Sign In
              </button>
              <p>Already have an account? Log In</p>
              <label className="text-red-500">{error}</label>
              <label className="text-lime-400">{success}</label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
