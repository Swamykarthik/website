import React from 'react';
import { Factory, Sparkles, Briefcase, Stars, Heart, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Factory,
      title: "Own Manufacturing Unit",
      description:
        "We are direct manufacturers, offering high-quality products at the lowest prices in India, making your celebrations brighter and more affordable.",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: Sparkles,
      title: "Festival Celebrations",
      description:
        "Light up your festivals with grand, synchronized firework shows that leave lasting impressions.",
      color: "from-pink-400 to-rose-400"
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description:
        "Impress clients and stakeholders with professional, high-impact pyrotechnic displays for brand launches and events.",
      color: "from-red-400 to-fuchsia-500"
    },
    {
      icon: Stars,
      title: "Custom Shows",
      description:
        "Personalized firework experiences designed to match your vision, from intimate gatherings to grand celebrations.",
      color: "from-purple-400 to-indigo-400"
    },
    {
      icon: Heart,
      title: "Wedding Fireworks",
      description:
        "Create magical moments on your special day with our spectacular displays, tailored to your theme and preferences.",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Zap,
      title: "Experts in Remote Fireworks",
      description:
        "Experts in planning, designing, and executing fireworks displays using remote electronic firing systems. We blend pyrotechnics, electronics, and software to deliver safe, synchronized shows.",
      color: "from-green-400 to-emerald-400"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Whatever the occasion, we have the perfect fireworks solution to make your celebration unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:-translate-y-2 h-full">
                  <div className="text-center space-y-6">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-white/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
