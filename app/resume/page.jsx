"use client";

import { FaJava, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiCplusplus, SiAngular, SiNextdotjs, SiTailwindcss, SiBootstrap, SiSpringboot, SiSpring, SiHibernate, SiJsp, SiKafka, SiMysql, SiPostgresql, SiTypescript, SiLinux, SiWindows, SiGithub } from "react-icons/si";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const about = {
  title: 'About Me',
  description: "Full-stack developer with expertise in Angular, Spring Boot, and a Java enthusiast. Driven by curiosity and innovation, I'm passionate about solving real-world problems and making a meaningful impact through technology.",
  info: [
    { fieldName: "Name", fieldValue: "Mohamed Aichaoui" },
    { fieldName: "Phone", fieldValue: "(+216) 28733647" },
    { fieldName: "LinkedIn", fieldValue: "mohamed-aichaoui" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English B2, French B2" },
    { fieldName: "Email", fieldValue: "mohamed.aichaoui@etudiant-enit.utm.tn" },
  ],
};

const experience = {
  title: "My Professional Journey",
  description: "Explore the highlights of my career, showcasing diverse roles and impactful projects that have shaped my expertise and drive in the tech industry.",
  items: [
    {
      company: "Talys Consulting",
      details: "Full Stack Developer Angular/Spring Boot: Improved user experience with customizable account pages and offline settings.",
      duration: "February 2024 - June 2024",
      keywords: "Java 8, Angular 12, Spring Boot, Microservices, SQL Server, HTTP, Git, Spring Tool Suite (STS), Postman API"
    },
    {
      company: "Mission freelance",
      details: "Advanced Banking Application: Built a banking app with Java 17, Spring Boot, and Angular for standard and admin users.",
      duration: "February 2023 - June 2023",
      keywords: "Java 17, Spring Boot, Hibernate, JPA, JWT, Angular, HTTP module, DTO, exception handling, IntelliJ IDEA"
    },
    {
      company: "NASA International Space Apps Challenge",
      details: "Galactic Problem Solver: Created a board game using NASA's database, UML, and Figma.",
      duration: "October 2023 - December 2023",
      keywords: "Official NASA Database, UML, Figma"
    },
    {
      company: "ENIT Junior Association",
      details: "IT Department Member: Developed a responsive web interface for The Room Escape.",
      duration: "October 2021 - March 2022",
      keywords: "HTML, CSS, JavaScript"
    },
  ],
};

const education = {
  title: "My Education",
  description: "An overview of my educational background, highlighting the key institutions and qualifications that have shaped my knowledge and skills.",
  items: [
    { institution: "National School of Engineers of Tunis", degree: "ICT Engineering", duration: "2021-2024" },
    { institution: "Faculty of Sciences of Monastir", degree: "Preparatory Mathematics/Physics", duration: "2019-2021" },
    { institution: "BASIRA LAB", degree: "Mathematics and Problem Solving", duration: "Summer 2022" },
    { institution: "High School", degree: "Baccalaureate - Honors", duration: "2019" },
  ],
};


const skills = {
  title: "My Skills",
  description: "Key technologies and tools I have rigorously tested and worked with extensively to develop and refine my skills.",
  list: [
    { icon: <FaJava />, name: "Java" },
    { icon: <FaCss3 />, name: "CSS/Sass" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiAngular />, name: "Angular" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <SiSpring />, name: "Spring MVC" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiHibernate />, name: "Hibernate" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiLinux />, name: "Linux" },
    { icon: <SiWindows />, name: "Windows" },
    { icon: <SiGithub />, name: "Git/GitHub" },
    { icon: <FaFigma />, name: "Figma" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.6, ease: "easeInOut" } }}
      className="min-h-[80vh] flex flex-col items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[40px]">
          <TabsList className="flex flex-col w-full max-w-[360px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[auto] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-4">
                        <span className="text-cyan-400">{item.duration}</span>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-cyan-400"></span>
                          <p className="text-white/90">{item.company}</p>
                        </div>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.details}</h3>
                        <p className="text-cyan-200 mt-5">Keywords: {item.keywords}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[29px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[350px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[180px] py-5 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2">
                        <span className="text-cyan-400">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-2">
                          <span className="w-[6px] h-[6px] rounded-full bg-cyan-400"></span>
                          <p className="text-white/90">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[29px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-[700px] mx-auto xl:mx-0">
                  <TooltipProvider delayDuration={0}>
                    {skills.list.map((skill, index) => (
                      <Tooltip key={index}>
                        <TooltipTrigger asChild>
                          <div className="bg-[#232329] h-[100px] w-[100px] rounded-xl flex justify-center items-center flex-col gap-1 cursor-pointer">
                            {skill.icon}
                            <p className="text-[14px] text-white/60">{skill.name}</p>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </TooltipProvider>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <div className="grid grid-cols-1 gap-6 text-left">
                  {about.info.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <p className="text-white/70">{item.fieldName}</p>
                      <p className="text-white/90">{item.fieldValue}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
        <div className="flex justify-center mt-12 gap-4">
          <a
            href="https://drive.google.com/file/d/1pA8AGxIW2EUymXDmPq19PZbgbMIarR-E/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white bg-cyan-500 hover:bg-cyan-600 rounded-full px-8 py-4 transition-all duration-300"
          >
            <FiDownload className="text-xl" />
            Download English Resume
          </a>
          <a
            href="https://drive.google.com/file/d/14dWwAQ4zqyMGekeOUA7rP8VacRAhwRhM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white bg-cyan-500 hover:bg-cyan-600 rounded-full px-8 py-4 transition-all duration-300"
          >
            <FiDownload className="text-xl" />
            Download French Resume
          </a>
        </div>

      </div>
    </motion.div>
  );
};

export default Resume;
