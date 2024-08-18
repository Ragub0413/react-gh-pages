import React, { useState, useEffect } from "react";
import Container from "../Container";
import {
  FaUserGear,
  FaRegEyeSlash,
  FaRegEye,
  FaLock,
  FaEnvelope,
} from "react-icons/fa6";
import Icon from "../../assets/Mr.QuickFixLogo.png";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [greeting, setGreeting] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "Good Morning!";
    } else if (currentHour < 18) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  };

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  return (
    <div className="h-screen bg-secondary-50">
      <Container className="flex h-full items-center justify-center">
        <div className="grid w-full max-w-4xl grid-cols-1 md:grid-cols-2">
          <div className="relative flex justify-center overflow-hidden rounded-t-3xl bg-gradient-to-r from-primary-500 to-primary-400 p-12 md:order-2 md:rounded-l-none md:rounded-r-3xl md:bg-primary-500">
            <div className="flex flex-col items-center">
              <img
                src={Icon}
                alt="Mr. Quick Fix Icon"
                className="z-10 w-[200px] rounded-3xl bg-white px-2 py-4"
              />
              <h1 className="py-2 text-center font-roboto text-3xl font-semibold text-white">
                Welcome, {greeting}
              </h1>
            </div>
            <div className="absolute bottom-3 left-3 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-primary-400 opacity-20"></div>
            <div className="absolute -top-10 left-1/2 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-primary-400 opacity-20"></div>
          </div>
          <div className="flex justify-center rounded-b-3xl bg-white px-4 py-12 md:order-1 md:rounded-l-3xl md:rounded-r-none md:p-12">
            <form className="w-full font-roboto">
              <div className="flex flex-col items-center">
                <FaUserGear className="text-5xl" />
                <h1 className="pt-4 font-roboto text-3xl font-semibold">
                  Admin Log In
                </h1>
                <div className="mt-4 flex w-full items-center rounded-2xl border border-secondary-500 p-2">
                  <FaEnvelope className="mx-2 text-lg text-primary-500" />
                  <input
                    className="w-full border-l border-secondary-200 pl-2 outline-none"
                    type="email"
                    required
                    placeholder="Email:"
                  />
                </div>
                <div className="mt-4 flex w-full items-center rounded-2xl border border-secondary-500 p-2">
                  <FaLock className="mx-2 text-lg text-primary-500" />
                  <input
                    className="w-full border-l border-secondary-200 pl-2 outline-none"
                    type={passwordVisible ? "text" : "password"}
                    required
                    placeholder="Password:"
                  />
                  {passwordVisible ? (
                    <FaRegEye
                      className="mx-2 cursor-pointer text-xl text-secondary-500"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <FaRegEyeSlash
                      className="mx-2 cursor-pointer text-xl text-secondary-500"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
                <div className="w-full text-end">
                  <button className="pt-1 text-sm text-indigo-500 hover:underline">
                    Forgot Password
                  </button>
                </div>
                <button className="mt-4 w-full rounded-2xl bg-primary-500 p-2 text-white hover:bg-primary-400">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
