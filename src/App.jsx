import DataImage from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1 ">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
            />
            <q>Kode yang indah, yang lahir dari ketekunan. 👨‍💻</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, saya Ren</h1>
          <p className="text-base/loose mb-6 opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            consequatur voluptatem, corrupti vero, aut aperiam, consectetur
            necessitatibus molestiae aspernatur expedita deleniti ab odio
            maiores ut dolor! Voluptates commodi laborum expedita aperiam
            cupiditate distinctio, consequatur inventore pariatur nulla facere,
            similique et officiis laudantium? Qui saepe ipsam cumque nihil
            laboriosam pariatur et?
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-file-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              View Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto"
        />
      </div>
    </>
  );
}

export default App;
