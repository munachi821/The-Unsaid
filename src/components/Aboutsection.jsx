import { EyeOff, HeartHandshake, PenLine } from "lucide-react";

const Aboutsection = () => {
  return (
    <section className="section-padding py-20 bg-[#141729]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-[42px] font-bold text-center mb-8 text-white">
          Where Hearts Speak{" "}
          <span className="text-[#7963e9] dark:text-[#9e75f0]">Freely</span>
        </h1>
        <div className="text-center max-w-4xl mx-auto glassmorphism dark:glassmorphism-dark rounded-3xl p-10">
          <div>
            <h3 className="text-2xl text-soft-gray mb-8">
              Sometimes the most important words are the hardest to say.
              TheUnsaid creates a bridge between hearts, allowing people to
              express what they've always wanted to tell you.
            </h3>

            <p className="text-[14px] sm:text-lg text-gray-300">
              Whether it's gratitude, an apology, a confession, or simply a kind
              thought— TheUnsaid gives voice to the emotions that often remain
              unspoken.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-20 mt-8 text-[12px] sm:text-lg text-semibold text-[#7963e9] dark:text-[#9e75f0]">
          <div className="flex flex-col items-center text-center">
            <HeartHandshake className="size-5 sm:size-7" />
            <p>Emotional Safety</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <EyeOff className="size-5 sm:size-7" />
            <p>Complete Anonymity</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <PenLine className="size-5 sm:size-7" />
            <p>Pure Expression</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
