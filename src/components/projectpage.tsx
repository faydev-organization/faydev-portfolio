import Image from "next/image";

const Projectpage = () => {
  return (
    <section
      id="project"
      className="bg-black text-white pt-24 pb-10 px-4 md:px-0"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <h1
            data-aos="fade"
            data-aos-once="true"
            className="text-4xl font-bold"
          >
            My Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div
            data-aos="fade-right"
            data-aos-once="true"
            className="flex flex-col items-center justify-center border-2 bg-slate-700 border-slate-800 shadow-sm rounded-xl p-6 md:p-10"
          >
            <img
              className="w-52 h-auto mb-4"
              src="/todo.png"
              alt="Todo List"
              width={200}
              height={200}
            />
            <h2 className="font-bold text-xl md:text-2xl mb-2 text-center">
              TO DO LIST
            </h2>
            <p className="text-center mb-4">Web untuk membuat to do list</p>
            <button
              className="text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:ring-slate-300 font-medium rounded-xl-lg text-sm px-5 py-2.5 text-center"
              onClick={() => alert("Coming soon")}
            >
              Lihat
            </button>
          </div>

          {/* Project 2 */}
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="flex flex-col items-center justify-center border-2 bg-slate-700 border-slate-800 shadow-sm rounded-xl p-6 md:p-10"
          >
            <img
              className="w-52 h-auto mb-4"
              src="/umkm.png"
              alt="FayFood Salad"
              width={200}
              height={200}
            />
            <h2 className="font-bold text-xl md:text-2xl mb-2 text-center">
              FayFood Salad
            </h2>
            <p className="text-center mb-4">Web produk salad</p>
            <button
              className="text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => alert("Coming soon")}
            >
              Lihat
            </button>
          </div>

          {/* Project 3 */}
          <div
            data-aos="fade-left"
            data-aos-once="true"
            className="flex flex-col items-center justify-center border-2 bg-slate-700 border-slate-800 shadow-sm rounded p-6 md:p-10"
          >
            <img
              className="w-52 h-auto mb-4"
              src="/kopi.png"
              alt="Coffee Shop"
              width={200}
              height={200}
            />
            <h2 className="font-bold text-xl md:text-2xl mb-2 text-center">
              Coffee Shop
            </h2>
            <p className="text-center mb-4">Web produk kopi</p>
            <button
              className="text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => alert("Coming soon")}
            >
              Lihat
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-once="true"
            className="flex flex-col items-center justify-center border-2 bg-slate-700 border-slate-800 shadow-sm rounded p-6 md:p-10"
          >
            <img
              className="w-52 h-auto mb-4"
              src="/kopi.png"
              alt="Coffee Shop"
              width={200}
              height={200}
            />
            <h2 className="font-bold text-xl md:text-2xl mb-2 text-center">
              Coffee Shop
            </h2>
            <p className="text-center mb-4">Web produk kopi</p>
            <button
              className="text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => alert("Coming soon")}
            >
              Lihat
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-once="true"
            className="flex flex-col items-center justify-center border-2 bg-slate-700 border-slate-800 shadow-sm rounded p-6 md:p-10"
          >
            <img
              className="w-52 h-auto mb-4"
              src="/kopi.png"
              alt="Coffee Shop"
              width={200}
              height={200}
            />
            <h2 className="font-bold text-xl md:text-2xl mb-2 text-center">
              Coffee Shop
            </h2>
            <p className="text-center mb-4">Web produk kopi</p>
            <button
              className="text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => alert("Coming soon")}
            >
              Lihat
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-once="true"
            className="flex flex-col items-center justify-center border-2 bg-slate-700 border-slate-800 shadow-sm rounded p-6 md:p-10"
          >
            <img
              className="w-52 h-auto mb-4"
              src="/kopi.png"
              alt="Coffee Shop"
              width={200}
              height={200}
            />
            <h2 className="font-bold text-xl md:text-2xl mb-2 text-center">
              Coffee Shop
            </h2>
            <p className="text-center mb-4">Web produk kopi</p>
            <button
              className="text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => alert("Coming soon")}
            >
              Lihat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projectpage;
