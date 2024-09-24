import IconCloud from "@/components/magicui/icon-cloud";

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
      className="bg-zinc-800 text-white pt-24 pb-20 px-4 cursor-default md:px-0"
    >
      <div className="flex flex-col items-center justify-center mb-10 md:mb-20">
        <h1 className="text-5xl font-bold">HELLO!</h1>
        <p className="text-xl">I am a Full-Stack Web Developer.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-screen-xl mx-auto px-2 md:px-10">
        <h1 className="flex items center justify-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          dignissimos amet magni, fugiat inventore in iure. Incidunt ea cum
          alias recusandae iste debitis ab ullam? Architecto, accusamus ab.
          Tempora accusantium voluptatibus porro voluptatum non vitae fuga! Enim
          error quo consequuntur modi blanditiis impedit earum tempore,
          exercitationem quam distinctio ipsum saepe veniam officia dolor, fuga
          dolore vel iure, sint libero sequi recusandae quaerat voluptate
          accusantium. Alias, modi veniam, iusto nemo quos mollitia, quo quas
          eaque tenetur qui a nesciunt explicabo in velit? Quia excepturi
          officia quibusdam nulla. Omnis cum commodi, itaque similique tenetur
          tempora a eaque blanditiis sequi, consectetur assumenda, aliquid
          tempore saepe quaerat ratione sint aut obcaecati placeat doloremque
          nesciunt ipsum temporibus sit? Quisquam aperiam atque in alias. Culpa,
          in!
        </h1>
        <div>
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </section>
  );
};

export default Aboutpage;
