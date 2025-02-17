import { ImageConatiner, NameSpan } from "../Home/styles";
import ExperinceLottie from "../lottieFiles/experience";
import Timeline from "../Timeline";


import {
  EducationCard,
  EducationContainer,
  Headingtext,
  MainContainer,
  TextContainer,
} from "./styles";
import MetaBalls from "../../blocks/Animations/MetaBalls/MetaBalls.tsx";

export const ExperienceContent = () => {
  return (<div style={{position: "relative", width: "100%", display: "flex", flexWrap: "wrap"}}>
        <div style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0}}>
          <MetaBalls
              color="#ffffff"
              cursorBallColor="#ffffff"
              cursorBallSize={1}
              ballCount={2}
              animationSize={90}
              enableMouseInteraction={true}
              hoverSmoothness={0.05}
              clumpFactor={1}
              speed={0.8}
          />
        </div>
        <div style={{position: "relative", zIndex: 1, width: "100%", pointerEvents: "none"}}>
          <Timeline/>
        </div>
      </div>

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
