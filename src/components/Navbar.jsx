import unsaid_logo from "../assets/unsaid_logo.png";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    //Load saved preference or default
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const dark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDarkMode(dark);

    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <nav className=" fixed top-0 left-0 right-0 z-40 glassmorphism dark:glassmorphism-dark py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="flex items-center">
            <img
              src={unsaid_logo}
              alt="unsaid_logo"
              className="mr-1"
              width="35px"
            />
            <p className="text-xl sm:text-2xl font-semibold text-navy dark:text-soft-gray">
              TheUnsaid
            </p>
          </Link>
        </div>
        <div className="flex  items-center">
          <ul className="gap-2 text-[15px] font-medium hidden sm:flex">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors hover:bg-accent h-10 px-4 py-2 text-navy dark:text-soft-gray hover:text-violet-600 cursor-pointer"
            >
              <li>About</li>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors hover:bg-accent h-10 px-4 py-2 text-navy dark:text-soft-gray hover:text-violet-600 cursor-pointer"
            >
              <li>How It Works</li>
            </a>
          </ul>

          <div className="hidden md:flex gap-4 text-base font-semibold">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors h-10 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full cursor-pointer">
              Login
            </button>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors h-10 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-full cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </div>
          <div
            className="size-10 flex items-center justify-center gap-2 border bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full glassmorphism dark:glassmorphism-dark border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer"
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <Sun className="size-4 dark:text-violet-400" />
            ) : (
              <Moon className="size-4 dark:text-violet-400" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
