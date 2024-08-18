import React, { useState, lazy, Suspense } from "react";
import customerFeedback from "../../data/CustomerFeedbackData";
import Container from "../Container";

const TestimonialCard = lazy(() => import("./testimonialsCard"));

const AllTestimonials = () => {
  const testimonialsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(customerFeedback.length / testimonialsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
    });
  };

  const getCurrentPageFeedback = () => {
    const startIndex = (currentPage - 1) * testimonialsPerPage;
    const endIndex = startIndex + testimonialsPerPage;
    return customerFeedback.slice(startIndex, endIndex);
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
    <div className="bg-white py-4">
      <Container className="min-w-fit">
        <div className="flex flex-col items-center justify-center pt-24 text-center">
          <h1 className="mt-5 border-l-8 border-primary-500 pl-4 text-left font-outfit text-3xl font-semibold uppercase text-secondary-950 md:mt-0 md:text-4xl">
            All Testimonials
          </h1>
          <p className="mt-2 text-center font-roboto text-secondary-500 md:text-lg">
            Hear Directly from All Our Clients
          </p>
          <div className="my-8 h-[1px] w-full bg-secondary-100"></div>
        </div>

        <div className="flex items-center justify-center rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {getCurrentPageFeedback().map((testimonial) => (
              <Suspense
                key={testimonial.id}
                fallback={
                  <span className="loading loading-spinner loading-lg"></span>
                }
              >
                <TestimonialCard testimonial={testimonial} />
              </Suspense>
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
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

export default AllTestimonials;
