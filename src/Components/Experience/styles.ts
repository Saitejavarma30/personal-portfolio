import { motion } from "framer-motion";
import { styled } from "styled-components";

export const EducationContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: white;

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

export const Headingtext = styled.div`
  font-size: 32px;
  width: 50%;
  color: white;
  text-align: center;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-display: swap;
`;

export const EducationCard = styled.div`
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: black;
  color: white;
  font-size: 16px;
`;
