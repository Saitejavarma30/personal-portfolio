import CppIcon from "../SvgIcons/cpp";
import CssIcon from "../SvgIcons/css";
import GitIcon from "../SvgIcons/git";
import HtmlIcon from "../SvgIcons/html";
import JavaIcon from "../SvgIcons/java";
import JavascriptIcon from "../SvgIcons/javascript";
import MysqlIcon from "../SvgIcons/mysql";
import NodejsIcon from "../SvgIcons/nodejs";
import PythonIcon from "../SvgIcons/python";
import ReactIcon from "../SvgIcons/react";
import TypescriptIcon from "../SvgIcons/typescript";
import WordpressIcon from "../SvgIcons/wordpress";

const icons = [
  { name: "React", Icon: ReactIcon },
  { name: "JavaScript", Icon: JavascriptIcon },
  { name: "TypeScript", Icon: TypescriptIcon },
  { name: "Node.js", Icon: NodejsIcon },
  { name: "Python", Icon: PythonIcon },
  { name: "C++", Icon: CppIcon },
  { name: "CSS", Icon: CssIcon },
  { name: "HTML", Icon: HtmlIcon },
  { name: "Java", Icon: JavaIcon },
  { name: "MySQL", Icon: MysqlIcon },
  { name: "Git", Icon: GitIcon },
  { name: "Wordpress", Icon: WordpressIcon },
];

export default icons;

export const PROJECT_DETAILS = [{
  image: "/portfolio-ss.png",
  number: "01",
  name: "My Portfolio",
  content: "Ohh this!! its just the same website that you are looking it. Its also my favourite works. So had to put it at the top. Worked on framer-motion, got to contribute to react-bits(open-source library) because of a bug i encountered",
  techStack: "react,typescript",
  url: "https://github.com/Saitejavarma30/personal-portfolio/"
}, {
  image: "index.jpg",
    number: "02",
    name: "Redis Clone ",
    content: "Was curious to learn more about Redis, so I thought the best way was to build a clone as close to the real one as possible—diving deep into its data structures, command parsing, and memory management along the way.",
    techStack: "nodejs,typescript,redis",
  url: "https://github.com/Saitejavarma30/build-redis"
},{
  image: "sound-detector.png",
  number: "03",
  name: "Sound Detector",
  content: "And this was my very first project when I started learning frontend—so, of course, it earned a top 3 spot! Not because it was flawless, but because it actually worked. Also the first time I learned that \"works on my machine\" is not a valid excuse. 😆",
  techStack: "html,css,javascript",
  url: "https://github.com/Saitejavarma30/sound-detector"
}]

