import React from "react";

function AboutSection() {
  return (
    <>
      <div className="About mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img
            src="/assets/hero-img.webp"
            alt=""
            className="w-12 rounded-mb mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            reprehenderit molestiae, necessitatibus et fuga corporis, maiores
            voluptatum mollitia omnis harum id ipsa quasi! Suscipit quo eum ad,
            amet necessitatibus, quam maiores fuga praesentium accusantium
            assumenda ab enim pariatur optio dolor sunt ex officiis, odit qui
            dignissimos illo quasi iste! Libero! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Veniam, eaque.
          </p>
          <div className="flex items-center justify-between">
            <img
              src="/assets/hero-img.webp"
              alt="avatar"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6 w-full justify-between sm:justify-normal sm:w-auto">
              <div className="max-sm:">
                <h1 className="text-4xl mb-1 text-center">
                  38<span className="text-violet-500">+</span>
                </h1>
                <p>Project Clear</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1 text-center">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
