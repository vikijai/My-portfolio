import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    title: "Software Engineer (Front-end)",
    company: "Capgemini",
    dateRange: "Jun 2025 – Present",
    description:
      "Leading front-end development for a health monitoring platform, building real-time dashboards, reusable micro frontends, and GraphQL integrations.",
  },
  {
    title: "Software Engineer (Front-end)",
    company: "Vue Data Technologies",
    dateRange: "Nov 2023 – Jun 2025",
    description:
      "Built a responsive journalism platform with publishing workflows, AI-powered content tools, and a TypeScript and Jest-tested React application.",
  },
  {
    title: "Software Engineer (Front-end)",
    company: "Cognizant Technology Solutions",
    dateRange: "Oct 2022 – Nov 2023",
    description:
      "Developed responsive React interfaces from Figma designs, reusable templates, and REST API integrations with a focus on test coverage.",
  },
  {
    title: "Junior Software Engineer (Front-end)",
    company: "Cognizant Technology Solutions",
    dateRange: "Oct 2020 – Oct 2022",
    description:
      "Migrated website experiences to React, built an accessible UI component library, and developed reusable authentication hooks.",
  },
  {
    title: "B.Tech in Information Technology",
    company: "St Joseph's College of Engineering",
    dateRange: "2020",
    description: "Chennai, India",
  },
];

const About = () => {
  return (
    <>
      <section
        id="about"
        className="py-20 bg-canvas-alt transition-colors duration-300"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-content">About Me</h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-accent to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative overflow-hidden rounded-full w-64 h-64 md:w-80 md:h-80 border-4 border-canvas shadow-xl">
                  <img
                    src="/images/vignesh-image-1.jpeg"
                    alt="Vignesh S"
                    className="w-full h-full object-cover object-top transform hover:scale-110 transition duration-500"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <h3 className="text-3xl font-bold text-content mb-6">
                Hey There! I'm Vignesh
              </h3>
              <p className="text-lg text-content-muted leading-relaxed mb-8">
                I’m a Senior Front-End Engineer with 6 years of experience
                building scalable, secure, and user-friendly web applications
                with React.js, Redux, JavaScript, and TypeScript. I focus on
                creating seamless interfaces, optimizing performance, and
                writing clean, maintainable code that teams can build on with
                confidence. My recent work includes real-time monitoring
                dashboards, Micro Frontend architectures, and GraphQL and REST
                API integrations, all backed by thorough testing with Jest and
                React Testing Library. I also care about front-end security and
                accessibility, so the products I build are safe and usable for
                everyone. I enjoy collaborating with designers, product
                managers, and fellow engineers to turn ideas into fast, reliable
                software that delivers real business value.
              </p>
              <a href="#work" className="btn">
                See More
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="py-20 bg-canvas transition-colors duration-300"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-content">Experience & Education</h2>
            <p className="text-content-muted mt-10">
              My career and education, from most recent to earliest.
            </p>
          </motion.div>

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute bottom-0 left-[11px] top-0 w-px bg-border-subtle md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-8">
              {experience.map((item, index) => {
                const isRight = index % 2 === 0;

                return (
                  <motion.article
                    key={`${item.company}-${item.title}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.08 }}
                    className="relative grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-4 md:grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)] md:gap-x-6"
                  >
                    <span className="z-10 col-start-1 row-start-1 mt-6 h-3 w-3 justify-self-center rounded-full border-2 border-accent bg-canvas shadow-[0_0_0_4px_var(--bg-primary)] md:col-start-2" />
                    <div
                      className={`col-start-2 row-start-1 rounded-xl border border-border-subtle bg-canvas-alt p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-6 ${
                        isRight
                          ? "md:col-start-3 md:text-left"
                          : "md:col-start-1 md:text-right"
                      }`}
                    >
                      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
                        {item.dateRange}
                      </p>
                      <h3 className="text-xl font-bold text-content">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-medium text-content-muted">
                        {item.company}
                      </p>
                      <p className="mt-3 leading-relaxed text-content-muted">
                        {item.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
