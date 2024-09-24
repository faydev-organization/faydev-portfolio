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
  { name: "HTML", logo: HTMLlogo, level: "comming soon" },
  { name: "CSS", logo: CSSlogo, level: "comming soon" },
  { name: "JavaScript", logo: JSlogo, level: "comming soon" },
  { name: "TypeScript", logo: TSlogo, level: "comming soon" },
  { name: "Bootstrap", logo: BootstrapLogo, level: "comming soon" },
  { name: "Tailwind", logo: TailwindLogo, level: "comming soon" },
  { name: "ReactJS", logo: ReactLogo, level: "comming soon" },
  { name: "NextJS", logo: NextLogo, level: "comming soon" },
  { name: "NodeJS", logo: NodeLogo, level: "comming soon" },
  { name: "ExpressJS", logo: ExpressLogo, level: "comming soon" },
  { name: "Prisma", logo: PrismaLogo, level: "comming soon" },
  { name: "Mysql", logo: MySQLLogo, level: "comming soon" },
];

const tools: Tech[] = [
  { name: "Git", logo: GitLogo, level: "comming soon" },
  { name: "Github", logo: GithubLogo, level: "comming soon" },
  { name: "NPM", logo: NPMLogo, level: "comming soon" },
  { name: "Docker", logo: DockerLogo, level: "comming soon" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-zinc-800 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-white text-4xl font-semibold mb-8">Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
        <div className="text-center">
          <h2 className="text-white text-4xl font-semibold mb-8">Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
    </section>
  );
};

export default Skills;
