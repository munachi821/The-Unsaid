import { EyeClosedIcon, EyeIcon, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Copyright from "../components/Copyright";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  function passwordShown() {
    setShowPassword((isShown) => !isShown);
  }
  return (
    <section className="bg-[#f0f0f7] dark:bg-[#181c2d] h-screen w-screen pt-25 section-padding">
      <div className="max-w-4xl mx-auto flex items-center flex-col">
        <div className="mb-6">
          <h1 className="text-[#fafaf8] text-4xl sm:text-[40px] font-bold">
            Welcome <span className="text-[#7963e9]">Back!</span>
          </h1>
        </div>

        <div className="max-w-[30rem] w-full p-5 sm:p-10 glass-card dark:glass-card rounded-md">
          <form action="#" className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#f1f1f8]"
              >
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="email@gmail.com"
                  className="w-full h-10 placeholder:text-muted-foreground outline-0 border-0 text-[#f3f3f3] focus:border-accent2 focus:border bg-background/50 border-border/50 rounded-md pl-10 focus:outline-accent2 focus:outline-2 transform focus:outline-offset-2 duration-150 text-sm"
                  id="email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="password"
                className="text-sm font-medium text-[#f1f1f8]"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create your Password"
                  className="w-full h-10 placeholder:text-muted-foreground outline-0 border-0 text-[#f3f3f3] focus:border-accent2 focus:border bg-background/50 border-border/50 rounded-md pl-10 focus:outline-accent2 focus:outline-2 transform focus:outline-offset-2 duration-150 text-sm font-medium"
                  id="password"
                  required
                />
                <div
                  className="absolute right-0 bottom-0 h-full flex items-center justify-center w-10 cursor-pointer"
                  onClick={passwordShown}
                >
                  {showPassword ? (
                    <EyeIcon className="size-5 text-muted-foreground" />
                  ) : (
                    <EyeClosedIcon className="size-5 text-muted-foreground" />
                  )}
                </div>
              </div>
            </div>

            <Link
              to="/forgot-password"
              className="text-[#7963e9] transition-colors hover:text-[#7963e9]/70 w-fit"
            >
              Forgot Password?
            </Link>

            <button className="bg-[#7963e9] font-medium rounded-md py-2 hover:bg-[#7963e9]/90 text-[16.5px] text-[#141729] cursor-pointer">
              Login
            </button>

            <p className="text-center text-muted-foreground text-sm">
              Dont't have an account?{" "}
              <Link
                to="/Signup"
                className="text-[#7963e9] hover:text-[#7963e9]/90"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="mt-14 pb-2">
        <Copyright />
      </div>
    </section>
  );
};

export default Login;
