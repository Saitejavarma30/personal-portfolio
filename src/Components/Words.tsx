import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import {MotionValue} from "framer-motion";
import styled from 'styled-components';

const ParagraphContainer = styled.div`

        display: flex;
        font-size: inherit;
        line-height: 1;
        padding: 40px;
        color: white;
        flex-wrap: wrap;
        .word{
            position: relative;
            margin-right: 12px;
            margin-top: 12px;
            .shadow{
                position: absolute;
                opacity: 20%;
            }
        }
`

export default function Paragraph({paragraph}: {paragraph: string}) {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.8", "start 0.15"]
    })

    const words = paragraph.split(" ")
    return (
        <ParagraphContainer
            ref={container}
        >
            {
                words.map( (word, i) => {
                    const start = i / words.length
                    const end = start + (1 / words.length)
                    return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
                })
            }
        </ParagraphContainer>
    )
}

const Word = ({children, progress, range}: {children: string, progress: MotionValue<number>, range: [number, number]}) => {
    const opacity = useTransform(progress, range, [0, 1])
    return <span className="word">
    <span className="shadow">{children}</span>
    <motion.span style={{opacity: opacity}}>{children}</motion.span>
  </span>
}
