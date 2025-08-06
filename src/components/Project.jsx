import React from "react";
import { listProyek } from "../data";

function Project() {
  return (
    <div className="project mt-32 py-10" id="Project">
      <h1 className="text-center text-4xl font-bold mb-2 ">Project</h1>
      <p className="text-base/loose text-center opacity-50">
        Below are some of the projects I have made.
      </p>
      <div className="project-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {listProyek.map((proyek) => (
          <div
            key={proyek.id}
            className="p-4 bg-zinc-800 rounded-md h-full flex flex-col justify-between"
          >
            <img src={proyek.gambar} alt="Project Image" loading="lazy" />

            <div className="flex flex-col flex-grow">
              <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
              <p className="text-base/loose mb-4">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {proyek.tools.map((tool, index) => (
                  <p
                    className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                    key={index}
                  >
                    {tool}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <a
                href="#"
                className="bg-violet-700 p-3 rounded-lg block text-center border border-zinc-600 hover:bg-violet-600"
              >
                View Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
