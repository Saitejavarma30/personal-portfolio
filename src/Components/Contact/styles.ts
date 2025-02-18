import styled from "styled-components";
import {motion} from "framer-motion";


export const ContactTextContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    flex-direction: column;
    font-weight: 600;
    @media screen and (max-width: 500px){
        font-size: 3rem;
    }
    
`

export const ContactFormContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    flex-direction: row;
    background-color: white;
    font-weight: 600;
    @media screen and (max-width: 500px){
        font-size: 3rem;
        flex-direction: column;
    }
    
`

export const DockedComponent = styled(motion.div)`
  position: fixed;
  bottom: 20px; /* Adjust based on preference */
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent; /* Semi-transparent background */
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  z-index: 2; /* Ensure it's above other content */
`;