import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 200px;
    height: 260px;
    background-color: #212121;
    box-shadow: 15px 15px 30px #191919, -15px -15px 30px #292929;
    transition: border-radius cubic-bezier(0.075, 0.82, 0.165, 1) 1s,
      transform cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
  }

  .card:hover {
    border-bottom-right-radius: 50px;
    border-top-left-radius: 50px;
    transform: scale(1.05);
  }
`;

export default Card;
