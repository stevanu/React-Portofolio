import React from "react";
import DataImage from "../data";

function Home() {
  return (
    <div
      id="Home"
      className="hero grid md:grid-cols-2 items-center pt-5 xl:gap-0 gap-6 grid-cols-1"
    >
      <div>
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img
            src={DataImage.HeroImage}
            alt="Hero Logo"
            className="w-10 rounded-md"
            loading="lazy"
          />
          <q>Kode yang indah, yang lahir dari ketekunan. 👨‍💻</q>
        </div>

        <h1 className="text-5xl font-bold mb-6">Hi, saya Ren</h1>

        <p className="text-base leading-relaxed mb-6 opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          consequatur voluptatem, corrupti vero, aut aperiam, consectetur
          necessitatibus molestiae aspernatur expedita deleniti ab odio maiores
          ut dolor!
        </p>

        <div className="flex items-center sm:gap-4 gap-2">
          <a
            href="#"
            className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 text-white"
          >
            Download CV <i className="ri-file-download-line ri-lg"></i>
          </a>
          <a
            href="#Project"
            className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 text-white"
          >
            View Project <i className="ri-arrow-down-line ri-lg"></i>
          </a>
        </div>
      </div>

      <img
        src={DataImage.HeroImage}
        alt="Hero Illustration"
        className="w-[500px] md:ml-auto"
        loading="lazy"
      />
    </div>
  );
}

export default Home;
