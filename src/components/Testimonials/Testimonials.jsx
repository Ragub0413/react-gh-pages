import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import { NavLink as Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import Container from "../Container";
import customerFeedback from "../../data/CustomerFeedbackData";

const TestimonialCard = lazy(() => import("./testimonialsCard"));

const Testimonials = () => {
  const testimonialsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = Math.ceil(customerFeedback.length / testimonialsPerPage);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsPerPage - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, currentPage]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getCurrentPageFeedback = () => {
    const startIndex = currentPage * testimonialsPerPage;
    const endIndex = startIndex + testimonialsPerPage;
    return customerFeedback.slice(startIndex, endIndex);
  };

  return (
    <div
      id="testimonials"
      name="testimonials"
      className="relative bg-white py-24"
    >
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mt-5 border-l-8 border-primary-500 pl-4 text-left font-outfit text-3xl font-semibold uppercase text-secondary-950 md:mt-0 md:text-4xl">
            What our clients say
          </h1>
          <p className="mb-8 mt-2 font-roboto text-secondary-500 md:text-xl">
            Hear Directly from Those We've Served
          </p>
          <div className="my-8 h-[1px] w-full bg-secondary-100"></div>
        </div>

        {/* Carousel */}
        <div className="border-box relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-[1] hidden h-full w-28 bg-gradient-to-r from-white/90 to-transparent md:block"></div>
          <div className="pointer-events-none absolute right-0 top-0 z-[1] hidden h-full w-28 bg-gradient-to-l from-white/90 to-transparent md:block"></div>

          <div className="relative mx-auto max-w-2xl rounded-2xl py-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {getCurrentPageFeedback().map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Suspense
                    fallback={
                      <span className="loading loading-spinner loading-lg"></span>
                    }
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </Suspense>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="mt-4 flex justify-center">
          {getCurrentPageFeedback().map((_, index) => (
            <div
              onClick={() => setCurrentIndex(index)}
              key={index}
              className={`mx-1 h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ease-in-out ${
                currentIndex === index ? "bg-primary-500" : "bg-secondary-200"
              }`}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center text-center">
          <Link
            to="/Mrquickfix/testimonials/"
            onClick={handleScrollToTop}
            className="flex items-center rounded-3xl bg-primary-500 text-white hover:bg-primary-400"
          >
            <div className="flex items-center px-5 py-3 text-sm transition hover:translate-x-2 md:px-6 md:py-4 md:text-base">
              See more testimonials
              <PiArrowRightLight className="ml-2" size={20} />
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
