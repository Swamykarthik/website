import React from 'react';
import { Shield, AlertTriangle, Users, CheckCircle } from 'lucide-react';

const SafetySection = () => {
  const safetyTips = [
    {
      icon: Shield,
      title: "Adult Supervision",
      description: "Always ensure adult supervision when handling fireworks. Never leave children unattended.",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: AlertTriangle,
      title: "Safe Distance",
      description: "Maintain a safe distance of at least 25 feet from fireworks when lighting them.",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: Users,
      title: "One at a Time",
      description: "Light only one firework at a time and never attempt to relight a failed firework.",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: CheckCircle,
      title: "Water Ready",
      description: "Keep a bucket of water or hose nearby for emergencies and to extinguish spent fireworks.",
      color: "from-purple-400 to-pink-400"
    }
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "Bureau of Indian Standards (BIS) Approved",
    "Petroleum and Explosives Safety Organization (PESO) Licensed",
    "State Fire Department Approved"
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Safety First
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Your safety is our top priority. We provide comprehensive safety guidelines and only sell certified, high-quality fireworks.
          </p>
        </div>

        {/* Safety Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {safetyTips.map((tip, index) => {
            const IconComponent = tip.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:-translate-y-2 text-center h-full">
                  <div className="space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${tip.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {tip.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Child-Safe Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Child-Safe Crackers</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              We offer a special range of child-safe fireworks that are designed with extra safety measures. 
              These products produce beautiful effects while minimizing noise and ensuring maximum safety for children.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-white/80">Reduced noise levels</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-white/80">Longer fuse for safe lighting</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-white/80">Non-toxic materials</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-white/80">Age-appropriate designs</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-2xl p-6 border border-white/10 text-center">
              <span className="text-4xl mb-2 block">🎊</span>
              <p className="text-white/80 text-sm">Sparklers</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl p-6 border border-white/10 text-center">
              <span className="text-4xl mb-2 block">✨</span>
              <p className="text-white/80 text-sm">Fountains</p>
            </div>
            <div className="bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-2xl p-6 border border-white/10 text-center">
              <span className="text-4xl mb-2 block">🎆</span>
              <p className="text-white/80 text-sm">Ground Spinners</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl p-6 border border-white/10 text-center">
              <span className="text-4xl mb-2 block">🌟</span>
              <p className="text-white/80 text-sm">Smoke Effects</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Our Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <p className="text-white/80 text-sm font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;