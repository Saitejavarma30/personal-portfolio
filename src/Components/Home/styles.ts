import { motion } from "framer-motion";
import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: black;
  overflow-y: visible;
  overflow-x: hidden;
  scrollbar-width: none;
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-color: transparent;
  mix-blend-mode: multiply;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: black;
  position: relative;
  pointer-events: none;
  z-index: 2; /* Only this layer won’t block interactions */
  isolation: isolate;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: black;
  }
`;

export const TextContainer = styled(motion.div)`
  font-size: 32px;
  width: 50%;
  color: black;
  text-align: center;
  font-family: "Playfair Display", serif;
  font-display: swap;
  font-optical-sizing: auto;
  font-style: normal;
  padding: 32px;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    width: 100%;
  }
`;

export const ImageConatiner = styled.div`
  width: 50%;
  height: auto;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    height: 60vh;
    width: auto;
  }
`;

export const NameSpan = styled.span`
  font-weight: 700;
`;

export const DevSpan = styled.span`
  font-weight: 500;
  font-style: italic;
  -webkit-text-stroke: 1px black; /* Adds a black outline */
  color: transparent; /* Makes the text fill transparent */
`;

export const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: white;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    background-color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: black;
    font-size: medium;
  }
`;

export const AboutHeader = styled.h2`
  font-size: 32px;
  color: white;
`;

export const AboutContent = styled.div`
  font-size: 16px;
  color: white;
  text-align: left;
  padding: 32px;
`;

export const AboutText = styled.div`
  font-size: 24px;
  color: white;
  text-align: left;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: 100;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-display: swap;
  @media screen and (max-width: 1100px) {
    font-size: 20px;
  }
  @media screen and (max-width: 900px) {
    font-size: 16px;
  }
`;

export const SkillsContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: black;
  @media screen and (max-width: 768px) {
    height: 130vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: medium;
  }
`;

export const SkillsHeader = styled.h2`
  font-size: 32px;
  color: black;
  font-family: "Playfair Display", serif;
  font-display: swap;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 200;
`;

export const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6 columns by default */
  width: 80%;
  margin: 0 auto;
  align-items: center;
  /* background-color: black; */
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkillsSubContainer = styled(motion.div)`
  font-size: 32px;
  width: 80%;
  color: black;
  text-align: center;
  font-family: "Playfair Display", serif;
  font-display: swap;
  font-optical-sizing: auto;
  font-style: normal;
  padding: 32px;
`;

export const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  flex-direction: column;
  font-size: 16px;
  margin: 8px;
  padding: 4px;
  border: 1px solid black;

  @media screen and (max-width: 768px) {
    height: 100px;
    flex-direction: column;
    font-size: 12px;
    margin: 8px;
    padding: 4px;
  }

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const ContactSectionContaner = styled(motion.div)`
    display: flex;
    //padding: 3rem;
    background-color: transparent;
    pointer-events: none;
    flex-direction: row;
    height: 100%;
    width: 100%;
    z-index: 2;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
    
    `

export const ContactContainer = styled.ul`
    display: flex;
    flex-direction: row;
    flex: 1;
    gap: 16px;
    padding-left: 16px;
    @media screen and (max-width: 600px) {
        justify-content: center;
    }
    
`

export const ContactSectionHr = styled.hr`
    height: 6px;
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    background-color: black;
    border-radius: 40px;
    align-items: center;
    color: black;
    padding: 0;
    margin-left: 16rem;
`

export const ContactHrContainer = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 600px) {
        display: none;
    }
    `

export const UrlContainer = styled(motion.a)`
    text-decoration: none;
    color: black; /* Inherits color from parent */`