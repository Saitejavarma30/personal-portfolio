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
import { Link } from "react-router-dom";

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "Home",
    href: "/",
  },
  {
    id: 1,
    navTitle: "Experience",
    href: "/experience",
  },
  {
    id: 3,
    navTitle: "Photos",
    href: "/photos",
  },
  {
    id: 4,
    navTitle: "Contact",
    href: "/contact",
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
          <NameContainer aria-label="Go to homepage" role="link" href="/">
            <BlurText
              text="Saiteja Varma"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
          </NameContainer>
          <NavBarClose
            onClick={() => {
              console.log("clicked");
              setIsOpen(true);
            }}
            aria-label="Open Menu"
          >
            <motion.div
              variants={hideNavItemsVariant}
              style={{ cursor: "pointer", outline: "none" }}
            >
              Menu
            </motion.div>
          </NavBarClose>
        </NavBarTopBar>

        <NavbarOpenContainer variants={mobileMenuVariant}>
          <NavBarClose onClick={() => setIsOpen(false)} aria-label="Close Menu">
            <motion.div>Close</motion.div>
          </NavBarClose>
          <NavItemContainer>
            {MOBILE_NAV_ITEMS.map((item) => (
              <NavItem key={item.id}>
                <Link to={item.href} onClick={() => setIsOpen(false)}>
                  {item.navTitle}
                </Link>
              </NavItem>
            ))}
          </NavItemContainer>
        </NavbarOpenContainer>
      </NavbarContainer>
    </MainContainer>
  );
};

export default Navbar;
