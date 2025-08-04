const Herosection = () => {
  return (
    <section className="h-screen bg-[#e7e7e7e3] dark:bg-navy pt-20 section-padding flex">
      <div className="max-w-7xl my-auto mx-auto">
        <div className="gap-8 max-w-4xl flex items-center justify-center flex-col">
          <h1 className="text-5xl md:text-7xl text-center font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Say what's been left unsaid.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 w-150 text-center">
            A safe space for honest thoughts. Receive anonymous messages through
            your personal link.
          </p>
          <div className="flex gap-4">
            <a href="#">
              <button className="text-lg font-semibold rounded-md h-10 flex items-center px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white transform transition duration-200 hover:scale-105 cursor-pointer">
                Create Your Link
              </button>
            </a>
            <a href="#">
              <button className="text-lg font-semibold h-10 rounded-md flex items-center border-2 border-indigo-600 px-8 py-4 cursor-pointer bg-background text-indigo-600 hover:bg-indigo-600 hover:text-white hover:scale-105 transform transition duration-200">
                Login
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
