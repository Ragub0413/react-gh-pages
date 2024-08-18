import React, { useEffect } from "react";
import Error from "../assets/ErrorIMG.svg";
import { FaArrowLeftLong } from "react-icons/fa6";

const Notfoundpage = () => {
  useEffect(() => {
    document.title = "404 Page Not Found";
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-secondary-50 px-4">
      <div className="text-center">
        <img src={Error} alt="Error" className="mx-auto mb-8 w-full" />
        <h1 className="mb-4 text-4xl font-bold">Page Not Found</h1>
        <p className="mb-8 text-xl">
          Sorry, the page you are looking for does not exist.
        </p>
        <div className="flex justify-center">
          <a
            href="/"
            className="rounded-xl bg-primary-500 px-4 py-2 font-bold text-white flex items-center"
          >
            <FaArrowLeftLong className="mr-2 inline-block" size={16} />
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Notfoundpage;
