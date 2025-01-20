import { useState } from "react";
import {
  MainContainer,
  NameContainer,
  NavBarClose,
  NavbarContainer,
  NavbarOpenContainer,
  NavBarTopBar,
  NavItem,
  NavItemContainer,
} from "./styles";
//@ts-ignore
import BlurText from "../../blocks/TextAnimations/BlurText/BlurText";
import { motion } from "framer-motion";
import { hideNavItemsVariant, mobileMenuVariant } from "./utils";

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "Home",
  },
  {
    id: 1,
    navTitle: "About",
  },
  {
    id: 2,
    navTitle: "Projects",
  },
  {
    id: 3,
    navTitle: "Photos",
  },
  {
    id: 4,
    navTitle: "Contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <MainContainer>
      <NavbarContainer initial="closed" animate={isOpen ? "opened" : "closed"}>
        <NavBarTopBar variants={hideNavItemsVariant}>
          <NameContainer>
            <BlurText
              text="Saiteja Varma"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
          </NameContainer>

          <motion.div
            variants={hideNavItemsVariant}
            onClick={() => {
              console.log("clicked");
              setIsOpen(true);
            }}
            style={{ cursor: "pointer" }}
          >
            Menu
          </motion.div>
        </NavBarTopBar>

        <NavbarOpenContainer variants={mobileMenuVariant}>
          <NavBarClose>
            <motion.div onClick={() => setIsOpen(false)}>Close</motion.div>
          </NavBarClose>
          <NavItemContainer>
            {MOBILE_NAV_ITEMS.map((item) => (
              <NavItem key={item.id}>{item.navTitle}</NavItem>
            ))}
          </NavItemContainer>
        </NavbarOpenContainer>
      </NavbarContainer>
    </MainContainer>
  );
};

export default Navbar;
