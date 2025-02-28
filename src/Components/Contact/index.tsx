import React, {useEffect, useState} from "react";
import {
    Button,
    ContactFormContainer,
    DockedComponent,
    Form,
    FormContainer,
    FormHeader,
    Input,
    TextArea
} from "./styles.ts";
import Dock from "../../blocks/Components/Dock/Dock.tsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContactLottie from "../lottieFiles/contact.tsx";
import ContactHeader from "./ContactHeader.tsx";
import {toast, ToastContainer} from "react-toastify";


const Contact : React.FC = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 1000); // Delay of 2 seconds
        return () => clearTimeout(timer);
    }, []);
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
        }).then(() => {
            toast.success("I might have just stolen your name and email address.", {
                position: "top-right",
                autoClose: 3000,
            });
        })
        setFormData({
            name: "",
            email: "",
            website: "",
            message: "",
        })
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
        <>
            <ToastContainer style={{ zIndex: 9999 }} />
            {show && (
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
            )}
            <ContactHeader/>
            <ContactFormContainer>

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
                <ContactLottie/>

            </ContactFormContainer>
        </>
    )
}

export default Contact;