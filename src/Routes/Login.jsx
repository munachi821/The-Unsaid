import { EyeClosedIcon, EyeIcon, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Copyright from "../components/Copyright";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  function passwordShown() {
    setShowPassword((isShown) => !isShown);
  }
  const [error, setError] = useState({});

  function handleSubmit(formData) {
    let errors = {};

    const email = formData.get("email").trim();
    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!email) {
      errors.email = "enter your email";
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = "invalid email";
    }

    const password = formData.get("password");
    if (!password) {
      errors.password = "enter your password";
    }

    setError(errors);
    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully");
      console.log({
        email,
        password,
      });
    }
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
          <form action={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col">
              <div className="flex w-full justify-between items-center mb-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#f1f1f8]"
                >
                  Email
                </label>

                {error.email && (
                  <p className="text-error text-[12px] sm:text-sm">
                    {error.email}
                  </p>
                )}
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="email@example.com"
                  name="email"
                  className={`w-full h-10 placeholder:text-muted-foreground outline-0 border-0 text-[#f3f3f3] ${
                    error.email ? "focus:border-error" : "focus:border-accent2"
                  } focus:border bg-background/50 border-border/50 rounded-md pl-10 ${
                    error.email
                      ? "focus:outline-error"
                      : "focus:outline-accent2"
                  } focus:outline-2 transform focus:outline-offset-2 duration-150 text-sm`}
                  id="email"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2 w-full">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-[#f1f1f8]"
                >
                  Password
                </label>
                {error.password && (
                  <p className="text-error text-[12px] sm:text-sm">
                    {error.password}
                  </p>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create your Password"
                  name="password"
                  className={`w-full h-10 placeholder:text-muted-foreground outline-0 border-0 text-[#f3f3f3] ${
                    error.password
                      ? "focus:border-error"
                      : "focus:border-accent2"
                  } focus:border bg-background/50 border-border/50 rounded-md pl-10 ${
                    error.password
                      ? "focus:outline-error"
                      : "focus:outline-accent2"
                  } focus:outline-2 transform focus:outline-offset-2 duration-150 text-sm`}
                  id="password"
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
