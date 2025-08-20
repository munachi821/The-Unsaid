import { Mail } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ForgotPassword() {
  const [error, setError] = useState({});

  const [formData, setFormData] = useState({
    email: "",
  });

  function validate(data) {
    let errorMsg = {};

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!data.email.trim()) {
      errorMsg.email = "enter an email";
    } else if (!emailRegex.test(data.email)) {
      errorMsg.email = "invalid email";
    }
    return errorMsg;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    //Validate while typing
    setError((prevErrors) => {
      const updatedData = { ...formData, [name]: value };
      return validate(updatedData);
    });
  }

  //Handle submit
  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate(formData);
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted succesfully");

      //backend login
      console.log(formData);
    }
  }

  //Disable button if errors or any empty field
  const isDisabled = Object.keys(error).length > 0 || !formData.email;

  return (
    <>
      <Navbar />
      <section className="bg-[#f0f0f7] dark:bg-[#181c2d] h-screen w-screen pt-25 section-padding">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <form
            action="#"
            onSubmit={handleSubmit}
            className="max-w-[30rem] w-full p-5 sm:p-10 glass-card dark:glass-card rounded-md"
          >
            <div className="w-full rounded-md bg-[#1a203a] mb-4 text-left p-3">
              <h1 className="text-[#e4e4ee] my-1">Reset your password</h1>
              <p className="text-[#3e4880] text-sm font-medium">
                Instructions will be sent to your email on how to reset your
                password
              </p>
            </div>

            <div className="flex flex-col mb-5 ">
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
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

            <button
              className={`font-medium rounded-md py-2  text-[16.5px] text-[#141729] cursor-pointer duration-200 transition-colors w-full ${
                isDisabled
                  ? "bg-[#7963e9]/40 cursor-not-allowed"
                  : "bg-[#7963e9] hover:bg-[#7963e9]/90"
              }`}
              disabled={isDisabled}
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
