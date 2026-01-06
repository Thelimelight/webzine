import { useState, useEffect } from 'react';
// import { useLatestPosts } from '../api/hooks';
import { usePosts } from '../api/hooks';

export default function BannerSlider() {
  const { data: slides = [], isLoading } = usePosts();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!slides.length) return;

    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  if (isLoading) {
    return <div className="w-full h-[80vh] bg-gray-200 animate-pulse"></div>;
  }

  const currentSlide = slides[current];
  if (!currentSlide) return null;

  const imageUrl =
    currentSlide.image?.url ||
    currentSlide.image?.secure_url ||
    'https://placehold.co/1200x600?text=Banner';

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <article
          className="relative w-full h-[80vh] rounded-xl overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 flex flex-col justify-center h-full px-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {currentSlide.title}
            </h1>

            <p className="text-lg max-w-xl">
              {currentSlide.category?.name}
            </p>

            <p className="mt-4 text-sm">
              {currentSlide.author?.name}
            </p>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-3 w-3 rounded-full ${
                  idx === current ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
