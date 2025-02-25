import  { useState } from "react";
import {
  Holder,
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
import Dock from "../../blocks/Components/Dock/Dock.tsx";
import {DockedComponent} from "../Contact/styles.ts";
import ScrollVelocity from "../../blocks/TextAnimations/ScrollVelocity/ScrollVelocity.tsx";

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
                <Link to={item.href} onClick={() => setIsOpen(false)} style={{ textDecoration: "none", color: "white" }}>
                  {item.navTitle}
                </Link>
              </NavItem>
            ))}

          </NavItemContainer>

          <DockedComponent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
          >
            <Dock
                items={[
                  {
                    icon: <i className="fa-brands fa-github fa-2x"></i>,
                    label: "Github",
                    onClick: () => alert("Github!"),
                  },
                  {
                    icon: <i className="fa-brands fa-linkedin fa-2x"></i>,
                    label: "LinkedIn",
                    onClick: () => alert("LinkedIn!"),
                  },
                  {
                    icon: <i className="fa-brands fa-unsplash fa-2x"></i>,
                    label: "Unsplash",
                    onClick: () => alert("Unsplash!"),
                  },
                  {
                    icon: <i className="fa-brands fa-instagram fa-2x"></i>,
                    label: "Instagram",
                    onClick: () => alert("Instagram!"),
                  },
                  {
                    icon: <i className="fa-brands fa-spotify fa-2x"></i>,
                    label: "Spotify",
                    onClick: () => alert("Spotify!"),
                  },
                ]}
                panelHeight={60}
                baseItemSize={50}
                magnification={60}
            />
          </DockedComponent>
        </NavbarOpenContainer>
      </NavbarContainer>
    </MainContainer>
  );
};

export default Navbar;
