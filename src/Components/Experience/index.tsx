import { ImageConatiner, NameSpan } from "../Home/styles";
import ExperinceLottie from "../lottieFiles/experience";
import Card from "./card";

import {
  EducationCard,
  EducationContainer,
  ExperienceContainer,
  Headingtext,
  MainContainer,
  TextContainer,
} from "./styles";
import { CARD_DATA } from "./utils";

export const ExperienceContent = () => {
  return (
    <>
      <ExperienceContainer
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Headingtext>
          <span>My </span> <NameSpan>Experience</NameSpan>
        </Headingtext>
        {CARD_DATA.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </ExperienceContainer>
    </>
  );
};

const Experience: React.FC = () => {
  return (
    <>
      <MainContainer>
        <EducationContainer>
          <TextContainer>
            <Headingtext>
              <span>My </span> <NameSpan>Journey</NameSpan>
            </Headingtext>

            <EducationCard>
              Graduated from IIT Bhubaneswar with a degree in Computer Science
              and a love for problem-solving. Whether it’s building full-stack
              applications or debugging code that refuses to cooperate, I’m here
              to turn challenges into accomplishments—while keeping my caffeine
              intake dangerously high.
            </EducationCard>
          </TextContainer>
          <ImageConatiner>
            <ExperinceLottie />
          </ImageConatiner>
        </EducationContainer>
        <ExperienceContent />
      </MainContainer>
    </>
  );
};

export default Experience;
