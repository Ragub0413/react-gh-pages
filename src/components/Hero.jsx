import React, { useEffect, useState } from "react";
import Container from "./Container";
import Aos from "aos";
import "aos/dist/aos.css";
import Background from "../assets/Background.png";
import { PiArrowRightLight } from "react-icons/pi";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = Background;
    img.onload = () => {
      setLoading(false);
      Aos.init();
    };
  }, []);

  return (
    <div id="home" name="home" className="relative flex h-screen w-full items-center justify-center">
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-200">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      <div
        className={`fixed inset-0 -z-10 bg-cover bg-fixed bg-center bg-no-repeat ${loading ? "hidden" : "block"}`}
        data-aos="zoom-out"
        data-aos-easing="ease-out-sine"
        data-aos-duration="800"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      {!loading && (
        <Container className="fixed h-[50vh] font-outfit">
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h1 className="text-center text-4xl font-semibold uppercase text-white md:text-6xl lg:text-7xl">
              Leave the Repairs to Us
            </h1>
            <h2 className="pt-1 text-center font-outfit text-lg text-white md:text-xl lg:text-2xl">
              Professional Care for Your Home
            </h2>
            <h2 className="pb-2 text-center font-outfit font-light text-white md:text-lg lg:pb-4 lg:text-xl">
              When it comes to home repairs, you deserve a service that is both
              reliable and professional.
            </h2>
            <div className="mx-auto my-6 flex">
              <button className="flex items-center rounded-3xl bg-primary-500 font-roboto text-white hover:bg-primary-400">
                <div className="flex items-center px-5 py-3 text-sm transition hover:translate-x-2 md:px-6 md:py-4 md:text-base">
                  Schedule your free consultation
                  <PiArrowRightLight className="ml-2" size={20} />
                </div>
              </button>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Hero;
