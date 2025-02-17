import projects from "./projects";
import {
  PersonalProjectsContainer,
  ProjectCard,
  ProjectContainer,
  ProjectHeader,
  ProjectTitle,
  SvgImageContainer,
} from "./styles";
//@ts-ignore
import SplitText from "../../blocks/TextAnimations/SplitText/SplitText";
import Horizontal from "./horizontal";

const Projects = () => {
  const { personalProjects, systemClones, workProjects } = projects;
  return (
    <ProjectContainer>
      <ProjectTitle>Projects</ProjectTitle>
      {/* <PersonalProjectsContainer>
        {personalProjects.map((project, index) => (
          <ProjectCard key={index}>
            <SvgImageContainer src={project.image} alt={project.name} />
            <SplitText
              text={project.name}
              className="text-2xl font-semibold text-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={() => {}}
            />
            <br />
            <p>{project.description}</p>
            <ul>
              {project.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </ProjectCard>
        ))}
      </PersonalProjectsContainer> */}
      <Horizontal />
      <ProjectTitle>Projects</ProjectTitle>
    </ProjectContainer>
  );
};

export default Projects;
