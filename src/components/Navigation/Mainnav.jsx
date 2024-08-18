import React, { useState, useEffect } from "react";
import Container from "../Container";
import { HiMenu, HiX } from "react-icons/hi";
import Mainlogo from "../../assets/Mr.QuickFixLogo.png";
import { useLocation, Link } from "react-router-dom";
import { scroller } from "react-scroll";
import useNavigateAndScroll from "../hooks/useNavigateAndScroll";

const MainNav = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[2];
  const navigateAndScroll = useNavigateAndScroll();
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "project",
        "testimonials",
        "contact",
      ];
      const scrollY = window.scrollY;

      let currentSection = "";
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const offsetTop = sectionElement.offsetTop;
          const offsetHeight = sectionElement.offsetHeight;
          if (
            scrollY >= offsetTop - 75 &&
            scrollY < offsetTop + offsetHeight - 75
          ) {
            currentSection = section;
          }
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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

  return (
    <div
      id="mainnav"
      className="sticky top-0 z-10 w-full border-b border-secondary-100 bg-white shadow-sm"
    >
      <Container className="flex items-center justify-between py-4">
        <Link
          to="/Mrquickfix/"
          onClick={() => handleNavigationAndScroll("home")}
        >
          <img
            className="h-9 cursor-pointer md:h-12"
            src={Mainlogo}
            alt="Mr. QuickFix"
          />
        </Link>
        <ul className="hidden cursor-pointer items-center font-roboto text-secondary-800 lg:flex">
          <li
            className={`ml-8 inline-block hover:text-primary-500 ${activeLink === "home" ? "text-primary-500" : ""}`}
          >
            <button onClick={() => handleNavigationAndScroll("home")}>
              Home
            </button>
          </li>
          <li
            className={`ml-8 inline-block hover:text-primary-500 ${activeLink === "about" ? "text-primary-500" : ""}`}
          >
            <button onClick={() => handleNavigationAndScroll("about")}>
              About us
            </button>
          </li>
          <li
            className={`ml-8 inline-block hover:text-primary-500 ${activeLink === "services" ? "text-primary-500" : ""}`}
          >
            <button onClick={() => handleNavigationAndScroll("services")}>
              Services
            </button>
          </li>
          <li
            className={`ml-8 inline-block hover:text-primary-500 ${activeLink === "project" ? "text-primary-500" : ""}`}
          >
            <button onClick={() => handleNavigationAndScroll("project")}>
              Projects
            </button>
          </li>
          <li
            className={`ml-8 inline-block hover:text-primary-500 ${activeLink === "testimonials" ? "text-primary-500" : ""}`}
          >
            <button onClick={() => handleNavigationAndScroll("testimonials")}>
              Testimonials
            </button>
          </li>
          <li className="ml-8 inline-block hover:text-secondary-100">
            <button onClick={() => handleNavigationAndScroll("contact")}>
              <span className="rounded-3xl bg-primary-500 px-6 py-2 text-white hover:bg-primary-400">
                Contact us
              </span>
            </button>
          </li>
        </ul>
        <div className="lg:hidden" onClick={handleClick}>
          {open ? (
            <HiX className="size-[28px] rounded-full border border-solid border-white text-secondary-600 active:bg-secondary-50 active:text-secondary-500" />
          ) : (
            <HiMenu className="size-[28px] rounded-full border border-solid border-white text-secondary-600 active:bg-secondary-50 active:text-secondary-500" />
          )}
        </div>
      </Container>

      {/* Mobile Menu */}
      <ul
        className={`${
          open ? "block" : "hidden"
        } bg-tertiary absolute flex w-full cursor-pointer flex-col border-b border-secondary-100 bg-white font-roboto text-secondary-950 shadow-sm`}
      >
        <li
          className={`mx-8 flex justify-center border-b border-secondary-200 py-2 ${activeLink === "home" ? "text-primary-500" : ""} active:bg-secondary-50 active:text-primary-500`}
          onClick={handleClose}
        >
          <Link onClick={() => handleNavigationAndScroll("home")}>Home</Link>
        </li>
        <li
          className={`mx-8 flex justify-center border-b border-secondary-200 py-2 ${activeLink === "about" ? "text-primary-500" : ""} active:bg-secondary-50 active:text-primary-500`}
          onClick={handleClose}
        >
          <Link onClick={() => handleNavigationAndScroll("about")}>
            About us
          </Link>
        </li>
        <li
          className={`mx-8 flex justify-center border-b border-secondary-200 py-2 ${activeLink === "services" ? "text-primary-500" : ""} active:bg-secondary-50 active:text-primary-500`}
          onClick={handleClose}
        >
          <Link onClick={() => handleNavigationAndScroll("services")}>
            Services
          </Link>
        </li>
        <li
          className={`mx-8 flex justify-center border-b border-secondary-200 py-2 ${activeLink === "project" ? "text-primary-500" : ""} active:bg-secondary-50 active:text-primary-500`}
          onClick={handleClose}
        >
          <Link onClick={() => handleNavigationAndScroll("project")}>
            Projects
          </Link>
        </li>
        <li
          className={`mx-8 flex justify-center border-b border-secondary-200 py-2 ${activeLink === "testimonials" ? "text-primary-500" : ""} active:bg-secondary-50 active:text-primary-500`}
          onClick={handleClose}
        >
          <Link onClick={() => handleNavigationAndScroll("testimonials")}>
            Testimonials
          </Link>
        </li>
        <li className="mx-auto py-4" onClick={handleClose}>
          <Link onClick={() => handleNavigationAndScroll("contact")}>
            <button className="rounded-3xl bg-primary-500 px-6 py-2 text-white hover:bg-primary-400">
              Contact us
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
