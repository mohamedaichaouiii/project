import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full px-4">
        <div className="flex flex-col items-center justify-center gap-8 py-8 mt-8 md:flex-row md:gap-12 md:py-12 md:mt-12">
          <div className="text-center md:text-left">
            <span className="text-lg md:text-xl">Software Engineer</span>
            <h1 className="h1">
              Hello, I'm <br /> <span className="text-cyan-400">Mohamed Aichaoui</span>
            </h1>
            <p className="mt-4 text-sm text-white/80 md:text-base max-w-[90vw] md:max-w-[450px]">
              Full-stack developer with expertise in Angular, React, and a strong enthusiasm for backend development. Driven by curiosity and innovation, I'm passionate about solving real-world problems and making a meaningful impact through technology.
            </p>
            <div className="flex flex-col items-center gap-6 mt-6 md:flex-row md:gap-8">
              <a
                href="https://drive.google.com/file/d/1Rs8vNmL7gRNR1dNrc7WpJJwZbl7t11y6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 text-sm md:text-base"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-lg md:text-xl" />
                </Button>
              </a>
              <Socials
                containerStyles="flex gap-4 md:gap-6"
                iconStyles="w-8 h-8 md:w-9 md:h-9 border-2 border-cyan-400 rounded-full flex justify-center items-center text-cyan-400 text-base hover:bg-cyan-400 hover:text-primary transition-all duration-500"
              />
            </div>
          </div>
          <div className="w-full max-w-[300px] md:max-w-[400px]">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
