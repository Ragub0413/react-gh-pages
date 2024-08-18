import React from "react";
import Container from "../Container";
import ServiceCard from "./ServiceCard";
import { Servicedata } from "../../data/ServiceData";

const Services = () => {
  return (
    <div id="services" name="services" className="relative bg-white py-24">
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mt-5 border-l-8 border-primary-500 pl-4 text-left font-outfit text-3xl font-semibold uppercase text-secondary-950 md:mt-0 md:text-4xl">
            We Offer High-Quality Services
          </h1>
          <p className="mb-8 mt-2 font-roboto text-secondary-500 sm:text-xl">
            Exceptional Solutions Tailored to Your Needs
          </p>
          <div className="my-8 h-[1px] w-full bg-secondary-100"></div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Servicedata.map((service, index) => (
            <ServiceCard key={index} serviceData={service} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
