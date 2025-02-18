import {
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";




const CARD_DATA:{year: number, logo: string, content: string}[] = [
  {
    "year": 2020,
    "logo": "/dutypar.svg",
    "content": "This was the year I got introduced to frontend development. Due to COVID, everything was done remotely, so I decided to give it a try and apply for internships. I started working for Dutypar, an early-stage startup, where I built and maintained their website from scratch."
  },
  {
    "year": 2021,
    logo: "/optum.svg",
    "content": "I continued working with Dutypar, where I built my first Node.js project (Invoice Generator). I also worked at Optum as a backend developer, contributing to building a prototype for a load balancer using Kafka and Azure Event Hubs (a close replica of the prototype is available)."
  },
  {
    "year": 2022,
    logo: "/flipkart.svg",
    "content": "I joined my first full-time job as a Full Stack Developer at Flipkart in July 2022. Here, I gained experience with frontend technologies like React, React Native, and TypeScript. For the next few months, I worked on React Native, launching a mobile feature that had previously been released on the web. This role helped me gain expertise in React, React Native, and GraphQL."
  },
  {
    "year": 2023,
    logo: "/flipkart.svg",
    "content": "After working for almost 6–7 months exclusively on React and React Native, I transitioned to backend development, working with MySQL, Elasticsearch, and Java. This also marked the first time my code caused a production issue—although it lasted only 15 minutes at midnight, it was a learning experience. During this time, I also worked with Python and started taking ownership of projects previously managed by my team."
  },
  {
    "year": 2024,
    logo: "/flipkart.svg",
    "content": "This year has been one of the best in my professional career. I delivered a major project by developing the UI for a feature from scratch, impacting over ₹2300Cr GMV. I also led the migration of a legacy Django project into a React-based micro frontend. One of my key achievements was optimizing a computational job, reducing its runtime from 9 hours to 3 hours, which allowed me to dive deep into Apache Spark.  I also took on backend projects, such as building my own HTTP server and implementing a Redis-like system."
  },
  {
    "year": 2025,
    logo: "/flipkart.svg",
    "content": "I was promoted to SDE-II at the start of 2025. I played a key role in the release of a major feature, ensuring a seamless rollout with high performance and scalability. Additionally, I contributed to the migration of our backend infrastructure from JDK 8 to JDK 17, optimizing performance and security. This year also marked my increased involvement in system design discussions, contributing to the planning and scalability improvements of various projects. 2025 also marked as the year where i have done my first open source contribution"
  }
]

const ContentContainer = styled(motion.div)`
  margin: 3rem;
  font-size: 2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100 !important;

  
  @media screen and (max-width: 700px) {
    font-size: 1rem;
    margin: 0.5rem;
  }
`

// @ts-ignore
const ContentHolder = ({content}) => {
  return (
      <ContentContainer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1}}
          transition={{duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          >
          {content}
      </ContentContainer>
  )
}





const Timeline: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

  const data = CARD_DATA.map((card) => {
    return {
      title: card.year,
      content: card.content,
      logo: card.logo,
    };
  });


  useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 40%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

    const opacityTransform = useTransform(
        scrollYProgress,
        [0, 0.1, 0.95, 1],
        [0, 1, 1, 0.5]
    );

    return (
        <Container ref={containerRef}>
            <Content>
                <Title>My Dev Journey</Title>
                <Description>
                    I care about clean code, great design, and making things work beautifully.
                    Started my dev journey in 2020 (because you gotta do what you gotta do 😉),
                    graduated in 2022, and I've been building and learning ever since!"
                </Description>
            </Content>

            <TimelineContainer ref={ref}>
                {data.map((item, index) => (
                <TimelineItem key={index} >
                    <StickyContainer>
                        <CircleContainer>
                            <InnerCircle/>
                        </CircleContainer>
                        <Title>{item.title}</Title>
                    </StickyContainer>

                    <TimelineContent>
                        <MobileTitle>{item.title}</MobileTitle>
                        {/*<ContentContainer>*/}
                      <ContentHolder content={item.content}/>
                        {/*</ContentContainer>*/}

                    </TimelineContent>
                </TimelineItem>
                ))}
                <Line height={height}>
                    <MotionLine
                        style={{height: heightTransform, opacity: opacityTransform}}
                    />
                </Line>
            </TimelineContainer>
        </Container>
    );
};

const Container = styled.div`
    width: calc(100% - 8rem);
    background-color: ${({theme}) => theme.bgPrimary};
    font-family: sans-serif;
    padding: 3rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  pointer-events: none;
    margin-bottom: 8rem;
  
  *{
    pointer-events: none;
  }
    
    @media screen and (max-width: 600px) {
        width: 100%;
        padding: 0;
        
    }
`;

const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 5rem 2rem;
`;

const Description = styled.p`
    color: white;
  font-size: 1.7rem;
  font-weight: 200;
`;

const TimelineContainer = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 5rem 0;
`;

const TimelineItem = styled.div`
    display: flex;
    justify-content: start;
    padding-top: 2.5rem;
    gap: 2.5rem;
`;

const StickyContainer = styled.div`
    position: sticky;
    display: flex;
    flex-direction: column;
    z-index: 40;
    align-items: center;
    top: 30%;
    align-self: flex-start;
    max-width: 20rem;

    @media (min-width: 768px) {
        flex-direction: row;
        max-width: 100%;
    }

    @media (min-width: 1024px) {
        max-width: 24rem;
    }
`;

const CircleContainer = styled.div`
    height: 2.5rem;
    position: absolute;
    left: 0.75rem;
    width: 2.5rem;
    border-radius: 50%;
    background-color: ${({theme}) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        left: 0.75rem;
    }
`;

const InnerCircle = styled.div`
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background-color: black;
    border: 1px solid white;
    padding: 0.5rem;
`;

const Title = styled.h3`
    display: none;
    font-size: 1.25rem;
    font-weight: 300;
    color: ${({theme}) => theme.text};

    @media (min-width: 768px) {
        display: block;
        padding-left: 5rem;
        font-size: 3rem;
    }
`;

const TimelineContent = styled.div`
    position: relative;
    padding-left: 5rem;
    padding-right: 5rem;
    width: 80%;
  @media screen and (max-width: 700px) {
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const MobileTitle = styled.h3`
    display: block;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
  margin-top: 0;
  text-align: center;

    @media (min-width: 768px) {
        display: none;
    }
`;

const Line = styled.div<{ height: number }>`
    position: absolute;
    left: 2rem;
    top: 0;
    width: 2px;
    background: ${({theme}) => theme.lineGradient};
    height: ${({height}) => height}px;
`;

const MotionLine = styled(motion.div)`
    position: absolute;
    inset: 0;
    width: 2px;
    background: linear-gradient(to top, #a855f7, #3b82f6, transparent);
    border-radius: 9999px;
`;


export default Timeline;
