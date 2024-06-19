const Contactpage = () => {
  return (
    <section id="contact" className="bg-black text-white py-24">
      <div className="flex justify-center items-center">
        <div className="border-2 border-slate-800 rounded bg-slate-800 p-6 md:p-10 w-full md:max-w-md">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Contact Me!
          </h2>
          <div className="flex flex-col gap-6">
            <input
              className="rounded py-3 px-4 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-300"
              type="text"
              placeholder="Name"
            />
            <input
              className="rounded py-3 px-4 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-300"
              type="email"
              placeholder="Email"
            />
            <input
              className="rounded py-3 px-4 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-300"
              type="tel"
              placeholder="Phone"
            />
            <button className="bg-slate-600 hover:bg-slate-900 text-white rounded-lg py-3 px-6 font-medium text-center">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
