import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create an amazing project together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Collaboration is where magic happens. Let’s bring our ideas to
                life and craft a masterpiece together
              </p>
            </div>
            <div>
              <a href="mailto:revialdy.arifs@gmail.com" className="inline-block">
                <button className="relative lg:-top-4 text-white bg-gray-900 inline-flex w-max px-6 h-12 items-center rounded-xl gap-2 mt-8 hover:scale-110 hover:shadow-lg transition duration-300">
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
