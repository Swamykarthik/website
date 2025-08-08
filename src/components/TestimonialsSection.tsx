import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "AKKINENI RAMA RAO",
      event: "Wedding",
      role: "Business man",
      text: "Sri Ganapathi Grand Fireworks made our wedding night unforgettable. The display was breathtaking and perfectly timed!",
      rating: 5
    },
    {
      name: "GSL HOSPITALS",
      event: "Corporate Event",
      role: "DOCTOR",
      text: "Their professionalism and creativity were outstanding. Our clients were amazed by the firework show!",
      rating: 5
    },
    {
      name: "Anil Reddy",
      event: "Festival Celebration",
      role: "Cultural Committee Head",
      text: "Safe, spectacular, and mesmerizing. They truly know how to light up a festival!",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Happy Customers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-white/80">
            Hear what our customers say about their celebrations with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="text-center space-y-8">
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl italic text-white/90 leading-relaxed max-w-3xl mx-auto">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div>
                <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                <p className="text-yellow-400 font-medium">{testimonials[currentIndex].role}</p>
                <p className="text-white/60">{testimonials[currentIndex].event}</p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-yellow-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
