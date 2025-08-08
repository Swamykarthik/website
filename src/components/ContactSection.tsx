import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, message } = formData;
    const whatsappMessage = `Name: ${encodeURIComponent(name)}%0A%0AMessage: ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/919949257777?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-6"></div>
          <p className="text-xl text-white/80">
            Ready to light up your celebration? Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Visit Our Store</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-red-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-white/80">
                      Near Ram Reddy Rice Mill<br />
                      Rayavaram - Komaripalem<br />
                      Andhra Pradesh - 533346
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-white/80">+91 9949257777</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:sriganapathi1932@gmail.com"
                      className="text-white/80 hover:text-blue-300 underline"
                    >
                      sriganapathi1932@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Instagram className="h-6 w-6 text-pink-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Instagram</h4>
                    <a
                      href="https://instagram.com/Sri_ganapathi_fireworks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-pink-300 underline"
                    >
                      @Sri_ganapathi_fireworks
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Store Hours</h4>
                    <div className="text-white/80 space-y-1">
                      <p>Monday - Saturday: 7:00 AM - 9:00 PM</p>
                      <p>Sunday: 8:00 AM - 9:00 PM</p>
                      <p className="text-yellow-400 text-sm">Extended hours during festival seasons</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="https://wa.me/919949257777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full hover:from-green-400 hover:to-green-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Interactive Map */}
            <a
              href="https://maps.app.goo.gl/A1TQrV5bt6ED9yvi7"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:ring-2 hover:ring-yellow-400 transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
                <div className="text-center text-white/60">
                  <MapPin className="h-12 w-12 mx-auto mb-2 text-yellow-400" />
                  <p>Open Interactive Map</p>
                  <p className="text-sm">Tap to view location in Google Maps</p>
                </div>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your celebration requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-3 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold rounded-full hover:from-orange-300 hover:to-red-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>

            <p className="text-white/60 text-sm mt-4 text-center">
              We'll get back to you within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
