const Stories = () => {
  return (
    <section className="section-padding py-20 bg-[#f0f0f7] dark:bg-[#181c2d]">
      <div className="max-w-6xl mx-auto">
        <div>
          <h1 className="text-xl md:text-[40px] font-bold text-center mb-4 text-white">
            Real Stories
          </h1>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-13">
            <div className="glass-card p-8 rounded-lg">
              <p className="text-lg italic text-[#626784] dark:text-[#9898b3] mb-4 pr-4">
                "Finally found the courage to share my feelings. TheUnsaid gave
                me a safe space to be vulnerable."
              </p>
              <p className="text-[#7963e9] text-sm">— Munachi, Student</p>
            </div>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-lg italic text-[#626784] dark:text-[#9898b3] mb-4 pr-4">
                "The anonymous messages I received helped me understand how I
                impact others. Life-changing."
              </p>
              <p className="text-[#7963e9] text-sm">— Dr Okorie, Lecturer</p>
            </div>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-lg italic text-[#626784] dark:text-[#9898b3] mb-4 pr-4">
                "Sometimes we need to hear the truth without the fear of
                judgment. This platform delivers that."
              </p>
              <p className="text-[#7963e9] text-sm">— Miracuzzy, Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
