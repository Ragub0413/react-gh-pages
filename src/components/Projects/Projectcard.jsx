import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import ImageModal from "./ImageModal";
import SkeletonCard from "../SkeletonLoading/SkeletonCard";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    trackVisibility: true,
    delay: 500,
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div ref={ref} className="flex h-full flex-col">
      {!inView ? (
        <SkeletonCard />
      ) : (
        <div className="relative box-border flex-grow overflow-hidden rounded-2xl border border-secondary-100 bg-white transition hover:-translate-y-2 hover:shadow-xl">
          <div className="group relative cursor-pointer" onClick={openModal}>
            <div className="h-48 w-full bg-gray-200">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full rounded-t-2xl object-cover"
                loading="lazy"
              />
            </div>
            <p className="absolute inset-0 flex items-center justify-center rounded-t-2xl bg-black bg-opacity-50 font-roboto text-sm text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              Click to view
            </p>
          </div>
          <div>
            <h1
              className="cursor-pointer p-4 font-outfit text-xl font-semibold text-secondary-700"
              onClick={openModal}
            >
              {project.name}
            </h1>
          </div>
          <div
            className="flex flex-grow cursor-pointer flex-col px-4 pb-4"
            onClick={openModal}
          >
            <p className="font-roboto text-sm text-secondary-500">Date:</p>
            <p className="font-roboto text-sm text-indigo-500">
              {project.date}
            </p>
            <p className="font-roboto text-sm text-secondary-500">Category:</p>
            <div>
              {project.category.map((cat, index) => (
                <span
                  key={index}
                  className="font-roboto text-sm text-indigo-500"
                >
                  {cat}
                  {index < project.category.length - 1 && ", "}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          images={project.images}
        />
      )}
    </div>
  );
};

export default ProjectCard;
