import { styled } from "styled-components";


export const ImageContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
align-items: center;
`
export const HeadingContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    width: 60%;
    position: relative;
    @media screen and (max-width: 800px) {
        font-size: 1.3rem;
    }
`