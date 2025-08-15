import { EyeClosedIcon, EyeIcon, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Copyright from "../components/Copyright";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  function passwordShown() {
    setShowPassword((isShown) => !isShown);
  }
  const [showPassword2, setShowPassword2] = useState(false);
  function passwordShown2() {
    setShowPassword2((isShown) => !isShown);
  }
  return (
    <section className="bg-[#f0f0f7] dark:bg-[#181c2d] h-full w-screen pt-25 section-padding">
      <div className="max-w-4xl mx-auto flex items-center flex-col">
        <div className="flex items-center flex-col gap-2 mb-6">
          <h1 className="text-[#fafaf8] text-4xl sm:text-[40px] font-bold">
            Join <span className="text-[#7963e9]">The Unsaid!</span>
          </h1>
          <p className="text-sm text-[#ffffffce]">
            create your anonymous message link
          </p>
        </div>

        <div className="max-w-[30rem] w-full p-5 sm:p-10 glass-card dark:glass-card rounded-md">
          <form action="#" className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="username"
                className="text-sm font-medium text-[#f1f1f8]"
              >
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="@username"
                  className="w-full h-10 placeholder:text-muted-foreground outline-0 border-0 text-[#f3f3f3] focus:border-accent2 focus:border bg-background/50 border-border/50 rounded-md pl-10 focus:outline-accent2 focus:outline-2 transform focus:outline-offset-2 duration-150 text-sm"
                  id="username"
                  required
                />
              </div>
            </div>

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
                  className="w-full h-10 placeholder:text-muted-foreground outline-0 border-0 text-[#f3f3f3] focus:border-accent2 focus:border bg-background/50 border-border/50 rounded-md pl-10 focus:outline-accent2 focus:outline-2 transform focus:outline-offset-2 duration-150 text-sm"
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

            <div className="flex flex-col gap-3">
              <label
                htmlFor="confirm-password"
                className="text-sm font-medium text-[#f1f1f8]"
              >
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Confirm your Password"
                  className="w-full h-10 placeholder:text-muted-foreground outline-0 border-0 text-[#f3f3f3] focus:border-accent2 focus:border bg-background/50 border-border/50 rounded-md pl-10 focus:outline-accent2 focus:outline-2 transform focus:outline-offset-2 duration-150 text-sm"
                  id="confirm-password"
                  required
                />
                <div
                  className="absolute right-0 bottom-0 h-full flex items-center justify-center w-10 cursor-pointer"
                  onClick={passwordShown2}
                >
                  {showPassword2 ? (
                    <EyeIcon className="size-5 text-muted-foreground" />
                  ) : (
                    <EyeClosedIcon className="size-5 text-muted-foreground" />
                  )}
                </div>
              </div>
            </div>

            <button className="bg-[#7963e9] font-medium rounded-md py-2 hover:bg-[#7963e9]/90 text-[16.5px] text-[#141729] cursor-pointer mt-4">
              Create Account
            </button>

            <p className="text-center text-muted-foreground text-sm">
              Already have an account?{" "}
              <Link to="/Login" className="text-[#7963e9]">
                Log in
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
}
