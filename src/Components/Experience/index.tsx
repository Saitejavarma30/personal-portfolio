import { ImageConatiner, MainContainer, NameSpan } from "../Home/styles";
import ExperinceLottie from "../lottieFiles/experience";

import {
  EducationCard,
  EducationContainer,
  Headingtext,
  TextContainer,
} from "./styles";

const Experience: React.FC = () => {
  return (
    <>
      <MainContainer>
        <EducationContainer>
          <TextContainer>
            <Headingtext>
              My <NameSpan>Journey</NameSpan>
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
      </MainContainer>
    </>
  );
};

export default Experience;
