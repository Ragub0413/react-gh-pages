import React from "react";
import Container from "../Container";
import { FaEnvelope, FaFacebookF } from "react-icons/fa6";

const topNav = () => {
  return (
    // To show some social link and contact us link
    <div className="relative z-10 w-full bg-secondary-50 md:py-2">
      <Container className="flex items-center justify-between pt-1 font-roboto">
        <div className="items-center text-sm font-light text-secondary-800 md:flex">
          <p>Powered by</p>
          {/* Miescor website link */}
          <a
            target="_blank"
            href="https://www.miescor.ph/home"
            className="font-semibold hover:text-secondary-900 hover:underline md:pl-1"
          >
            MIESCOR LOGISTIC, INC.
          </a>
        </div>
        <div>
          <ul className="flex items-center">
            <li className="px-2 font-light md:px-8">
              {/* Email link */}
              <a
                href="mailto:mrquickfix@miescor.ph"
                className="items-center text-sm text-secondary-800 hover:text-secondary-900 md:flex"
              >
                <FaEnvelope className="mr-2 text-lg text-primary-500 md:px-0" />
                <p className="hidden md:flex">mrquickfix@miescor.ph</p>
              </a>
            </li>
            {/* FB link */}
            <li>
              <a target="_blank" href="https://www.facebook.com/MLIMrQuickFix">
                <FaFacebookF className="text-xl text-secondary-800 hover:text-secondary-900" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default topNav;