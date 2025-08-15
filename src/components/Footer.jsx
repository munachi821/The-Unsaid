import unsaid_logo from "../assets/unsaid_logo.png";
import { useState } from "react";
const Footer = () => {
  const [year, setyear] = useState(new Date().getFullYear());

  return (
    <section className="section-padding py-10 bg-navy text-soft-gray">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between border-b border-[#7963e9] pb-6 flex-col sm:flex-row">
          <div className="flex mb-4 sm:mb-0">
            <img
              src={unsaid_logo}
              alt="unsaid_logo"
              className="mr-1"
              width="35px"
            />
            <p className="text-2xl font-semibold text-navy dark:text-soft-gray">
              TheUnsaid
            </p>
          </div>
          <ul className="flex gap-4 sm:gap-9 flex-col sm:flex-row text-center sm:text-left">
            <a
              href="#"
              className="text-[#626784] dark:text-[#9898b3] hover:text-[#7963e9] transition-colors"
            >
              <li>Sign Up</li>
            </a>
            <a
              href="#"
              className="text-[#626784] dark:text-[#9898b3] hover:text-[#7963e9] transition-colors"
            >
              <li>Log In</li>
            </a>
            <a
              href="#"
              className="text-[#626784] dark:text-[#9898b3] hover:text-[#7963e9] transition-colors"
            >
              <li>Privacy</li>
            </a>
            <a
              href="#"
              className="text-[#626784] dark:text-[#9898b3] hover:text-[#7963e9] transition-colors"
            >
              <li>Terms</li>
            </a>
          </ul>
        </div>
        <p className="text-center mt-6 text-sm text-gray-400">
          © {year} TheUnsaid. A safe space for honest thoughts.
        </p>
      </div>
    </section>
  );
};

export default Footer;
