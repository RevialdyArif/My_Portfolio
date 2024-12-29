import FireDetectionCV from "../assets/images/firedetectioncv.jpg";
import RobotLele from "../assets/images/robotlele.jpg";
import AquaSanity from "../assets/images/aquasanity.png";
import Image from "next/image";
import CheckCircleIcon from "../assets/icons/check-circle.svg";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import grainImage from "../assets/images/grain.jpg";

const portfolioProjects = [
  {
    id: 1, // Tambahkan ID unik
    company: "Computer Vision",
    year: "2024",
    title: "Fire Detection System With Esp 32",
    results: [
      { title: "Developed real-time fire detection with OpenCV and ESP32" },
      { title: "Implemented MQTT for data communication." },
      { title: "Programmed using Wokwi and Python." },
    ],
    link: "https://github.com/RevialdyArif/Fire-Detection",
    image: FireDetectionCV,
  },
  {
    id: 2,
    company: "Robotics",
    year: "2024",
    title: "Line Follower and FireFighter Robot",
    results: [
      { title: "Designed and developed the electrical wiring." },
      { title: "Created the robot program using Arduino IDE" },
    ],
    link: "https://github.com/RevialdyArif/Line-Follower-and-Firefighter-Robot",
    image: RobotLele,
  },
  {
    id: 3,
    company: "Programming",
    year: "2023",
    title: "Aqua Sanity Desktop App",
    results: [
      { title: "Built a desktop application for clean water tracking." },
      { title: "Developed using object-oriented programming." },
      {
        title: "Utilized Java for development and SQL for database management.",
      },
    ],
    link: "https://github.com/RevialdyArif/AquaSanity",
    image: AquaSanity,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Things I’ve Built
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          My Latest Work
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          This is some of my project that I’ve done and currently working on.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.id} // Gunakan ID unik
              className="bg-gray-800 rounded-3xl sticky top-20 z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 
              after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 
              lg:pt-16 lg:px-20 after:pointer-events-none"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm
                  text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, resultIndex) => (
                      <li
                        key={resultIndex}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6 flex-shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 hover:bg-gray-900 hover:text-white hover:scale-110 hover:shadow-lg transition duration-300 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Open Project</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:h-full lg:absolute lg:w-auto lg:max-w-none rounded-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
