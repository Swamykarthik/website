import React from 'react';
import { Calendar, Award, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-6">
            About Our Store
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Calendar className="h-8 w-8 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">Established 1932</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-yellow-400 mb-2">Our Legacy</h4>
                <p className="text-lg text-white/80 leading-relaxed">
                  Founded by V. Satyanarayana Murthy and now led by V. Chitti Babu, we've maintained our position as industry pioneers through innovation and excellence.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-yellow-400 mb-2">Our Experience</h4>
                <p className="text-lg text-white/80 leading-relaxed">
                  With over 100,000+ successful shows, we've mastered the art of creating breathtaking displays that capture hearts and imaginations.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-yellow-400 mb-2">Our Commitment</h4>
                <p className="text-lg text-white/80 leading-relaxed">
                  Safety, quality, and customer satisfaction are at the core of everything we do, ensuring memorable experiences for all our clients.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <Award className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
                <h4 className="text-xl font-bold text-white mb-1">90+ Years</h4>
                <p className="text-white/70">Of Excellence</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-red-400 mx-auto mb-2" />
                <h4 className="text-xl font-bold text-white mb-1">100,000+</h4>
                <p className="text-white/70">Shows Delivered</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl">🎆</span>
                  <p className="text-white/80 mt-2">Premium Quality</p>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl">🏆</span>
                  <p className="text-white/80 mt-2">Award Winning</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl">🎇</span>
                  <p className="text-white/80 mt-2">Safe & Certified</p>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-2xl border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl">🎉</span>
                  <p className="text-white/80 mt-2">Every Celebration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
