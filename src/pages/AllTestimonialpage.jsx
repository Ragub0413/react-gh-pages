import React, { useEffect } from "react";
import { Layout } from "../components/Layout";
import AllTestimonials from "../components/Testimonials/AllTestimonials";
import DividerServices from "../components/dividerServices";

const AllTestimonialpage = () => {
  useEffect(() => {
    document.title = "Mr. Quick Fix | Testimonials";
  }, []);

  return (
    <Layout>
      <AllTestimonials />
      <DividerServices />
    </Layout>
  );
};

export default AllTestimonialpage;
