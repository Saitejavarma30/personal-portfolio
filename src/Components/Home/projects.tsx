

import React, {useState} from 'react';
import styled from 'styled-components';
import {PROJECT_DETAILS} from "./utils.ts";
import Icon from "./redirect.svg"
import {motion} from "framer-motion";
import Paragraph from "../Words.tsx";



const ProjectContainerSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;
    padding: 4rem;
    gap: 2rem;
    background-color: #000;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
`;

const ImageHolder = styled.div`
    width: 100%;
    //max-width: 300px;
    height: auto;
    aspect-ratio: 9/4;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentHolder = styled.div`
    margin-top: 1rem;
    text-align: center;
    color: black;
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    place-items: center;
`

const NumberContainer = styled.div`
    font-size: 1.2rem;
    display: flex;
    text-align: left;
    color: orange;
    padding: 1rem 3rem
`

const HeadingContainer = styled.h3`
    font-size: 3rem;
    color: white;
    padding: 1rem 3rem;
    margin: 0;
    font-weight: 400;
    display: flex;
    text-align: left;
    gap: 2rem
    
    
`
const DetailsContainer = styled.div`
    font-size: 1.1rem;
    color: #a3a3a3;
    padding: 1rem 3rem;
    margin: 0;
    font-weight: 200;
    display: flex;
    text-align: left;
`
const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const StackDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    width: 100%;
    padding: 1rem;

    @media screen and (max-width: 900px) {
        justify-content: center;
    }
`
const UrlIcon = styled.a`
    text-decoration: none;
    color: inherit;
    flex: 1;
    margin: auto;
`

const TechStackIcons = styled.div`
    display: flex;
    gap: 10px;
    justify-content: left;
    flex: 1

    img {
        width: 40px;
        height: 40px;
        position: relative;
        cursor: pointer;
    }
`;

const Tooltip = styled.div`
    background-color: black;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap;
`;

type Project = {
    image: string;
    number: string;
    name: string;
    content: string;
    techStack: string;
    url: string
}

const TechIcon = ({ tech }: { tech: string }) => {


    return (
        <div
            style={{ position: "relative", display: "inline-block" }}

        >
            <img src={`/${tech}.svg`} alt={tech} style={{ width: 25, height: 25, cursor: "pointer" }} />

                <Tooltip
                >
                    {tech}
                </Tooltip>

        </div>
    );
};

const ProjectContainer: React.FC<{ direction: string, project:  Project}> = ({ direction, project }) => {
    return (
        <ProjectContainerSection>
            {direction === "reverse" ? (
                <>
                    <ContentHolder>
                        <NumberContainer>{project.number}</NumberContainer>
                        <HeadingContainer><Paragraph paragraph={project.name}/>
                            <UrlIcon href={project.url} target={"_blank"}>
                            <img src={Icon} alt="Custom Icon"/>
                            </UrlIcon>
                        </HeadingContainer>
                        <DetailsContainer>
                            {project.content}
                        </DetailsContainer>
                        <StackDetails>
                            <TechStackIcons>
                                {project.techStack.split(",").map((tech) => (
                                    <TechIcon key={tech} tech={tech} />
                                ))}
                            </TechStackIcons>

                        </StackDetails>
                    </ContentHolder>
                    <ImageHolder>
                        <Image src={project.image} />
                    </ImageHolder>
                </>
            ) : (
                <>
                    <ImageHolder>
                        <Image src={project.image} />
                    </ImageHolder>
                    <ContentHolder>
                        <NumberContainer>{project.number}</NumberContainer>
                        <HeadingContainer><Paragraph paragraph={project.name}/>
                            <UrlIcon href={project.url} target={"_blank"}>
                            <img src={Icon} alt="Custom Icon"/>
                            </UrlIcon>
                        </HeadingContainer>
                        <DetailsContainer>
                            {project.content}
                        </DetailsContainer>
                        <StackDetails>
                            <TechStackIcons>
                                {project.techStack.split(",").map((tech) => (
                                    <TechIcon key={tech} tech={tech} />
                                ))}
                            </TechStackIcons>

                        </StackDetails>
                    </ContentHolder>
                </>
            )}
        </ProjectContainerSection>
    );
};

const Projects = () => {
    return (
        <ProjectsContainer>
            <h1>My Projects</h1>
            {PROJECT_DETAILS.map((project, index) => {
                return <ProjectContainer direction={index%2 === 0 ? "straight": "reverse"} project={project}></ProjectContainer>
            })}

        </ProjectsContainer>
    );
};

export default Projects;