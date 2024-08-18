import React, { useEffect, useState } from "react";
import Container from "./Container";
import {
  FaHouseCrack,
  FaHammer,
  FaHouseCircleCheck,
} from "react-icons/fa6";
import aboutImages from "../data/AboutSlidingImg";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [aboutImages.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
  };

  return (
    <div id="about" name="about" className="relative bg-white py-24">
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mb-8 mt-5 border-l-8 border-primary-500 pl-4 text-left font-outfit text-3xl font-semibold uppercase text-secondary-950 md:mt-0 md:text-4xl">
            About Mr. Quick Fix
          </h1>
          <div className="flex flex-col sm:flex-row md:pt-10">
            <div className="my-3 h-auto w-full px-2 py-4">
              <FaHouseCrack className="mx-auto mb-4 rounded-2xl border border-none bg-primary-100 p-3 text-5xl text-primary-500 sm:text-6xl" />
              <h3 className="pt-3 font-outfit text-secondary-700 md:mx-0 md:my-0 md:py-2 md:text-lg">
                Specializing in Home Repair and Improvements.
              </h3>
            </div>
            <div className="h-auto w-full px-2 py-4 xs:my-3">
              <FaHammer className="mx-auto mb-4 rounded-2xl border border-none bg-primary-100 p-3 text-5xl text-primary-500 sm:text-6xl" />
              <h3 className="pt-3 font-outfit text-secondary-700 md:mx-0 md:my-0 md:py-2 md:text-lg">
                Committed to Excellence and Quality Craftsmanship in Every
                Project.
              </h3>
            </div>
            <div className="h-auto w-full px-2 py-4 xs:my-3">
              <FaHouseCircleCheck className="mx-auto mb-4 rounded-2xl border border-none bg-primary-100 p-3 text-5xl text-primary-500 sm:text-6xl" />
              <h3 className="pt-3 font-outfit text-secondary-700 md:mx-0 md:my-0 md:py-2 md:text-lg">
                Your Trusted Partner for All Home Maintenance and Renovation
                Needs.
              </h3>
            </div>
          </div>
        </div>
        <div className="my-8 h-[1px] w-full bg-secondary-100"></div>
        <div className="z-10 flex flex-col md:gap-4 lg:flex-row">
          <div className="carousel relative basis-[50%]">
            {aboutImages.map((image, index) => (
              <div
                key={index}
                id={`item${index + 1}`}
                className={`carousel-item h-auto w-full ${
                  index === currentIndex ? "block" : "hidden"
                }`}
              >
                <div className="relative">
                  <img
                    src={image.slideimg}
                    alt={`Slide ${index + 1}`}
                    className="w-full rounded-2xl"
                  />
                  <div
                    className="absolute bottom-4 left-0 right-0 flex justify-center"
                    onClick={handleNext}
                  >
                    {aboutImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`mx-1 h-3 w-3 rounded-full ${
                          currentIndex === index
                            ? "bg-white/80"
                            : "bg-secondary-100 bg-opacity-50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="basis-[50%] text-pretty">
            <p className="flex pt-4 font-roboto text-sm text-secondary-500 md:pt-0 md:text-base md:[word-spacing:4px]">
              <span className="mt-1 pr-2 text-green-500"></span>
              At Mr. Quick Fix, we understand the importance of a
              well-maintained home. Our team of skilled professionals is
              dedicated to providing fast, efficient, and reliable repair
              services to ensure your home is safe, comfortable, and looking its
              best.
            </p>
            <p className="flex pt-4 font-roboto text-sm text-secondary-500 md:pt-0 md:text-base md:[word-spacing:4px]">
              <span className="mt-1 pr-2 text-green-500"></span>
              With years of experience in the industry, we pride ourselves on
              our ability to tackle any repair or renovation project, big or
              small. Whether it's a leaky faucet, a complete kitchen makeover,
              or regular maintenance tasks, we have the expertise to get the job
              done right.
            </p>
            <p className="flex pt-4 font-roboto text-sm text-secondary-500 md:pt-0 md:text-base md:[word-spacing:4px]">
              <span className="mt-1 pr-2 text-green-500"></span>
              We believe in transparency and communication, ensuring that our
              clients are informed and involved every step of the way. Our
              commitment to customer satisfaction drives us to go above and
              beyond to meet your needs and exceed your expectations.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
