import React, { useState, useEffect, useRef } from "react";
import {
  FaTachometerAlt,
  FaProjectDiagram,
  FaCogs,
  FaUserPlus,
  FaUserCircle,
  FaSignOutAlt,
  FaBars,
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaRegComments,
  FaPhoneAlt,
  FaChartLine,
  FaSpinner,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoIosArrowBack,
} from "react-icons/io";
import Mainlogo from "../../../assets/Mr.QuickFixLogo.png";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const projectRef = useRef(null);
  const contentRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
      setIsSidebarOpen(false);
    } else {
      setIsMobile(false);
      setIsSidebarOpen(true);
    }
  };

  useEffect(() => {
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 z-50 h-full transform border-r bg-white ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between bg-white p-4">
          <img src={Mainlogo} alt="logo" className="h-10" />
          {isMobile && (
            <button onClick={toggleSidebar} className="text-secondary-950">
              <IoIosArrowBack size={24} />
            </button>
          )}
        </div>
        <div className="px-4 py-6">
          <ul className="space-y-4 font-outfit text-secondary-950">
            <li className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-secondary-100">
              <FaTachometerAlt />
              <span>Dashboard</span>
            </li>
            <li>
              <div
                onClick={() => toggleDropdown("projects")}
                className="flex cursor-pointer items-center justify-between rounded-lg p-2 hover:bg-secondary-100"
              >
                <div className="flex items-center space-x-2">
                  <FaProjectDiagram />
                  <span>Projects</span>
                </div>
                {openDropdown === "projects" ? (
                  <IoMdArrowDropup />
                ) : (
                  <IoMdArrowDropdown />
                )}
              </div>
              <div
                ref={projectRef}
                className={`transition-max-height overflow-hidden duration-300 ease-in-out ${
                  openDropdown === "projects"
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="ml-6 mt-2 space-y-2">
                  <li className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-secondary-100">
                    <FaSpinner />
                    <span>On Process</span>
                  </li>
                  <li className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-secondary-100">
                    <FaChartLine />
                    <span>On Progress</span>
                  </li>
                  <li className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-secondary-100">
                    <FaCheckCircle />
                    <span>Completed</span>
                  </li>
                  <li className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-secondary-100">
                    <FaTimesCircle />
                    <span>Cancelled</span>
                  </li>
                  <li className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-secondary-100">
                    <FaChartLine />
                    <span>Chart</span>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div
                onClick={() => toggleDropdown("content")}
                className="flex cursor-pointer items-center justify-between rounded-lg p-2 hover:bg-secondary-100"
              >
                <div className="flex items-center space-x-2">
                  <FaCogs />
                  <span>Content Management</span>
                </div>
                {openDropdown === "content" ? (
                  <IoMdArrowDropup />
                ) : (
                  <IoMdArrowDropdown />
                )}
              </div>
              <div
                ref={contentRef}
                className={`transition-max-height overflow-hidden duration-300 ease-in-out ${
                  openDropdown === "content"
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="ml-6 mt-2 space-y-2">
                  <li className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-secondary-100">
                    <FaHome />
                    <span>Home</span>
                  </li>
                  <li className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-secondary-100">
                    <FaInfoCircle />
                    <span>About us</span>
                  </li>
                  <li className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-secondary-100">
                    <FaServicestack />
                    <span>Services</span>
                  </li>
                  <li className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-secondary-100">
                    <FaProjectDiagram />
                    <span>Projects</span>
                  </li>
                  <li className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-secondary-100">
                    <FaRegComments />
                    <span>Testimonials</span>
                  </li>
                  <li className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-secondary-100">
                    <FaPhoneAlt />
                    <span>Contact us</span>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-secondary-100">
              <FaUserPlus />
              <span>Add Account</span>
            </li>
            <li className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-secondary-100">
              <FaUserCircle />
              <span>My Profile</span>
            </li>
            <li className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-secondary-100">
              <FaSignOutAlt />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      {isMobile && !isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="absolute left-2 top-[10px] z-40 rounded-md bg-white p-2 text-secondary-950"
        >
          <FaBars size={24} />
        </button>
      )}
    </>
  );
};

export default Sidebar;
