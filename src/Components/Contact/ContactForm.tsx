import React, { useState } from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`;

const Form = styled.form`
  width: 80%;
  margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 20px;
`;
const Input = styled.input`
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

const FormHeader = styled.h3`
    font-size: 2.5rem;
    font-weight: 300;
`

const TextArea = styled.textarea`
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

const Button = styled(motion.button)`
  background: black;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
    
`;


const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        website: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeoKKj_CIaJo8d80GHtw1ByTpBH8McBCcxU7RIZ7kBSDqKYqw/formResponse";

        const formDataEntries = new FormData();
        formDataEntries.append("entry.104098525", formData.name);
        formDataEntries.append("entry.1398563948", formData.email);
        formDataEntries.append("entry.606962984", formData.message);

        fetch(formUrl, {
            method: "POST",
            mode: "no-cors",
            body: formDataEntries,
        }).then(() => alert("Form submitted successfully!"));
        setFormData({
            name: "",
            email: "",
            website: "",
            message: "",
        })
    };

    return (
        <FormContainer>
            <FormHeader style={{color:"black"}}>Say Hello</FormHeader>
            <Form onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange}
                       required/>
                <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
                       required/>
                <TextArea name="message" placeholder="How can I help?" value={formData.message} onChange={handleChange}
                          required/>
                <Button type="submit" initial={{scale: 1}} whileHover={{scale: 1.1}}>Get In Touch</Button>
            </Form>
        </FormContainer>
    );
};

export default ContactForm;
