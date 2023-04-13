import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h1 className={styles.sectionHeadText}>Overview.</h1>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-4xl leading-[30px]"
      >
        I earned my Bachelor's in Engineering from{" "}
        <span className="text-white">BITS Pilani</span> in 2019, after which I
        worked in the field of analytics, data science and strategy. I currently
        live in Pune, India. As a seasoned{" "}
        <span className="text-white">Strategy Manager</span> with more than{" "}
        <span className="text-white">4 years</span> of industry experience in
        pricing, planning, and performance, I possess a unique blend of skills
        that can help your organization excel in today's dynamic business
        environment. With a relentless{" "}
        <span className="text-white">bias for action</span> and{" "}
        <span className="text-white">exceptional communication skills</span>, I
        have successfully{" "}
        <span className="text-white">managed stakeholders</span> across
        different levels, functions, and geographies. My approach to
        problem-solving is rooted in{" "}
        <span className="text-white">data-driven insights</span> and a
        razor-sharp <span className="text-white">attention to detail</span>.
        Beyond work, I enjoy exploring new worlds through fiction, immersing
        myself in the dramatic arts, and traveling to new and exciting
        destinations.
      </motion.p>
      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
