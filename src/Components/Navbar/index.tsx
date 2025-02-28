import React, { useState } from "react";
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
import {Link} from "react-router-dom";
import Dock from "../../blocks/Components/Dock/Dock.tsx";
import {DockedComponent} from "../Contact/styles.ts";
import {toast, ToastContainer} from "react-toastify";


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

const Navbar:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const handleDownload = () => {
    const fileId = "1YLZoqJd2oqHOo_svovBx_6UYz4Vgodv0"; // Replace with your actual file ID
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    toast.success("Downloading file in a few seconds", {
      position: "top-right",
      autoClose: 3000,
    });
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "Saiteja_Varma_Resume.pdf"); // Set file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)
  };

  return (
    <MainContainer>
      <ToastContainer style={{ zIndex: 9999 }} />
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
                    onClick: () => window.open("https://github.com/Saitejavarma30", "_blank"),
                  },
                  {
                    icon: <i className="fa-brands fa-linkedin fa-2x"></i>,
                    label: "LinkedIn",
                    onClick: () => window.open("https://www.linkedin.com/in/j-saiteja-varma/", "_blank"),
                  },
                  {
                    icon: <i className="fa-brands fa-unsplash fa-2x"></i>,
                    label: "Unsplash",
                    onClick: () => window.open("https://unsplash.com/@saiteja_varma", "_blank"),
                  },
                  {
                    icon: <i className="fa-brands fa-instagram fa-2x"></i>,
                    label: "Instagram",
                    onClick: () => window.open("https://www.instagram.com/i_am_tez_/", "_blank"),
                  },
                  {
                    icon: <i className="fas fa-file-download fa-2x"></i>,
                    label: "Resume",
                    onClick: () => handleDownload(),
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
