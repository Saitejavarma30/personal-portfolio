"use client";
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  left: 25%;
  top: -25%;
  display: flex;
  padding: 1rem;
  width: 100%;
  height: 100%;
  z-index: 0;
  transform: translate(-40%, -60%) skewX(-48deg) skewY(14deg) scale(0.675)
    rotate(0deg) translateZ(0);
`;

const Row = styled(motion.div)`
  width: 4rem;
  height: 2rem;
  border-left: 1px solid #475569;
  position: relative;
`;

const Cell = styled(motion.div)`
  width: 4rem;
  height: 2rem;
  border-right: 1px solid #475569;
  border-top: 1px solid #475569;
  position: relative;
`;

const Icon = styled.svg`
  position: absolute;
  width: 2.5rem;
  height: 1.5rem;
  top: -14px;
  left: -22px;
  color: #475569;
  stroke-width: 1px;
  pointer-events: none;
`;

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  const colors = [
    "#7dd3fc", // --sky-300
    "#f9a8d4", // --pink-300
    "#86efac", // --green-300
    "#fde047", // --yellow-300
    "#fca5a5", // --red-300
    "#c4b5fd", // --purple-300
    "#93c5fd", // --blue-300
    "#a5b4fc", // --indigo-300
    "#c4b5fd", // --violet-300
  ];

  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  return (
    <Container className={className} {...rest}>
      {rows.map((_, i) => (
        <Row key={`row` + i}>
          {cols.map((_, j) => (
            <Cell
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              animate={{ transition: { duration: 2 } }}
              key={`col` + j}
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <Icon
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </Icon>
              ) : null}
            </Cell>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export const Boxes = React.memo(BoxesCore);
