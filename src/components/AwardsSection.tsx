import React from 'react';
import { Award, Trophy, Medal, Star } from 'lucide-react';

const AwardsSection = () => {
  const awards = [
    {
      icon: Trophy,
      title: "Best Fireworks Seller 2024",
      organization: "State Commerce Association",
      year: "2024",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: Award,
      title: "Safety Excellence Award",
      organization: "Fire Safety Council",
      year: "2022",
      color: "from-blue-400 to-purple-400"
    },
    {
      icon: Medal,
      title: "Pioneers in Pyrotechnics",
      year: "2025",
      color: "from-green-400 to-teal-400"
    },
    {
      icon: Star,
      title: "90 Years of Excellence",
      organization: "Heritage Business Recognition",
      year: "2022",
      color: "from-red-400 to-pink-400"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent mb-6">
            Awards & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto mb-6"></div>
          <p className="text-xl text-white/80">
            Recognition for our commitment to quality, safety, and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:-translate-y-2 text-center h-full">
                  <div className="space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${award.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {award.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm">
                      {award.organization}
                    </p>
                    
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${award.color} text-white text-sm font-semibold rounded-full`}>
                      {award.year}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Certified & Licensed</h3>
            <p className="text-white/80 mb-6">
              All our products meet strict safety standards and regulations. We are fully licensed 
              and certified by relevant authorities for fireworks retail and distribution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold border border-green-500/30">
                ISO Certified
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/30">
                Safety Approved
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold border border-purple-500/30">
                Licensed Retailer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;