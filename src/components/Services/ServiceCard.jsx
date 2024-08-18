import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import SkeletonServiceCard from "../SkeletonLoading/SkeletonCard";

const ServiceCard = ({ serviceData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    trackVisibility: true,
    delay: 500,
  });

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const maxLength = 200;
  const shouldTruncate = serviceData.description.length > maxLength;

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "... ";
  };

  return (
    <div
      ref={ref}
      className="rounded-2xl bg-white shadow-md"
    >
      {!inView ? (
        <SkeletonServiceCard />
      ) : (
        <>
          <div className="m-w-fit h-48 rounded-t-2xl bg-gray-200">
            <img
              src={serviceData.image}
              alt={serviceData.title}
              className="h-full w-full rounded-t-2xl object-cover"
              loading="lazy"
            />
          </div>
          <h1 className="px-4 py-2 text-center font-outfit text-xl font-semibold text-secondary-700">
            {serviceData.title}
          </h1>
          <div className="h-[1px] w-full bg-secondary-100 px-4"></div>
          <p className="px-4 py-2 pb-4 font-roboto text-sm text-secondary-500">
            {isExpanded
              ? serviceData.description
              : truncateText(serviceData.description, maxLength)}
            {shouldTruncate && (
              <button
                className="relative font-roboto text-sm font-semibold text-primary-500 hover:underline focus:outline-none"
                onClick={toggleExpanded}
              >
                {isExpanded ? "See less" : "See more"}
              </button>
            )}
          </p>
        </>
      )}
    </div>
  );
};

export default ServiceCard;
