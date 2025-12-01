"use client";

import { SectionHeader } from "../components/SectionHeader";
import { motion } from "framer-motion";
import StarIcon from "../assets/icons/star.svg";

const experiences = [
  {
    role: "Software Integration and Development",
    company: "INFINITIGROUP",
    period: "Feb 2025 - Present",
    location: "Indonesia",
    type: "Internship",
    description:
      "Developed and integrated industrial automation software with AMR, focusing on real-time monitoring, robot control, and smart automation systems.",
    achievements: [
      "Handled industrial automation projects for TMMIN, ISUZU, AVIAN, and other major clients.",
      "Developed I-SPARX Super App integrating Andon System, IoT Monitoring, Robot Monitoring, and Calling System.",
      "Built real-time robot monitoring and warehouse management systems to improve operational efficiency.",
      "Deployed and managed cloud services using Docker for scalable industrial applications.",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "Docker",
      "Git",
      "Robot Control Systems",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Qwords Cloud Web Hosting Indonesia x Rakamin Academy",
    period: "Jan 2025 - Jan 2025",
    location: "Remote",
    type: "Project-Based Virtual Internship",
    description:
      "Participated in a project-based virtual internship as a Full Stack Developer, focusing on real-world development workflows and problem-solving.",
    achievements: [
      "Completed fullstack capstone project applying frontend and backend development skills.",
      "Gained hands-on experience with real-world Full Stack Developer workflows.",
      "Reviewed digital marketing concepts through structured assessment tests.",
      "Strengthened problem-solving and software development best practices.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Full Stack Development",
      "Capstone Project",
      "Problem Solving",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container">
        <SectionHeader
          eyebrow="Career Journey"
          title="Professional Experience"
          description="Explore my professional journey and the impact I've made along the way."
        />

        <div className="mt-16 max-w-5xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-sky-500 to-emerald-500"></div>

            {/* Map through experiences */}
            {experiences.map((experience, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`relative ${idx < experiences.length - 1 ? "mb-20" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-[24px] top-8 w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-sky-400 ring-4 ring-gray-900 z-10 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                </div>

                {/* Main Content Card */}
                <div className="md:ml-20 bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm overflow-hidden group hover:shadow-2xl hover:shadow-emerald-500/10">
                  {/* Decorative gradient border on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative p-8 md:p-10">
                    {/* Header with Company Badge */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                      <div className="flex-1">
                        {/* Role Title */}
                        <motion.h3
                          className="font-serif text-2xl md:text-3xl lg:text-4xl mb-3"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <span className="bg-gradient-to-r from-emerald-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                            {experience.role}
                          </span>
                        </motion.h3>

                        {/* Company Name */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 mb-4 flex-wrap"
                        >
                          <p className="text-xl md:text-2xl text-white font-bold">
                            {experience.company}
                          </p>
                          <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 text-gray-900 shadow-lg shadow-emerald-500/20">
                            {experience.type}
                          </span>
                        </motion.div>

                        {/* Meta Info */}
                        <motion.div
                          className="flex flex-wrap items-center gap-5 text-sm text-white/60"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center gap-2 group/item">
                            <svg className="w-5 h-5 text-emerald-400 group-hover/item:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-medium">{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-2 group/item">
                            <svg className="w-5 h-5 text-sky-400 group-hover/item:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="font-medium">{experience.location}</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Description with decorative element */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                      className="mb-8 relative"
                    >
                      <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-500/50 to-transparent rounded-full"></div>
                      <p className="text-white/70 leading-relaxed text-xs md:text-sm lg:text-base pl-4">
                        {experience.description}
                      </p>
                    </motion.div>

                    {/* Key Achievements Grid */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                      className="mb-8"
                    >
                      <h4 className="text-sm font-bold text-white/90 mb-5 flex items-center gap-2 uppercase tracking-wider">
                        <StarIcon className="w-5 h-5 text-emerald-400" />
                        Key Achievements
                      </h4>
                      <div className="grid gap-4">
                        {experience.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 group/achievement border border-white/5 hover:border-white/10"
                          >
                            <div className="mt-1 flex-shrink-0">
                              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-500/20 to-sky-500/20 flex items-center justify-center border border-emerald-500/30 group-hover/achievement:scale-110 transition-transform">
                                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </div>
                            <span className="text-white/80 leading-relaxed text-xs md:text-sm lg:text-base flex-1">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Technologies Section */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      viewport={{ once: true }}
                      className="pt-6 border-t border-white/10"
                    >
                      <h4 className="text-sm font-bold text-white/90 mb-5 uppercase tracking-wider flex items-center gap-2">
                        <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {experience.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.2, delay: 1.0 + i * 0.05 }}
                            viewport={{ once: true }}
                            className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-white/10 to-white/5 rounded-xl text-white/90 hover:from-emerald-500/20 hover:to-sky-500/20 transition-all duration-300 border border-white/10 hover:border-emerald-400/50 shadow-sm hover:shadow-md"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>

          {/*Add Future Placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-sm text-white/60 font-medium">More exciting experiences coming soon...</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
