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

export const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`;

export const Form = styled.form`
  width: 80%;
  margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 20px;
`;
export const Input = styled.input`
    max-width: 250px;
    padding: 0.875rem;
    font-size: 1rem;
    border: 1px solid #000;
    border-radius: 0.5rem;
    box-shadow: 2px 3px 0 #000;
    outline: none;
    transition: ease 0.25s;
    background-color: white;
    color: #060606;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    &:focus {
        box-shadow: 5px 7px 0 black;
    }
    &::placeholder {
        opacity: 0.8; /* Adjust opacity */
        color: #000; /* You can also change the color */
    }

`;

export const FormHeader = styled.h3`
    font-size: 2.5rem;
    font-weight: 300;
`

export const TextArea = styled.textarea`
    width: 70%;
    padding: 0.875rem;
    font-size: 1rem;
    border: 1px solid #000;
    border-radius: 0.5rem;
    box-shadow: 2px 3px 0 #000;
    outline: none;
    transition: ease 0.25s;
    background-color: white;
    color: #060606;
    resize: vertical;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    &:focus {
        box-shadow: 5px 7px 0 black;
    }
    &::placeholder {
        opacity: 0.8; /* Adjust opacity */
        color: #000; /* You can also change the color */
    }

`;

export const Button = styled(motion.button)`
  background: black;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
    
`;