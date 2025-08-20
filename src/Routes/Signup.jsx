import { EyeClosedIcon, EyeIcon, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Copyright from "../components/Copyright";

export default function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  function passwordShown() {
    setShowPassword((isShown) => !isShown);
  }
  const [showPassword2, setShowPassword2] = useState(false);
  function passwordShown2() {
    setShowPassword2((isShown) => !isShown);
  }

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  function validate(data) {
    let newErrors = {};

    if (!data.username.trim()) {
      newErrors.username = "Username is required";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!data.password) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!data.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  }

  //Handle input change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    //Validate while typing
    setErrors((prevErrors) => {
      const updatedData = { ...formData, [name]: value };
      return validate(updatedData);
    });
  }

  //Handle submit
  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted succesfully");

      //backend logic
      console.log(formData);
    }
  }

  //Disable button if errors or any empty fields
  const isDisabled =
    Object.keys(errors).length > 0 ||
    !formData.username ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword;

  document.body.classList.add("overflow-x-hidden");
  return (
    <section className="bg-[#f0f0f7] dark:bg-[#181c2d] h-full w-screen pt-25 section-padding ">
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Username */}
            <div className="flex flex-col">
              <div className="flex w-full justify-between items-center mb-2">
                <label
                  htmlFor="username"
                  className="text-sm font-medium text-[#f1f1f8]"
                >
                  Username
                </label>

                {errors.username && (
                  <p className="text-error text-[12px] sm:text-sm">
                    {errors.username}
                  </p>
                )}
              </div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="@username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`w-full h-10 placeholder:text-muted-foreground outline-0 border-0 text-[#f3f3f3] ${
                    errors.username
                      ? "focus:border-error"
                      : "focus:border-accent2"
                  } focus:border bg-background/50 border-border/50 rounded-md pl-10 ${
                    errors.username
                      ? "focus:outline-error"
                      : "focus:outline-accent2"
                  } focus:outline-2 transform focus:outline-offset-2 duration-150 text-sm`}
                  id="username"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between w-full mb-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#f1f1f8]"
                >
                  Email
                </label>

                {errors.email && (
                  <p className="text-error text-[12px] sm:text-sm">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full h-10 placeholder:text-muted-foreground outline-0 border-0 text-[#f3f3f3] ${
                    errors.email ? "focus:border-error" : "focus:border-accent2"
                  } focus:border bg-background/50 border-border/50 rounded-md pl-10 ${
                    errors.email
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
                {errors.password && (
                  <p className="text-error text-[12px] sm:text-sm">
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create your Password"
                  className={`w-full h-10 placeholder:text-muted-foreground outline-0 border-0 text-[#f3f3f3] ${
                    errors.password
                      ? "focus:border-error"
                      : "focus:border-accent2"
                  } focus:border bg-background/50 border-border/50 rounded-md pl-10 ${
                    errors.password
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

            <div className="flex flex-col">
              <div className="flex items-center justify-between w-full mb-2">
                <label
                  htmlFor="confirm-password"
                  className="text-sm font-medium text-[#f1f1f8]"
                >
                  Confirm Password
                </label>
                {errors.confirmPassword && (
                  <p className="text-error text-[12px] sm:text-sm">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type={showPassword2 ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your Password"
                  className={`w-full h-10 placeholder:text-muted-foreground outline-0 border-0 text-[#f3f3f3] ${
                    errors.confirmPassword
                      ? "focus:border-error"
                      : "focus:border-accent2"
                  } focus:border bg-background/50 border-border/50 rounded-md pl-10 ${
                    errors.confirmPassword
                      ? "focus:outline-error"
                      : "focus:outline-accent2"
                  } focus:outline-2 transform focus:outline-offset-2 duration-150 text-sm`}
                  id="confirm-password"
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

            {/* Submit btn */}
            <button
              className={`font-medium rounded-md py-2  text-[16.5px] text-[#141729] cursor-pointer mt-4 duration-200 transition-colors ${
                isDisabled
                  ? "bg-[#7963e9]/40 cursor-not-allowed"
                  : "bg-[#7963e9] hover:bg-[#7963e9]/90"
              }`}
              disabled={isDisabled}
              onClick={() => navigate("/Dashboard")}
              /* to="/Dashboard" */
            >
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
