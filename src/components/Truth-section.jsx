const Truth = () => {
  return (
    <section className="section-padding py-20 bg-[#141729]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center flex items-center flex-col gap-6">
          <h1 className="text-2xl md:text-5xl font-bold text-center text-white">
            Ready to hear the <span className="text-[#7963e9]">truth?</span>
          </h1>
          <p className="text-lg md:text-[21px] text-[#626784] dark:text-[#9898b3]">
            It's anonymous. It's real. It's free.
          </p>
          <a
            href="#"
            className="text-lg text-[#141729] font-medium h-10 px-12 py-5.5 flex items-center justify-center bg-[#7963e9] rounded-full transition-colors hover:bg-[#7963e9]/90 transform duration-200"
          >
            Create Your Link
          </a>
        </div>
      </div>
    </section>
  );
};
export default Truth;
