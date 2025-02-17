import React, { useState } from "react";
import { SkillItem } from "./styles";

export type IconRendererProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
};

export const IconRenderer: React.FC<IconRendererProps> = ({ Icon, name }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <SkillItem
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon fill={isHovered ? "white" : "black"} />
      <div>{name}</div>
    </SkillItem>
  );
};
