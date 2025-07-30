import DataImage from "./data";

function App() {
  return (
    <>
      <div className="hero grid grid-cols-2">
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
            Saya adalah individu dengan pengalaman dalam beberapa proyek sebagai
            Web Developer dan Quality Control. Terbiasa memahami kebutuhan
            sistem, memastikan fungsionalitas berjalan baik, dan berkontribusi
            dalam proses pengembangan aplikasi. Dengan rasa ingin tahu yang
            tinggi, semangat belajar yang kuat, serta kecintaan pada dunia
            software development sebagai hobi maupun profesi, saya siap
            melangkah lebih jauh sebagai System Analyst yang menjembatani
            kebutuhan bisnis dan solusi teknis. Saya percaya bahwa sistem yang
            baik lahir dari pemahaman yang mendalam terhadap kebutuhan pengguna,
            komunikasi yang jelas, dan perhatian pada detail.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-2-line"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              View Project <i className="ri-eye-line"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] ml-auto"
        />
      </div>
    </>
  );
}

export default App;
