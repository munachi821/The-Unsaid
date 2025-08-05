import { Link, MessageCircle, Share2, UserCheck } from "lucide-react";

const Howitworks = () => {
  return (
    <section className="section-padding py-20 bg-[#f0f0f7] dark:bg-[#181c2d]">
      <div className="max-w-6xl mx-auto h-fit">
        <h1 className="text-xl md:text-[40px] font-bold text-center mb-14 text-white">
          How <span className="text-[#7963e9]">TheUnsaid</span> Works
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          <div className="bg-white dark:bg-[#1d2030] rounded-lg border border-[#ffffff1a] px-10 py-12 flex items-center flex-col gap-5 text-center glass-card dark:glass-card relative hover:scale-105 transform transition duration-300">
            <div className="absolute top-0 w-fit left-0 right-0 ml-2 mt-2 glassmorphism !border-0 text-[#626784] dark:text-[#9898b3] px-5 py-0.5 rounded-lg">
              <p>step 1</p>
            </div>
            <div className="size-16 rounded-full text-3xl bg-accent2/20 flex items-center justify-center">
              <UserCheck className="size-8 text-accent2" />
            </div>
            <p className="dark:text-[#f1f1f8] text-[#141729] text-xl font-semibold">
              Signup
            </p>
            <p className="text-base text-[#626784] dark:text-[#9898b3]">
              Create your account in seconds
            </p>
          </div>

          <div className="bg-white dark:bg-[#1d2030] rounded-lg border border-[#ffffff1a] px-10 py-12 flex items-center flex-col gap-5 text-center glass-card dark:glass-card relative hover:scale-105 transform transition duration-300">
            <div className="absolute top-0 w-fit left-0 right-0 ml-2 mt-2 glassmorphism !border-0 text-[#626784] dark:text-[#9898b3] px-5 py-0.5 rounded-lg">
              <p>step 2</p>
            </div>
            <div className="size-16 rounded-full text-3xl bg-accent2/20 flex items-center justify-center">
              <Link className="size-8 text-accent2" />
            </div>
            <p className="dark:text-[#f1f1f8] text-[#141729] text-xl font-semibold">
              Get Your Link
            </p>
            <p className="text-base text-[#626784] dark:text-[#9898b3]">
              Receive your unique shareable link
            </p>
          </div>

          <div className="bg-white dark:bg-[#1d2030] rounded-lg border border-[#ffffff1a] px-10 py-12 flex items-center flex-col gap-5 text-center glass-card dark:glass-card relative hover:scale-105 transform transition duration-300">
            <div className="absolute top-0 w-fit left-0 right-0 ml-2 mt-2 glassmorphism !border-0 text-[#626784] dark:text-[#9898b3] px-5 py-0.5 rounded-lg">
              <p>step 3</p>
            </div>
            <div className="size-16 rounded-full text-3xl bg-accent2/20 flex items-center justify-center">
              <Share2 className="size-8 text-accent2" />
            </div>
            <p className="dark:text-[#f1f1f8] text-[#141729] text-xl font-semibold">
              Share Anywhere
            </p>
            <p className="text-base text-[#626784] dark:text-[#9898b3]">
              WhatsApp, Instagram, anywhere you want
            </p>
          </div>

          <div className="bg-white dark:bg-[#1d2030] rounded-lg border border-[#ffffff1a] px-10 py-12 flex items-center flex-col gap-5 text-center glass-card dark:glass-card relative hover:scale-105 transform transition duration-300">
            <div className="absolute top-0 w-fit left-0 right-0 ml-2 mt-2 glassmorphism !border-0 text-[#626784] dark:text-[#9898b3] px-5 py-0.5 rounded-lg">
              <p>step 4</p>
            </div>
            <div className="size-16 rounded-full text-3xl bg-accent2/20 flex items-center justify-center">
              <MessageCircle className="size-8 text-accent2" />
            </div>
            <p className="dark:text-[#f1f1f8] text-[#141729] text-xl font-semibold">
              Receive Messages
            </p>
            <p className="text-base text-[#626784] dark:text-[#9898b3]">
              Get anonymous messages and images
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howitworks;
