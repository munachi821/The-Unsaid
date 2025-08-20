import {
  Home,
  LayoutDashboard,
  LogOut,
  PanelLeft,
  Settings,
} from "lucide-react";
import unsaid_logo from "../assets/unsaid_logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [active, setActive] = useState("Dashboard");
  function openSidebar() {
    setSidebar((isopen) => !isopen);
  }

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
    <section className=" h-full w-screen bg-[#181c2d]">
      <div className="flex">
        <aside
          className={`z-50 h-screen glassmorphism-bar py-4 flex-col flex-shrink-0 overflow-x-hidden md:w-64 md:pl-4 ${
            sidebar ? "w-0 pl-0" : "w-64 pl-4"
          } transition-all duration-300`}
        >
          <div
            className={`text-white flex-col gap-3 md:flex ${
              sidebar ? "hidden" : "flex"
            } mb-6`}
          >
            <Link to="/" className="flex items-center">
              <img
                src={unsaid_logo}
                alt="unsaid_logo"
                className="mr-1"
                width="30px"
              />
              <p className="text-xl sm:text-2xl font-semibold text-navy dark:text-soft-gray">
                TheUnsaid
              </p>
            </Link>
          </div>

          <div
            className={`text-white flex-col gap-3 md:flex ${
              sidebar ? "hidden" : "flex"
            }`}
          >
            <div
              className={`flex items-center  p-2 rounded-l-md w-full cursor-pointer transition-colors duration-200 group ${
                active === "Home"
                  ? "bg-[#7963e9]/20 border-l-2 border-l-[#7963e9] text-[#7963e9]"
                  : "hover:bg-[#ffffff5e]/20"
              }`}
              onClick={() => setActive("Home")}
            >
              <Home
                className={`mr-3 ${
                  active !== "Home" ? "group-hover:text-[#7963e9]" : ""
                }`}
              />
              <p
                className={`text-sm font-medium ${
                  active !== "Home" ? "group-hover:text-[#7963e9]" : ""
                }`}
              >
                Home
              </p>
            </div>

            <div
              className={`flex items-center  p-2 rounded-l-md w-full cursor-pointer transition-colors duration-200 group ${
                active === "Dashboard"
                  ? "bg-[#7963e9]/20 border-l-2 border-l-[#7963e9] text-[#7963e9]"
                  : "hover:bg-[#ffffff5e]/20"
              }`}
              onClick={() => setActive("Dashboard")}
            >
              <LayoutDashboard
                className={`mr-3 ${
                  active !== "Dashboard" ? "group-hover:text-[#7963e9]" : ""
                }`}
              />
              <p
                className={`text-sm font-medium ${
                  active !== "Dashboard" ? "group-hover:text-[#7963e9]" : ""
                }`}
              >
                Dashboard
              </p>
            </div>

            <div
              className={`flex items-center  p-2 rounded-l-md w-full cursor-pointer transition-colors duration-200 group ${
                active === "Settings"
                  ? "bg-[#7963e9]/20 border-l-2 border-l-[#7963e9] text-[#7963e9]"
                  : "hover:bg-[#ffffff5e]/20"
              }`}
              onClick={() => setActive("Settings")}
            >
              <Settings
                className={`mr-3 font-medium ${
                  active !== "Settings" ? "group-hover:text-[#7963e9]" : ""
                }`}
              />
              <p
                className={`text-sm ${
                  active !== "Settings" ? "group-hover:text-[#7963e9]" : ""
                }`}
              >
                Settings
              </p>
            </div>
          </div>

          <div className="flex items-center  p-2 rounded-l-md w-full ml-4 cursor-pointer group hover:bg-error/10 transition-all duration-100 text-muted-foreground absolute bottom-0 left-0 right-0 mb-4">
            <LogOut className="mr-3 size-4.5 group-hover:text-red-400" />
            <p className="text-sm group-hover:text-red-400 font-medium">
              LogOut
            </p>
          </div>
        </aside>

        <nav className="h-15 w-full glass-card-sidebar flex justify-between items-center px-4">
          <div>
            <div
              className="hover:bg-[#7963e9] h-fit p-1 rounded-sm flex md:hidden w-fit"
              onClick={openSidebar}
            >
              <PanelLeft className="text-[#f1f1f8] size-4.5" />
            </div>
          </div>

          <div
            className="size-10 flex items-center justify-center gap-2 border bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full glassmorphism dark:glassmorphism-dark border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer ml-3"
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <Sun className="size-4 dark:text-violet-400" />
            ) : (
              <Moon className="size-4 dark:text-violet-400" />
            )}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Dashboard;
