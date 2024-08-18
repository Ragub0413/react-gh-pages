import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FaPhone,
  FaFacebookF,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";
import Container from "./Container";
import ContactData from "../data/ContactData";
import { scroller } from "react-scroll";
import useNavigateAndScroll from "../components/hooks/useNavigateAndScroll";

const Footer = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[2];
  const navigateAndScroll = useNavigateAndScroll();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigationAndScroll = (selector) => {
    let offset = -75;
    if (isMobile) {
      offset = -20;
    }

    if (location === "projects" || location === "testimonials") {
      navigateAndScroll("/Mrquickfix/", selector);
    } else {
      scroller.scrollTo(selector, {
        duration: 800,
        smooth: true,
        offset,
        spy: true,
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="relative bg-secondary-950">
      <Container className="max-w-[900px] pb-8 pt-16">
        <div className="flex flex-col justify-between md:flex-row">
          <div>
            <p className="pb-8 font-outfit text-lg uppercase text-white">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-16 gap-y-2 font-roboto text-secondary-500 md:gap-y-4">
              <li className="py-1 hover:text-secondary-400">
                <button onClick={() => handleNavigationAndScroll("home")}>
                  Home
                </button>
              </li>
              <li className="py-1 hover:text-secondary-400">
                <button onClick={() => handleNavigationAndScroll("about")}>
                  About us
                </button>
              </li>
              <li className="py-1 hover:text-secondary-400">
                <button onClick={() => handleNavigationAndScroll("services")}>
                  Services
                </button>
              </li>
              <li className="py-1 hover:text-secondary-400">
                <button onClick={() => handleNavigationAndScroll("project")}>
                  Projects
                </button>
              </li>
              <li className="py-1 hover:text-secondary-400">
                <button
                  onClick={() => handleNavigationAndScroll("testimonials")}
                >
                  Testimonials
                </button>
              </li>
              <li className="py-1 hover:text-secondary-400">
                <button onClick={() => handleNavigationAndScroll("contact")}>
                  Contact us
                </button>
              </li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="font-outfit text-lg uppercase text-white">
              Contact Information
            </h3>
            <div className="flex items-center">
              <FaLocationDot
                size={20}
                className="text-secondary-500 hover:text-secondary-400"
              />
              <p className="my-1 mt-2 pl-4 font-roboto text-secondary-500">
                Meralco Industrial Engineering Services Corporation
                <br />
                5th Floor, Renaissance Tower 1000
                <br />
                Meralco Avenue, Ortigas Center Pasig City, Philippines 1600
              </p>
            </div>
            <div className="flex">
              <FaPhone
                size={20}
                className="text-secondary-500 hover:text-secondary-400"
              />
              <div className="flex flex-col">
                {ContactData.phoneNumbers.map((number, index) => (
                  <a
                    key={index}
                    href={`tel:${number.replace(/\s+/g, "")}`}
                    className="my-1 pl-4 font-roboto text-secondary-500 hover:underline"
                  >
                    {number}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center font-roboto text-secondary-500">
              <FaEnvelope
                size={20}
                className="text-secondary-500 hover:text-secondary-400"
              />
              <a
                href={`mailto:${ContactData.email}`}
                className="my-1 pl-4 font-roboto text-secondary-500 hover:underline"
              >
                {ContactData.email}
              </a>
            </div>
          </div>
          <div>
            <h3 className="pt-4 font-outfit text-lg uppercase text-white md:pt-0">
              Social link
            </h3>
            <div className="mt-2 flex space-x-4">
              <a
                href={ContactData.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="my-1 text-secondary-500 hover:text-secondary-400"
              >
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-secondary-900/50 py-4">
        <Container>
          <div className="text-center text-sm text-secondary-300 md:text-base">
            Copyright &copy; {currentYear}. Meralco Industrial Engineering
            Services Corporation. All rights reserved.
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;