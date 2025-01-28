import { motion } from "framer-motion";
import { styled } from "styled-components";

export const EducationContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: black;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const TextContainer = styled(motion.div)`
  font-size: 32px;
  width: 50%;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-style: normal;
  padding: 32px;
  font-display: swap;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    width: 100%;
  }
`;

export const MainContainer = styled.div`
  background-color: black;
  overflow-y: visible;
  overflow-x: hidden;
  scrollbar-width: none;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const Headingtext = styled.h2`
  font-size: 32px;
  width: 50%;
  color: black;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-display: swap;
  font-weight: 100;
`;

export const EducationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: white;
  color: black;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 24px;
  font-display: swap;
  @media screen and (max-width: 1100px) {
    font-size: 20px;
  }
  @media screen and (max-width: 900px) {
    font-size: 16px;
  }
`;

export const ExperienceContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;
