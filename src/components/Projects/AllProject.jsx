import React, { useState } from "react";
import { ProjectData } from "../../data/ProjectDetails";
import ProjectCard from "../Projects/Projectcard";
import Container from "../Container";

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Latest");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 20;
  const categories = [
    "Latest",
    "Fits-out",
    "Electrical Works",
    "Kitchen and Bath Renovation",
    "Aircon Services",
    "Door and Window Repairs",
    "Outdoor and Landscaping",
    "Household Cleaning Services",
  ];

  const sortedProjects = ProjectData.sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );
  const filteredProjects =
    selectedCategory === "Latest"
      ? sortedProjects
      : sortedProjects.filter((project) =>
          project.category.includes(selectedCategory),
        );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
    setIsDropdownOpen(false);
  };

  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  const getCurrentPageProjects = () => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return filteredProjects.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    const groupStart = Math.floor((currentPage - 1) / 3) * 3;
    const groupEnd = Math.min(groupStart + 3, totalPages);
    return Array.from(
      { length: groupEnd - groupStart },
      (_, index) => groupStart + 1 + index,
    );
  };

  return (
    <div className="h-auto bg-white py-24">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-5 border-l-8 border-primary-500 py-1 pl-4 text-left font-outfit text-3xl font-semibold uppercase text-secondary-950 md:mt-0 md:text-4xl">
            All Projects
          </h1>
          <p className="mt-2 text-center font-roboto text-secondary-500 md:text-lg">
            A showcase of our excellence in every project.
          </p>
        </div>
        <div className="relative inline-block pt-4 text-left">
          <button
            type="button"
            onClick={toggleDropdown}
            className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 font-roboto text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Filter: {selectedCategory}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.98l3.71-3.75a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div
              className="absolute left-0 z-[5] mt-2 w-56 origin-top-left rounded-md bg-white font-roboto shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 ${
                      selectedCategory === category ? "bg-gray-100" : ""
                    }`}
                    role="menuitem"
                    tabIndex="-1"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="my-8 h-[1px] w-full bg-secondary-100"></div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {getCurrentPageProjects().map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mb-24 mt-14 flex justify-center border-b border-t py-2 md:text-sm">
          {currentPage > 1 && (
            <>
              <button
                className="mx-[3px] px-[5px] md:mx-1 md:px-3 md:py-1"
                onClick={() => handleClick(1)}
              >
                First
              </button>
              <button
                className="mx-[3px] px-[5px] md:mx-1 md:px-3 md:py-1"
                onClick={() => handleClick(currentPage - 1)}
              >
                Prev
              </button>
            </>
          )}
          {getPaginationGroup().map((pageNumber) => (
            <button
              key={pageNumber}
              className={`mx-[3px] rounded px-[5px] md:mx-1 md:px-3 md:py-1 ${
                currentPage === pageNumber ? "bg-secondary-200" : ""
              }`}
              onClick={() => handleClick(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
          {currentPage < totalPages && (
            <>
              <button
                className="mx-[3px] px-[5px] md:mx-1 md:px-3 md:py-1"
                onClick={() => handleClick(currentPage + 1)}
              >
                Next
              </button>
              <button
                className="mx-[3px] px-[5px] md:mx-1 md:px-3 md:py-1"
                onClick={() => handleClick(totalPages)}
              >
                Last
              </button>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AllProjects;
