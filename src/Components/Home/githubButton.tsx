

import styled from "styled-components";

const GithubButtonContainer = styled.a`
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  border-radius: 100px;
  place-content: center;
  padding: 0.75rem 1rem;
  font-size: 1.1rem;
  line-height: 1rem;
    border: 1px solid white;
    font-weight: 100;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  background-color: rgba(0, 0, 0, 0.4);
  box-shadow:
    inset 0 1px 0 0 rgba(255, 255, 255, 0.04),
    inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  color: #fff;
    height: 100%;
    pointer-events: auto;
    min-width: 150px;

  &:hover {
    box-shadow:
      inset 0 1px 0 0 rgba(255, 255, 255, 0.08),
      inset 0 0 0 1px rgba(252, 232, 3, 0.08);
    color: #000;
      background-color: rgba(255,255,255);
    transform: translate(0, -0.25rem);
  }
`;



const GithubButton = ({url, text="View on Github"}: {url: string, text: string}) => {

    return (
        <GithubButtonContainer href={url}>
            <span>{text}</span>
        </GithubButtonContainer>

    )
}

export default GithubButton;