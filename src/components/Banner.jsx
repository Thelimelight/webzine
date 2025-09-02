import { useState, useEffect } from "react";
import { fetchLatestPosts } from "../services/api";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

export default function BannerSlider() {
  const [ slides, setSlides ] = useState([])
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    console.log('Calling fetchLatestPosts...')
    fetchLatestPosts()
  .then((data) => {
    console.log("Fetched slides:", data);
    if (Array.isArray(data)) {
      setSlides(data);
    } else {
      console.warn("Expected array but got:", data);
      setSlides([]); // fallback to empty array
    }
  })
  .catch((err) => {
    console.error("Fetch Error: ", err);
    setSlides([]); // fallback on error
  });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

//   if (slides.length === 0) {
//   return <div className="text-center py-10">Loading banner...</div>;
// }

  const currentSlide = slides[current]
  if(!currentSlide) return null 
  console.log("Current image: ", currentSlide.image)

const imageUrl = `${API_BASE_URL}/uploads/${encodeURIComponent(currentSlide.image)}`;
  //  currentSlide.image
  //   ? `${API_BASE_URL}/uploads/${currentSlide.image}`
  //   : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fidea410.digital.uic.edu%2Fblog%2F&psig=AOvVaw1Zy6UXnkasUeUj8jsv29Vz&ust=1754874760363000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNDy0oeI_44DFQAAAAAdAAAAABAE"


  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article
          className="relative w-full h-[80vh] rounded-xl overflow-hidden"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",

          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 sm:px-12 text-white">
            <header>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                {currentSlide.title}
              </h1>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                {currentSlide.subtitle}
              </h2>
            </header>

            <nav>
              <a
                href="#"
                className="inline-block border border-white px-6 py-2 rounded-full text-lg hover:bg-white hover:text-black transition"
              >
                {currentSlide.button} 
              </a>
            </nav>

            <footer className="mt-4 text-sm">
              {currentSlide.author} &bull; {currentSlide.date}
            </footer>
          </div>

          {/* Manual Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-3 w-3 rounded-full ${
                  current === idx ? "bg-white" : "bg-white/50"
                }`}
              ></button>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
