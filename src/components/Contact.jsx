import React from "react";

function Contact() {
  return (
    <div className="contact mt-32 p-10">
      <h1 className="text-4xl mb-2 font-bold text-center">Contact</h1>
      <p className="text-base/loose text-center mb-10 opacity-50">
        let's connect with me
      </p>
      <form
        action="https://formsubmit.co/kzrkazer@gmail.com "
        method="POST"
        className="bg-zinc-800 p-10 w-fit mx-auto rounded-md"
        autoComplete="off"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              placeholder="Masukan Nama..."
              required
              className="border border-zinc-500 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Masukan Email..."
              required
              className="border border-zinc-500 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pesan" className="font-semibold">
              Pesan
            </label>
            <textarea
              name="pesan"
              id="pesan"
              cols="45"
              rows="7"
              placeholder="Pesan..."
              className="border border-zinc-500 p-2 rounded-md"
              required
            ></textarea>
          </div>
          <div className="text-center justify-center items-center">
            <button
              type="submit"
              className="bg-violet-700 p-3 rounded-lg w-full border border-zinc-600 hover:bg-violet-600 cursor-pointer"
            >
              send message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
