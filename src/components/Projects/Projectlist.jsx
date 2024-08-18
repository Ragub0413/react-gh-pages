import React from "react";
import { NavLink as Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import ProjectCard from "./Projectcard";
import { ProjectData } from "../../data/ProjectDetails";

const Projectlist = () => {
  const latestProjects = ProjectData.sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  ).slice(0, 6);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {latestProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-8 flex justify-center text-center">
        <Link
          to="/Mrquickfix/projects/"
          onClick={handleScrollToTop}
          className="flex items-center rounded-3xl bg-primary-500 text-white hover:bg-primary-400"
        >
          <div className="flex items-center px-5 py-3 text-sm transition hover:translate-x-2 md:px-6 md:py-4 md:text-base">
            See more projects
            <PiArrowRightLight className="ml-2" size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projectlist;
