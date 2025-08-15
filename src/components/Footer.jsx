import unsaid_logo from "../assets/unsaid_logo.png";
import Copyright from "./Copyright";
const Footer = () => {
  return (
    <footer className="section-padding py-10 bg-navy text-soft-gray">
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
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
