import React from "react";
import {
  CardContainer,
  CardContent,
  CardHeader,
  Image,
  LogoContainer,
  RoleContainer,
  RoleDetailsContainer,
  TimelineContainer,
} from "./card-styles";

export type CardProps = {
  content: string;
  title: string;
  logo: string;
  timeline: string;
};

const Card: React.FC<CardProps> = ({ content, title, logo, timeline }) => {
  return (
    <CardContainer>
      <CardHeader>
        <RoleDetailsContainer>
          <LogoContainer>
            <Image src={logo} alt="Flipkart Logo" />
          </LogoContainer>
          <RoleContainer>{title}</RoleContainer>
        </RoleDetailsContainer>
        <TimelineContainer>{timeline}</TimelineContainer>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </CardContainer>
  );
};

export default Card;
