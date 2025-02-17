import projects from "./projects";
import {
  Carousel,
  ContentContainer,
  ProjectCard,
  ProjectHeader,
  ProjectItem,
  Projects,
  SvgImageContainer,
} from "./styles";
//@ts-ignore
import SplitText from "../../blocks/TextAnimations/SplitText/SplitText";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function Horizontal() {
  const targetRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [cardWidth, setCardWidth] = useState(700);

  useEffect(() => {
    setCardWidth(window.innerWidth < 700 ? window.innerWidth * 0.95 : 700);
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalWidth =
    cardWidth * projects.personalProjects.length +
    0.03 * viewportWidth * (projects.personalProjects.length + 1);
  console.log(totalWidth, viewportWidth, cardWidth);
  const scrollRange = -(totalWidth - viewportWidth); // Dynamic scroll range

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0px", `${scrollRange}px`]);

  return (
    <Carousel ref={targetRef}>
      <ContentContainer>
        <Projects width={viewportWidth / 100} style={{ x }}>
          {projects.personalProjects.map((project, index) => {
            return (
              <ProjectItem key={index} width={viewportWidth / 100}>
                <ProjectCard>
                  <SvgImageContainer src={project.image} alt={project.name} />
                  <ProjectHeader>{project.name}</ProjectHeader>
                  <br />
                  <p>{project.description}</p>
                  <ul>
                    {project.techStack.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </ProjectCard>
              </ProjectItem>
            );
          })}
        </Projects>
      </ContentContainer>
    </Carousel>
  );
}
