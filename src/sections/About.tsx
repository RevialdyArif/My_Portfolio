"use client";

import { SectionHeader } from "../components/SectionHeader";
import { Card } from "../components/Card";
import Image from "next/image";
import MyPhoto from "../assets/images/revi bg.png";
import JavaScriptIcon from "../assets/icons/square-js.svg";
import HTMLIcon from "../assets/icons/html5.svg";
import CSSIcon from "../assets/icons/css3.svg";
import ReactIcon from "../assets/icons/react.svg";
import PythonIcon from "../assets/icons/python.svg";
import MySQLIcon from "../assets/icons/mysql.svg";
import GoogleColabIcon from "../assets/icons/googlecolab.svg";
import OpenCVIcon from "../assets/icons/OpenCV.svg";
import ArduinoIcon from "../assets/icons/arduino.svg";
import GithubIcon from "../assets/icons/github.svg";
import FigmaIcon from "../assets/icons/figma.svg";
import TableauIcon from "../assets/icons/tableau.svg";
import { CardHeader } from "../components/CardHeader";
import { ToolboxItems } from "../components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const tools = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "MySQL",
    iconType: MySQLIcon,
  },
  {
    title: "Google Colab",
    iconType: GoogleColabIcon,
  },
  {
    title: "HTML",
    iconType: HTMLIcon,
  },
  {
    title: "CSS",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "OpenCV",
    iconType: OpenCVIcon,
  },
  {
    title: "Arduino",
    iconType: ArduinoIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
  {
    title: "Tableau",
    iconType: TableauIcon,
  },
];

const Enthusiast = [
  {
    title: "Front-End Engineer",
    left: "50%",
    top: "30%",
  },
  {
    title: "Machine Learning Enthusiast",
    left: "5%",
    top: "5%",
  },
  {
    title: "Data Analyst Enthusiast",
    left: "50%",
    top: "5%",
  },
  {
    title: "Data Scientist Enthusiast",
    left: "10%",
    top: "35%",
  },
  {
    title: "IoT System Engineer",
    left: "45%",
    top: "75%",
  },
  {
    title: "Artificial Intelligence Enthusiast",
    left: "0%",
    top: "55%",
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPopupPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Unveiling The Chapters of Who I Am"
          description="Discover the journey behind my passions and the skills that shape my story."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <Card className="h-[330px] md:col-span-2 relative">
              <CardHeader
                title="This Is Me"
                description="Every picture tells a story, and this one is mine."
              />
              <div
                className="w-56 -mt-10 lg:-mt-12 mx-auto relative"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={MyPhoto}
                  alt="My Photo"
                  className="transition-transform transform scale-100 grayscale hover:grayscale-0 hover:scale-110"
                />
                {showPopup && (
                  <motion.div
                    className="absolute bg-gray-900 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap"
                    style={{ top: popupPosition.y + 10, left: popupPosition.x + 10 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    Hello! This is me.
                  </motion.div>
                )}
              </div>
            </Card>
            <Card className="h-[330px] p-0 flex flex-col md:col-span-3">
              <CardHeader
                title="Tech Enthusiast"
                description="Driven to innovate, learn, and make a lasting impact through technology."
                className=""
              />
              <div className="relative flex-1" ref={constrainRef}>
                {Enthusiast.map((enthusiast) => (
                  <motion.div
                    key={enthusiast.title}
                    className="inline-flex items-center bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 px-2 absolute whitespace-nowrap"
                    style={{
                      left: enthusiast.left,
                      top: enthusiast.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {enthusiast.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[330px] md:col-span-5">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools that I use to bring my ideas to life."
                className=""
              />
              <ToolboxItems
                items={tools}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={tools}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
