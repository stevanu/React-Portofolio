import React from "react";
import { listProyek } from "../data";

function Project() {
  return (
    <div className="project mt-32 py-10">
      <h1 className="text-center text-4xl font-bold mb-2 ">Project</h1>
      <p className="text-base/loose text-center opacity-50">
        Below are some of the projects I have made.
      </p>
      <div className="project-box mt-14 grid grid-cols-3 gap-5">
        {listProyek.map((proyek) => (
          <div key={proyek.id}>
            <img src={proyek.gambar} alt="Project Image" />
            <div>
              <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
              <p className="text-base/loose mb-4">{proyek.desk}</p>
              <div className="flex flex-warp gap-2">
                {proyek.tools.map((tool, index) => (
                  <p
                    className="py-1 px-3 border border-zinc-500 rounded-md"
                    key={index}
                  >
                    {tool}
                  </p>
                ))}
              </div>
              <div>
                <a href="#">View Website</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
