import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import OwnerSection from '../components/OwnerSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AwardsSection from '../components/AwardsSection';
import AchievementsSection from '../components/AchievementsSection';
import MediaFeaturesSection from '../components/MediaFeaturesSection';
import SafetySection from '../components/SafetySection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div className="relative z-10">
      <HeroSection />
      <AboutSection />
      <OwnerSection />
      <ServicesSection />
      <TestimonialsSection />
      <AwardsSection />
      <AchievementsSection />
      <MediaFeaturesSection />
      <SafetySection />
      <ContactSection />
      
      {/* Developer Credit */}
      <footer className="py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2">
            <p className="text-white/60 text-sm">
              © 2025 <span className="text-yellow-400 font-semibold">Sri Ganapathi Grand Fireworks</span>. All rights reserved.
            </p>
            <p className="text-white/60 text-sm">
              Developed by <span className="text-yellow-400 font-semibold">Karthik Dondapati</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;