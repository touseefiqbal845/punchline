'use client';

import Link from "next/link";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Image from "next/image";

const Home = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    // <div className="h-screen flex flex-col justify-center items-center gap-4">
    //   <Link href="/dashboard">
    //     <div className="px-5 py-3 border-2 border-black rounded-lg hover:bg-gray-300">
    //       Go To Dashboard
    //     </div>
    //   </Link>
    // </div>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="w-96 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      {/* Logo */}
      {/* <div className="flex items-center justify-start mb-4">
        <div className="flex items-center">
          <div className="rounded-full bg-yellow-500 w-6 h-6 flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <h2 className="ml-2 text-2xl font-bold">
            <span className="text-gray-800">PUNCH</span>{" "}
            <span className="text-blue-500">LINE</span>
          </h2>
        </div>
      </div> */}
       <div className="w-full flex flex-row justify-justify items-center gap-2 mb-4 overflow-clip">
              <Image
                src="/assets/LOGO.png"
                alt="drone"
                width={35}
                height={35}
              />
              <div
                className="uppercase text-[25px] font-bold text-cyan-950 text-nowrap"
              >
                Punch
                <span className="underline text-cyan-700 decoration-yellow-700 pl-1">
                  Line
                </span>
              </div>
            </div>

      {/* Title */}
      <h3 className="text-gray-700 text-justify text-lg font-medium">
        Sign in to your account
      </h3>
      <p className="text-justify text-sm text-gray-500 mb-4">
        No account?{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Create one now for free
        </a>
      </p>

      {/* Form */}
      <div className="space-y-4">
        {/* Email Input */}
        <div className="relative">
          <InputText
            placeholder="Email address"
            required
            className="w-full p-3 border bg-white border-gray-300 rounded-md focus:ring-blue-400"
          />
        </div>

        {/* Password Input */}
        <div className="relative">
      <InputText
        type={passwordVisible ? "text" : "password"}
        placeholder="Password"
        required
        className="w-full p-3 border bg-white border-gray-300 rounded-md focus:ring-blue-400 pr-10"
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      >
        {passwordVisible ? (
          <FaEyeSlash size={20} />
        ) : (
          <FaEye size={20} />
        )}
      </button>
    </div>

        {/* Remember Me */}
        <div className="flex items-center">
          <input
            id="remember"
            type="checkbox"
            className="w-4 h-4  mb-3 bg-white border-gray-300 rounded text-blue-500"
          />
          <label
            htmlFor="remember"
            className="ml-2  mb-3 text-sm text-gray-700 cursor-pointer"
          >
            Remember me
          </label>
        </div>

        {/* Sign-in Button */}
        
        <Link href="/dashboard">
        <Button
          label="Sign in"
          className="w-full bg-blue-600 border text-white p-2 rounded-md font-medium hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600"
        />
        </Link>
        {/* Links */}
        <div className="text-justify mt-2">
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline block"
          >
            Forgot your password?
          </a>
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline block"
          >
            Didn't receive confirmation instructions?
          </a>
        </div>

        {/* OR Separator */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Social Buttons */}
        <Button
          label="Continue with Google"
          icon="pi pi-google"
          className="w-full bg-gray-100 text-black p-3 rounded-md mb-2 hover:bg-gray-200"
        />
        <Button
          label="Continue with Facebook"
          icon="pi pi-facebook"
          style={{ color: "#1877F2" }}
          className="w-full bg-gray-100 text-black p-3 rounded-md hover:bg-gray-200"
        />
      </div>
    </div>
  </div>
  );
}

export default Home