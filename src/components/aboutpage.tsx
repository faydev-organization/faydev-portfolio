import IconCloud from "@/components/magicui/icon-cloud";
import TextRevealByWord from "./magicui/text-reveal"; // Ensure this points to the correct component

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "vercel",
  "cypress",
  "docker",
  "git",
  "github",
  "visualstudiocode",
];

const Aboutpage = () => {
  return (
    <section
      id="about"
      className="bg-zinc-800 text-white pt-24 pb-10 px-4 cursor-default md:px-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 justify-center max-w-screen-xl mx-auto px-2 md:px-10">
        <div className="md:col-span-2">
          <div className="sticky top-32 mt-[130px]">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col items-center">
          <div className="relative">
            <TextRevealByWord
              className="text-lg text-justify"
              text="I am Muhammad Fayash Wahyudha, a graduate in Full-stack Web Development from Purwadhika Digital Technology School. Throughout my studies, I developed a solid foundation in various web technologies and honed my skills in both frontend and backend development. I possess strong leadership abilities and excel in effective communication, allowing me to collaborate seamlessly with team members and stakeholders. My collaborative spirit drives me to foster positive working relationships, ensuring that everyone feels valued and motivated. I am a quick learner and thrive in dynamic environments, always ready to tackle new challenges head-on. My passion for technology fuels my desire to stay updated with industry trends and best practices. I am particularly excited about the potential for innovation in the tech space and am eager to contribute to projects that make a meaningful impact. I look forward to the opportunity to work on groundbreaking solutions and grow alongside talented professionals in the field."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutpage;
