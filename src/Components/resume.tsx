import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {toast} from "react-toastify";

const ResumeContainerButton = styled(motion.button)`
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    border-radius: 100px;
    place-content: center;
    margin-top: 1rem;
    padding: 0.75rem 1rem;
    font-size: 1.1rem;
    line-height: 1rem;
    border: 1px solid white;
    font-weight: 100;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

    background-color: rgba(0, 0, 0, 0.96);
    box-shadow:
            inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
            inset 0 0 0 1px rgba(255, 255, 255, 0.4);
    color: #fff;
    height: 100%;
    pointer-events: auto;
    min-width: 150px;

    &:hover {
        box-shadow:
                inset 0 1px 0 0 rgba(255, 255, 255, 0.08),
                inset 0 0 0 1px rgba(252, 232, 3, 0.08);
        background-color: rgba(0, 0, 0, 1);
        transform: translate(0, -0.25rem);
    }
`

const ResumeDownloadButton: React.FC = () => {
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
        <ResumeContainerButton
            onClick={handleDownload}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            whileHover={{scale: 1.1}}
        >
            Download Resume
        </ResumeContainerButton>
    );
};

export default ResumeDownloadButton;
