import TechCard from "@/components/TechCard";

import HTMLlogo from "../../../public/html.webp";
import CSSlogo from "../../../public/css.png";
import JSlogo from "../../../public/js.png";
import TSlogo from "../../../public/ts.png";
import BootstrapLogo from "../../../public/bootstrap.png";
import TailwindLogo from "../../../public/tailwind.png";
import ReactLogo from "../../../public/react.png";
import NextLogo from "../../../public/next.png";
import NodeLogo from "../../../public/node.png";
import ExpressLogo from "../../../public/express.png";
import PrismaLogo from "../../../public/prisma.png";
import MySQLLogo from "../../../public/mysql.png";
import GitLogo from "../../../public/git.png";
import GithubLogo from "../../../public/github.jpg";
import NPMLogo from "../../../public/npm.png";
import DockerLogo from "../../../public/docker.png";
import { StaticImageData } from "next/image";

interface Tech {
  name: string;
  logo: StaticImageData;
  level: string;
}

const techStack: Tech[] = [
  { name: "HTML", logo: HTMLlogo, level: "Dasar" },
  { name: "CSS", logo: CSSlogo, level: "Dasar" },
  { name: "JavaScript", logo: JSlogo, level: "Dasar" },
  { name: "TypeScript", logo: TSlogo, level: "Menengah" },
  { name: "Bootstrap", logo: BootstrapLogo, level: "Dasar" },
  { name: "Tailwind", logo: TailwindLogo, level: "Menengah" },
  { name: "ReactJS", logo: ReactLogo, level: "Menengah" },
  { name: "NextJS", logo: NextLogo, level: "Menengah" },
  { name: "NodeJS", logo: NodeLogo, level: "Menengah" },
  { name: "ExpressJS", logo: ExpressLogo, level: "Menengah" },
  { name: "Prisma", logo: PrismaLogo, level: "Menengah" },
  { name: "Mysql", logo: MySQLLogo, level: "Dasar" },
];

const tools: Tech[] = [
  { name: "Git", logo: GitLogo, level: "Dasar" },
  { name: "Github", logo: GithubLogo, level: "Dasar" },
  { name: "NPM", logo: NPMLogo, level: "Menengah" },
  { name: "Docker", logo: DockerLogo, level: "Lanjutan" },
];

const Skills: React.FC = () => {
  return (
    <div className="h-full bg-black flex flex-col items-center justify-center">
      <div className="mb-8">
        <h2 className="text-white text-2xl mb-4">Tech Stack</h2>
        <div className="grid grid-cols-4 gap-4">
          {techStack.map((tech) => (
            <TechCard
              key={tech.name}
              logo={tech.logo}
              name={tech.name}
              level={tech.level}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-white text-2xl mb-4">Tools</h2>
        <div className="grid grid-cols-4 gap-4">
          {tools.map((tool) => (
            <TechCard
              key={tool.name}
              logo={tool.logo}
              name={tool.name}
              level={tool.level}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
