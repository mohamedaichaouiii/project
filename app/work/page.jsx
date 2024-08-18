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
    category: "frontend",
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laborum temporibus voluptatem.",
    stack: [{ name: "HTML5" }, { name: "SQL" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "backend",
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laborum temporibus voluptatem.",
    stack: [{ name: "Java" }, { name: "SQL" }, { name: "Spring Boot" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laborum temporibus voluptatem.",
    stack: [{ name: "Angular" }, { name: "SQL" }, { name: "Spring Boot" }, { name: "JavaScript" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [swiperInstance, setSwiperInstance] = useState(null); // State to hold swiper instance

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
    initial={{opacity: 0}} animate={{opacity: 1, transition:{
      delay:1,
      duration:0.4,
      ease:"easeIn"
  }}}
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
                {project.category} Project
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
              <div className="flex items-center gap-4">
                <Link href={project.live} passHref>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-cyan-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} passHref>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-cyan-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => setSwiperInstance(swiper)} // Set swiper instance when initialized
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <Image src={project.image} alt={project.title} layout="responsive" width={500} height={300} />
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

export default Work;
