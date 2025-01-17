import { motion } from "framer-motion";
import AboutLottie from "../lottieFiles/about";
import CoffeeSip from "../lottieFiles/coffeeSip";
import { IconRenderer } from "./Icon";
import {
  AboutContainer,
  AboutContent,
  AboutHeader,
  AboutText,
  DevSpan,
  HeroContainer,
  ImageConatiner,
  MainContainer,
  NameSpan,
  SkillsContainer,
  SkillsContent,
  SkillsHeader,
  SkillsSubContainer,
  TextContainer,
} from "./styles";
import icons from "./utils";
//@ts-ignore
// import CoffeeSip from "../lottieFiles/coffeeSip.svg";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroContainer>
        <ImageConatiner>
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
            Hello I'm <NameSpan>Saiteja Varma</NameSpan>
          </div>
          <div>
            Full Stack <DevSpan>Developer</DevSpan>
          </div>
          <div>&</div>
          <div>
            part-time <DevSpan>Photographer</DevSpan>
          </div>
          <div>
            Based in <NameSpan>India</NameSpan>
          </div>
        </TextContainer>
      </HeroContainer>
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.5 }}
    >
      <AboutContainer>
        <TextContainer
          initial={{ opacity: 0.5, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <AboutHeader>
            About <NameSpan>Me</NameSpan>
          </AboutHeader>
          <AboutContent>
            <AboutText>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </AboutText>
            <AboutText>
              I began my journey as a web developer in 2022, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way. I'm
              building cutting-edge web applications using modern technologies
              such as React.js, TypeScript, and Node.js.
            </AboutText>
            <AboutText>
              When I'm not in full-on developer mode, you can find me hovering
              around in National Parks following my passion for photography.
            </AboutText>
          </AboutContent>
        </TextContainer>
        <ImageConatiner>
          <motion.div
            initial={{ opacity: 0.5, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
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
            //@ts-ignore
            return <IconRenderer Icon={Icon} name={name || "black"} />;
          })}
        </SkillsContent>
      </SkillsSubContainer>
    </SkillsContainer>
  );
};

const Home = () => {
  return (
    <MainContainer>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </MainContainer>
  );
};

export default Home;
