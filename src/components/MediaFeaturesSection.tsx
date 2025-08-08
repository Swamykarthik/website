import React from 'react';
import { Play, Newspaper, Tv, Radio } from 'lucide-react';

const MediaFeaturesSection = () => {
  const mediaFeatures = [
    {
      id: 1,
      channel: "ABN",
      title: "Lighting Up Traditions: The Story of Sri Ganapathi Fireworks",
      description: "A comprehensive documentary showcasing our 90-year journey and traditional firework manufacturing processes.",
      image: "https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "Documentary",
      icon: Tv
    },
    {
      id: 2,
      channel: "Andhra Prabha",
      title: "90 Years of Illuminating Celebrations",
      description: "Feature article highlighting our legacy and contribution to the fireworks industry in Andhra Pradesh.",
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "Newspaper",
      icon: Newspaper
    },
    {
      id: 3,
      channel: "TV9 Documentary",
      title: "Masters of the Sky: India's Firework Legacy",
      description: "Special documentary featuring our manufacturing unit and the art of creating spectacular firework displays.",
      image: "https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "TV Feature",
      icon: Tv
    },
    {
      id: 4,
      channel: "Suman TV",
      title: "How One Family Revolutionized India's Firework Industry",
      description: "An inspiring story about our family business and its impact on the Indian fireworks industry.",
      image: "https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "Interview",
      icon: Radio
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Media Features
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our story has been featured across various media platforms, showcasing our legacy and contribution to India's celebration culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mediaFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {feature.type}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-purple-400 font-semibold">{feature.channel}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors leading-tight">
                      {feature.title}
                    </h3>
                    
                    <p className="text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4">
                      <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                        <Play className="h-4 w-4" />
                        <span>Watch Feature</span>
                      </button>
                      <span className="text-white/50 text-sm">Featured Story</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Media Recognition</h3>
            <p className="text-white/80 mb-6 max-w-3xl mx-auto">
              Our commitment to excellence and innovation in the fireworks industry has earned us recognition 
              from leading media houses across India. These features highlight our journey, craftsmanship, 
              and the joy we bring to millions of celebrations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold border border-purple-500/30">
                National Coverage
              </span>
              <span className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full text-sm font-semibold border border-pink-500/30">
                Documentary Features
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/30">
                Industry Recognition
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold border border-green-500/30">
                Legacy Stories
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaFeaturesSection;