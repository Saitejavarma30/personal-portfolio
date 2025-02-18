import { motion } from "framer-motion";
import AboutLottie from "../lottieFiles/about";
import CoffeeSip from "../lottieFiles/coffeeSip";
import { IconRenderer } from "./Icon";
import {
  AboutButton,
  AboutContainer,
  AboutContent,
  AboutHeader,
  AboutText, ContactContainer, ContactHrContainer, ContactSectionContaner, ContactSectionHr,
  DevSpan,
  HeroContainer,
  ImageConatiner,
  MainContainer,
  NameSpan,
  SkillsContainer,
  SkillsContent,
  SkillsHeader,
  SkillsSubContainer,
  TextContainer, UrlContainer,
} from "./styles";
import icons from "./utils";

import { styled } from "styled-components";

import Squares from "../../blocks/Backgrounds/Squares/Squares";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Projects from "./projects.tsx";
import Paragraph from "../Words.tsx";
import GithubButton from "./githubButton.tsx";

const AboutMe = [{
  about : "Oh, so you wanna know about me? Well, I'm a full-stack developer who dabbles in all sorts of tech stacks—basically, I press buttons and make things work." +
      " But JavaScript/TypeScript? That’s my true love. Graduated from IIT Bhubaneswar in 2022 and have been passionately breaking and fixing code ever since!" +
      " When I'm not in full-on developer mode, you can find me hovering around in National Parks following my passion for photography."
}]

const StyledContainer = styled(motion.div)`
  /* height: 100vh; */
  width: 100%;
  border-radius: 0.375rem; /* Equivalent to rounded-md */
  background-color: #0a0a0a; /* Equivalent to bg-neutral-950 */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-font-smoothing: antialiased; /* Equivalent to antialiased */
`;

const HeroSection = () => {
  const colors = ["#7dd3fc", "#f9a8d4", "#86efac", "#fde047", "#fca5a5"];
  window.addEventListener("scroll", function () {
    console.log(window.scrollY);
  });
  return (
    <StyledContainer
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Squares
        speed={0}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#f4f4f4"
        hoverFillColor={colors}
      />
      <HeroContainer aria-label="Hero Section" role="banner">
        <ImageConatiner aria-hidden="true">
          <motion.div
            initial={{ opacity: 0.5, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <CoffeeSip />
          </motion.div>
        </ImageConatiner>

        <TextContainer
          initial={{ filter: "blur(10px)" }}
          whileInView={{ filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div>
            <span aria-label="Introduction">
              Hello I'm <NameSpan>Saiteja Varma</NameSpan>
            </span>
          </div>
          <div>
            <span aria-label="Occupation">
              Full Stack <DevSpan>Developer</DevSpan>
            </span>
          </div>
          <div>&</div>
          <div>
            <span aria-label="Part-time job">
              part-time <DevSpan>Photographer</DevSpan>
            </span>
          </div>
          <div>
            <span aria-label="Location">
              Based in <NameSpan>India</NameSpan>
            </span>
          </div>
        </TextContainer>
      </HeroContainer>
      <ContactSection />
    </StyledContainer>
  );
};

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <AboutContainer>
        <TextContainer
          initial={{ opacity: 0.5, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <AboutHeader aria-label="About Me">
            About <NameSpan>Me</NameSpan>
          </AboutHeader>

          <AboutContent role="region" aria-labelledby="about-section">
            <section id="about-section">
              <AboutText aria-label="Introduction to myself">
                {AboutMe.map((about) => {
                  return (<Paragraph paragraph={about.about}/>)
                })}

              </AboutText>
              <AboutButton>
                <GithubButton url={"/experience"} text={"Dev Journey"} />
                <GithubButton url={"/photos"} text={"Photography"} />
              </AboutButton>
            </section>
          </AboutContent>
        </TextContainer>
        <ImageConatiner>
          <motion.div
            initial={{ opacity: 0.5, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            aria-label="About me animation"
          >
            <AboutLottie />
          </motion.div>
        </ImageConatiner>
      </AboutContainer>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <SkillsContainer>
      <SkillsSubContainer
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <SkillsHeader>
          My <NameSpan>Skills</NameSpan>
        </SkillsHeader>
        <SkillsContent>
          {icons.map(({ Icon, name }) => {
            //@ts-expect-error
            return <IconRenderer Icon={Icon} name={name || "black"} />;
          })}
        </SkillsContent>
      </SkillsSubContainer>
    </SkillsContainer>
  );
};

const ContactSection = () => {
  return (
    <ContactSectionContaner
      role="region"
      aria-labelledby="contact-header"
    >
      <ContactHrContainer>
        <ContactSectionHr />
      </ContactHrContainer>

      <ContactContainer>
          <li style={{pointerEvents: 'all'}}>
            <UrlContainer whileHover={{scale: 1.1}} href="https://unsplash.com/@saiteja_varma" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-unsplash fa-2x"></i>
            </UrlContainer>
          </li>
        <li style={{pointerEvents: 'all'}}>
          <UrlContainer href="https://github.com/Saitejavarma30" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github fa-2x"></i>
          </UrlContainer>
        </li>
        <li style={{pointerEvents: 'all'}}>
          <UrlContainer href="https://www.linkedin.com/in/j-saiteja-varma/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin fa-2x"></i>
          </UrlContainer>
        </li>
        <li style={{pointerEvents: 'all'}}>
          <UrlContainer href="mailto:saitejavarmaj30@gmail.com">
            <i className="fa-solid fa-envelope fa-2x"></i>
          </UrlContainer>
        </li>
      </ContactContainer>
    </ContactSectionContaner>
  );
};

const Home = () => {
  return (
    <MainContainer>
      <HeroSection />
      <Projects/>
      <AboutSection />
      <SkillsSection />
    </MainContainer>
  );
};

export default Home;
