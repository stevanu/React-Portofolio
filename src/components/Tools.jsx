import React from "react";
import { listTools } from "../data";

function Tools() {
  return (
    <div className="tools mt-22 ">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-4xl/snug font bold mb-4">Tools Used</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">
          These are some of the tools I use to build a website
        </p>
      </div>
      <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listTools.map((tool) => (
          <div
            className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
            key={tool.id}
          >
            <img
              src={tool.gambar}
              alt="Tools Image"
              className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-800"
            />
            <div>
              <h4>{tool.nama}</h4>
              <p>{tool.ket}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
