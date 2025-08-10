import React, { useEffect, useRef, useState } from 'react';

const slidesData = [
  {
    image: 'https://source.unsplash.com/800x600/?urban',
    title: 'Urban Mobility',
    subtitle: 'Innovations shaping the future',
    link: '#',
  },
  {
    image: 'https://source.unsplash.com/800x600/?technology',
    title: 'Tech Advancements',
    subtitle: 'AI, automation and beyond',
    link: '#',
  },
  {
    image: 'https://source.unsplash.com/800x600/?travel',
    title: 'Travel Trends',
    subtitle: 'Exploring new horizons',
    link: '#',
  },
  {
    image: 'https://source.unsplash.com/800x600/?design',
    title: 'Design Thinking',
    subtitle: 'Human-centered innovation',
    link: '#',
  },
  {
    image: 'https://source.unsplash.com/800x600/?future',
    title: 'Smart Cities',
    subtitle: 'Tomorrow’s urban reality',
    link: '#',
  }
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 3;
  const slideInterval = useRef(null);

  const startAutoSlide = () => {
    slideInterval.current = setInterval(() => {
      setCurrentIndex(prev =>
        prev + 1 >= slidesData.length - visibleSlides + 1 ? 0 : prev + 1
      );
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev =>
      prev === 0 ? slidesData.length - visibleSlides : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prev =>
      prev + 1 >= slidesData.length - visibleSlides + 1 ? 0 : prev + 1
    );
  };

  return (
    <section aria-label="Trending Articles Slider" className="relative overflow-hidden max-w-7xl mx-auto mt-12 px-4">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${(100 / visibleSlides) * currentIndex}%)`,
          width: `${(slidesData.length * 100) / visibleSlides}%`,
        }}
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        {slidesData.map((slide, index) => (
          <article
            key={index}
            className="w-1/3 flex-shrink-0 px-2"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slidesData.length}`}
          >
            <div
              className="relative bg-cover bg-center h-96 rounded-xl shadow-md"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white rounded-xl">
                <header>
                  <h2 className="text-2xl font-bold leading-tight">
                    {slide.title}
                  </h2>
                  <p className="mt-1 text-sm">{slide.subtitle}</p>
                </header>
                <a
                  href={slide.link}
                  className="mt-4 inline-block bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                  aria-label={`Read more about ${slide.title}`}
                >
                  Read More
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-r focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous Slide"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next Slide"
      >
        ›
      </button>
    </section>
  );
};

export default BannerSlider;
