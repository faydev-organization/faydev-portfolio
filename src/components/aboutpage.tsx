const aboutpage = () => {
  return (
    <section
      id="about"
      className="bg-black text-white pt-24 pb-20 px-4 cursor-default md:px-0"
    >
      <div
        data-aos="zoom-out"
        data-aos-once="true"
        className="flex flex-col items-center justify-center mb-10 md:mb-20"
      >
        <h1 className="text-5xl font-bold">HELLO!</h1>
        <p className="text-xl">I am a Full-Stack Web Developer.</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div
          data-aos="fade-down-right"
          data-aos-once="true"
          className="flex flex-col gap-8 pt-10 md:pt-0 px-2 md:p-10 w-full md:w-1/2 max-w-screen-lg"
        >
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="text-lg md:text-xl text-justify">
            Hello everyone, I'm Muhammad Fayash Wahyudha, a web developer based
            in Jakarta, Indonesia. Currently, I am studying Full-stack Web
            Development at Purwadhika Digital Technology School. I am passionate
            about my work and find joy in what I do. My expertise lies in
            building functional, user-friendly, and visually appealing websites.
            I possess strong skills in leadership, communication, teamwork, and
            adapting to new challenges.
          </p>
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-once="true"
          className="flex flex-col gap-8 pt-10 md:pt-0 px-2 md:p-10 w-full md:w-1/2 max-w-screen-lg"
        >
          <h2 className="text-3xl font-semibold">Details</h2>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <h3 className="text-xl font-semibold w-24">Name:</h3>
              <p>Muhammad Fayash Wahyudha</p>
            </div>
            <div className="flex gap-3">
              <h3 className="text-xl font-semibold w-24">Age:</h3>
              <p>19</p>
            </div>
            <div className="flex gap-3">
              <h3 className="text-xl font-semibold w-24">Location:</h3>
              <p>Jakarta, Indonesia</p>
            </div>
            <div className="flex gap-3">
              <h3 className="text-xl font-semibold w-24">Skills:</h3>
              <p className="text-lg md:text-base">
                HTML, CSS, JavaScript, React, Next, Tailwind, Bootstrap, NPM,
                TypeScript, and GitHub
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default aboutpage;
