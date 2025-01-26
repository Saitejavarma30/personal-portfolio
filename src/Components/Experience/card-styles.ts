import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid wheat;
  width: 80%;
  background-color: black;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-display: swap;
  transition: transform 0.4s ease, background-color 0.4s ease,
    border-color 0.4s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #202020;
    border-color: white;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CardContent = styled.div`
  display: flex;
  text-align: left;
  padding: 12px;
  line-height: 24px;
  color: rgb(143, 143, 143);

  ${CardContainer}:hover & {
    color: white;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RoleContainer = styled.div`
  font-size: 24px;
  font-weight: 400;
  padding-left: 24px;
`;

export const RoleDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  gap: 16px;
  flex: 1;

  @media screen and (max-width: 768px) {
    padding-bottom: 4px;
  }
`;

export const TimelineContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  padding: 12px;
  color: gray;
  @media screen and (max-width: 768px) {
    padding-top: 4px;
  }
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
`;
