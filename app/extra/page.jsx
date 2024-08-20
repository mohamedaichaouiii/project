"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Intell'Eau",
    title: "Project 3",
    description: "At Intell’Eau, we focus on developing innovative solutions for water management. Our system provides precise control over water consumption, detects leaks, and monitors water quality to ensure efficient and timely responses. This work has deepened my dedication to research and technological innovation in the field of water management",
    stack: [{ name: "Co-founder" }, { name: "Advanced System" }, { name: "Efficient Response" }, { name: "Research and Innovation" }],
    image: "/assets2/1/6.jpg",
    live: "",
    github: "",
  },
  {
    num: "01",
    category: "Intell'Eau",
    title: "Project 1",
    description: "At Intell’Eau, we focus on developing innovative solutions for water management. Our system provides precise control over water consumption, detects leaks, and monitors water quality to ensure efficient and timely responses. This work has deepened my dedication to research and technological innovation in the field of water management",
    stack: [{ name: "Co-founder" }, { name: "Advanced System" }, { name: "Efficient Response" }, { name: "Research and Innovation" }],
    image: "/assets2/1/2.jpg",
    live: "",
    github: "",
  },
  {
    num: "01",
    category: "Intell'Eau",
    title: "Project 2",
    description: "At Intell’Eau, we focus on developing innovative solutions for water management. Our system provides precise control over water consumption, detects leaks, and monitors water quality to ensure efficient and timely responses. This work has deepened my dedication to research and technological innovation in the field of water management",
    stack: [{ name: "Co-founder" }, { name: "Advanced System" }, { name: "Efficient Response" }, { name: "Research and Innovation" }],
    image: "/assets2/1/5.jpg",
    live: "",
    github: "",
  },

  {
    num: "02",
    category: "TEDx Astronomy",
    title: "Project 3",
    description: " Won the 1st place at TEDxAstronomy2.0. We explored the universe’s marvels alongside scientists, space enthusiasts, and engineers. This experience allowed us to share our passion for space exploration and its connection to humanity, echoing Carl Sagan’s idea that 'We are made of star stuff.' Collaborating with mentors and professionals from the Tunisian Space Association, City of Science of Tunis, and the Ecole Nationale d'Ingénieurs de Tunis was truly inspiring",
    stack: [{ name: "TEDxAstronomy2.0" }, { name: "1st Place" }, { name: "Space Exploration" }],
    image: "/assets2/2/1.jpg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "TEDx Astronomy",
    title: "Project 4",
    description: " Won the 1st place at TEDxAstronomy2.0. We explored the universe’s marvels alongside scientists, space enthusiasts, and engineers. This experience allowed us to share our passion for space exploration and its connection to humanity, echoing Carl Sagan’s idea that 'We are made of star stuff.' Collaborating with mentors and professionals from the Tunisian Space Association, City of Science of Tunis, and the Ecole Nationale d'Ingénieurs de Tunis was truly inspiring",
    stack: [{ name: "TEDxAstronomy2.0" }, { name: "1st Place" }, { name: "Space Exploration" }],
    image: "/assets2/2/5.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Solution Lab  ",
    title: "Project 3",
    description: "We had an incredible week at the Solution Lab organized by Cluster Mecatronic Tunisia in collaboration with the Ecole Nationale d'Ingénieurs de Tunis. This event was a fantastic opportunity to tackle industrial challenges through dynamic ideation and collaboration. We began with a hands-on visit to understand on-site challenges, followed by interactive sessions with workshops and presentations to refine and share ideas. Teamwork and brainstorming were crucial, fostering constructive and productive exchanges. The week concluded with a certificate ceremony recognizing everyone's contributions and commitment.",
    stack: [{ name: "Hands-on Visit" }, { name: "Workshops" }, { name: "Teamwork" }, { name: "Innovation" }],
    image: "/assets2/3/6.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Solution Lab  ",
    title: "Project 4",
    description: "We had an incredible week at the Solution Lab organized by Cluster Mecatronic Tunisia in collaboration with the Ecole Nationale d'Ingénieurs de Tunis. This event was a fantastic opportunity to tackle industrial challenges through dynamic ideation and collaboration. We began with a hands-on visit to understand on-site challenges, followed by interactive sessions with workshops and presentations to refine and share ideas. Teamwork and brainstorming were crucial, fostering constructive and productive exchanges. The week concluded with a certificate ceremony recognizing everyone's contributions and commitment.",
    stack: [{ name: "Hands-on Visit" }, { name: "Workshops" }, { name: "Teamwork" }, { name: "Innovation" }],
    image: "/assets2/3/1.jpg",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Hack4Justice hackathon ",
    title: "Project 3",
    description: "I am thrilled to share that our team secured 3rd place 🏆 in the Hack4Justice hackathon! Competing against 11 exceptional teams, we were recognized for our innovative solution addressing employment justice in Tunisia. This cause is deeply important to us, and it was incredibly rewarding to work towards a future where workplace issues are effectively addressed, ensuring fairness and equity. We are proud to have received a prize of 1000dt  to further develop our solution A big thank you to the organizers and the Hack4Justice team for providing a platform to drive change and innovation. Let’s continue working together towards a brighter, more just future for Tunisia!.",
    stack: [{ name: "3rd Place" }, { name: "Innovation" }, { name: "Workplace Fairness" }, { name: "HiiL" }],
    image: "/assets2/4/1.jpg",
    live: "",
    github: "",
  },

];

const Extra = () => {
  const [project, setProject] = useState(projects[0]);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" }}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-cyan-400 transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-cyan-400">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
            </div>
          </div>

          <div className="w-full xl:w-[50%] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  layout="responsive" 
                  width={1000} 
                  height={500} 
                  objectFit="cover" 
                  className="object-cover"
                />

                </SwiperSlide>
              ))}
            </Swiper>
            <WorkSliderBtns
              swiperInstance={swiperInstance}
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-cyan-400 hover:bg-cyan-400 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"
              iconsStyles="text-white text-3xl"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Extra;
