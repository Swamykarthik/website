import React from 'react';
import { Calendar, MapPin, Users, Handshake } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Calendar,
      number: "100,000+",
      title: "Displays Conducted",
      color: "from-red-400 to-red-500"
    },
    {
      icon: MapPin,
      number: "18+",
      title: "States Covered",
      color: "from-red-400 to-red-500"
    },
    {
      icon: Users,
      number: "5M+",
      title: "Happy Spectators",
      color: "from-red-400 to-red-500"
    },
    {
      icon: Handshake,
      number: "10,000+",
      title: "Returning Clients",
      color: "from-red-400 to-red-500"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            A legacy of excellence since 1932
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 text-center h-full border border-gray-100">
                  <div className="space-y-6">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 group-hover:text-red-500 transition-colors">
                        {achievement.number}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {achievement.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">90+ Years of Excellence</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Since 1932, Sri Ganapathi Grand Fireworks has been illuminating celebrations across India. 
              Our journey from a small local business to a nationally recognized fireworks company is 
              marked by countless memorable displays, satisfied customers, and a commitment to safety and quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;