import styled from "styled-components";
import { motion } from "framer-motion";
interface zIndexProps {
  zIndex?: number;
}

export const MainContainer = styled.main`
  /* padding: 8px; */
  color: white;
  box-sizing: border-box;
  overflow: hidden;
  position: sticky;
  top: 0;
`;

export const NavbarContainer = styled(motion.nav)<zIndexProps>`
  z-index: ${(props) => props.zIndex || 1000};
`;

export const NavBarTopBar = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  height: 48px;
  background-color: black;
`;

export const NavItemContainer = styled(motion.div)`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavItem = styled(motion.div)`
  padding: 12px;
  cursor: pointer;
  color: white;
  font-size: xx-large;
  font-weight: bold;
`;

export const NameContainer = styled.div`
  font-size: 24px;
  font-family: "Agu Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  cursor: pointer;
`;

export const NavBarClose = styled(motion.div)`
  right: 0%;
  cursor: pointer;
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  height: 48px;
`;

export const NavbarOpenContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;
