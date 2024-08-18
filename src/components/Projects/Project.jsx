import React from "react";
import Container from "../Container";
import ProjectList from "./Projectlist";

const Project = () => (
  <div id="project" name="project" className="relative bg-white py-24">
    <Container>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="mt-5 border-l-8 border-primary-500 pl-4 text-left font-outfit text-3xl font-semibold uppercase text-secondary-950 md:mt-0 md:text-4xl">
          Our Recent Projects
        </h1>
        <p className="mb-8 mt-2 font-roboto text-secondary-500 md:text-xl">
          Explore Our Latest Work and Achievements
        </p>
        <div className="my-8 h-[1px] w-full bg-secondary-100"></div>
      </div>
      <ProjectList />
    </Container>
  </div>
);

export default Project;
