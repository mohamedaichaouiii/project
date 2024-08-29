import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1">
              Hello, I'm <br /> <span className="text-cyan-400">Mohamed Aichaoui</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            Full-stack developer with expertise in Angular, React, Spring Boot, and a Java enthusiast. Driven by curiosity and innovation, I'm passionate about solving real-world problems and making a meaningful impact through technology.            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1Rs8vNmL7gRNR1dNrc7WpJJwZbl7t11y6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border-2 border-cyan-400 rounded-full flex justify-center items-center text-cyan-400 text-base hover:bg-cyan-400 hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      < Stats />
    </section>
  );
};

export default Home;
