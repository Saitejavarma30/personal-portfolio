import React, {useEffect, useState} from "react";
import {ContactFormContainer, DockedComponent} from "./styles.ts";
import Dock from "../../blocks/Components/Dock/Dock.tsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContactForm from "./ContactForm.tsx";
import ContactLottie from "../lottieFiles/contact.tsx";
import ContactHeader from "./ContactHeader.tsx";


const Contact : React.FC = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 1000); // Delay of 2 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <>

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
            )}
            <ContactHeader/>
            <ContactFormContainer>

                <ContactForm/>
                <ContactLottie/>

            </ContactFormContainer>
        </>
    )
}

export default Contact;