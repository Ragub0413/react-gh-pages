import React from "react";
import Container from "./Container";
import DividerIMG from "../assets/DividerIMG.jpg";

const DividerServices = () => {
  return (
    // Divider section after services section shown to make user contact us more easily
    <div className="relative">
      <div
        className="-z-10 bg-cover bg-center bg-no-repeat py-[120px]"
        style={{ backgroundImage: `url(${DividerIMG})` }}
      >
        <div className="absolute inset-0 bg-secondary-500 opacity-50"></div>
        <Container className="relative">
          <h1 className="text-center font-outfit text-3xl font-semibold text-white md:text-5xl">
            Ready to transform your vision into reality?
          </h1>
          <p className="text-center text-white md:text-lg">
            Reach out to us for a free consultation.
          </p>
          <div className="flex justify-center">
            <button className="mt-4 rounded-3xl bg-primary-500 px-6 py-2 font-roboto text-sm text-white hover:bg-primary-400 md:text-base">
              Contact us now
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default DividerServices;
