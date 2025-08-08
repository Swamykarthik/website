import { useState, useEffect } from 'react';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample images for the slideshow - you can replace these with actual store photos
  const slides = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dqebzntfm/image/upload/v1754560483/web_1_1_tdxpfc.jpg",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dqebzntfm/image/upload/v1754559691/web_2_buuga6.jpg",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dqebzntfm/image/upload/v1754663024/bfb985c7-b8a6-4fb0-b187-fa8024addba6_goqs9h.jpg",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dqebzntfm/image/upload/v1754663216/f56e3ec2-3eb5-4bab-9035-38ffa5aa4674_rd6yb4.jpg",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dqebzntfm/image/upload/v1754662982/9ac11d0b-8484-4438-b5b2-04305f1ea6f8_kinyji.jpg",
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleExploreProducts = () => {
    window.location.href = '/products';
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = '919949257777';
    const message = 'Hi! I am interested in your fireworks products.';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">

          {/* Hero text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Sri Ganapathi
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Grand Fireworks
              </span>
            </h1>

            <div className="flex items-center justify-center space-x-4">
              <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                A Tradition of Grand Celebrations Since 1932
              </p>
              <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
            </div>

            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              For over 90 years, we've been lighting up celebrations across the region with our premium quality fireworks. 
              From intimate birthday parties to grand weddings, we make every moment sparkle with joy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleExploreProducts}
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold rounded-full hover:from-yellow-300 hover:to-red-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Explore Products
              </button>
              <button
                onClick={handleWhatsAppContact}
                className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Photo Slideshow */}
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-[4/3] sm:aspect-video bg-black rounded-2xl border-2 border-yellow-400/30 backdrop-blur-sm overflow-hidden group">
              <div className="relative h-full">
                {/* Main Image */}
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-contain object-center transition-all duration-500 bg-black"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30">
                  <div className="absolute bottom-6 left-6 text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-white/80">
                      {slides[currentSlide].description}
                    </p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 right-6 flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-yellow-400 scale-110' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>

                {/* Slide Counter */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                  {currentSlide + 1} / {slides.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
