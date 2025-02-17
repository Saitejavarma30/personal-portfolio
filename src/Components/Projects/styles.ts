import { motion } from "framer-motion";
import { styled } from "styled-components";

export const ProjectContainer = styled.div`
  padding: 0rem;
  margin-top: 0rem;
`;

export const ProjectTitle = styled.div`
  width: 100%;
  text-align: center;
  height: 100vh;
  font-size: 144px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 750px) {
    font-size: 72px;
  }
`;

export const PersonalProjectsContainer = styled.section`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 20px;
  width: 100%;
  padding: 20px 0;
  background-color: black;
  scrollbar-width: none;
  scroll-behavior: smooth;
  height: 100vh;

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for WebKit browsers */
  }
`;
export const ProjectCard = styled.div`
  display: flex;
  background-color: #114b5f;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  scroll-snap-align: start;
  color: #000;
  text-align: left;
  border-radius: 10px;
  height: 100%;
`;

export const SvgImageContainer = styled.img`
  max-width: 400px;
`;

export const ProjectHeader = styled.h2`
  font-size: 32px;
  color: black;
  text-align: left;
`;

export const Carousel = styled.div`
  background-color: white;
  height: 500vh;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 750px) {
    height: 350vh;
  }
`;

export const ContentContainer = styled.div`
  height: 100dvh;
  position: sticky;
  top: var(--safe-area-inset-top, 0);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  background-color: white;
`;

interface ProjectProps {
  width: number; // Expect a number for better calculations
}

export const Projects = styled(motion.div)<ProjectProps>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: ${({ width }) =>
    `${3 * width}px`}; /* Dynamically setting grid-gap */
  padding: 0 ${({ width }) => `${3 * width}px`}; /* Consistent padding */
`;

export const ProjectItem = styled.div<ProjectProps>`
  width: 700px;
  height: 70vh;
  background-color: #114b5f;

  @media screen and (max-width: 700px) {
    width: ${({ width }) => `${95 * width}px`};
  }
`;
