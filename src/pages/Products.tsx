import React, { useState } from 'react';
import { ShoppingCart, Star, Filter, Search } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

const products = [
    { id: 1, name: "Small Rockets (20 pcs)", category: "Juvalu", price: "₹600", originalPrice: "₹799", rating: 5, description: "Good For Mini Celebrations" },
    { id: 2, name: "Medium Rockets (15 pcs)", category: "Rockets", price: "₹600", originalPrice: "₹950", rating: 5, description: "Good For events and mini Celebrations (Medium Sound)" },
    { id: 3, name: "Large Rockets (10 pcs)", category: "Gun Rockets", price: "₹599", originalPrice: "₹899", rating: 5, description: "Good for Political events and Celebrations (High Sound)" },
    { id: 4, name: "Small Rockets Colour (20 pcs)", category: "Juvalu", price: "₹700", originalPrice: "₹900", rating: 5, description: "Good For Mini Celebrations" },
    { id: 5, name: "Medium Rockets Colour (15 pcs)", category: "Rockets", price: "₹700", originalPrice: "₹950", rating: 5, description: "Good For events and mini Celebrations (Medium Sound)" },
    { id: 6, name: "Large Rockets Colour (10 pcs)", category: "Gun Rockets", price: "₹699", originalPrice: "₹999", rating: 5, description: "Good for Political events and Celebrations (High Sound)" },
    { id: 7, name: "Paper Shot", category: "Event items", price: "₹150", originalPrice: "₹250", rating: 5, description: "Paper Shot for events" },
    { id: 8, name: "Cold Fire Gun", category: "Event items", price: "₹230", originalPrice: "₹390", rating: 4.5, description: "Hand Gun" },
    { id: 9, name: "Cold Fire Refills", category: "Event items", price: "₹99", originalPrice: "₹180", rating: 5, description: "Gun Refills" },
    { id: 10, name: "Birthday Celebration Box Mini", category: "Special Box", price: "₹1600", originalPrice: "₹2300", rating: 5, description: "For Happy celebrations" },
    { id: 11, name: "Birthday Celebrations Box Large", category: "Combo", price: "₹2300", originalPrice: "₹3200", rating: 5, description: "For Happy celebrations" },
    { id: 12, name: "Crackling Roll Mini", category: "", price: "₹600", originalPrice: "₹800", rating: 5, description: "Good For Entries" },
    { id: 13, name: "Single Shot", category: "", price: "₹150", originalPrice: "₹280", rating: 5, description: "3inch Ball" },
    { id: 14, name: "16 Shots (3inch Ball)", category: "", price: "₹2200", originalPrice: "₹3500", rating: 5, description: "Round Circle" },
    { id: 15, name: "Smoke", category: "", price: "₹95", originalPrice: "₹130", rating: 5, description: "Smoke for entries" },
    { id: 16, name: "Nara Outs", category: "", price: "₹20", originalPrice: "₹35", rating: 4.5, description: "Bomb" },
    { id: 17, name: "Disco Fountain", category: "", price: "₹18", originalPrice: "₹28", rating: 5, description: "Fountain" },
    { id: 18, name: "Fan Cake", category: "", price: "₹2999", originalPrice: "₹3800", rating: 5, description: "Cross Shots" },
    { id: 19, name: "Crackling Roll Large", category: "", price: "₹1200", originalPrice: "₹1800", rating: 5, description: "Good for entries" },
    { id: 20, name: "Event Crackers Customization", category: "Customization", price: "DM us", originalPrice: "DM us", rating: 5, description: "Customize as you want" },
    { id: 21, name: "Festival Crackers Customization", category: "Customization", price: "DM us", originalPrice: "DM us", rating: 5, description: "Customize as you want" },
    { id: 22, name: "Thunder Sound Bombs", category: "Bomb", price: "₹25", originalPrice: "₹38", rating: 5, description: "Good For Festivals and celebrations for Sound" },
    { id: 23, name: "Political Event Customization", category: "Customization", price: "DM us", originalPrice: "DM us", rating: 5, description: "Customize as you want" },
    { id: 24, name: "30 Shot (Company)", category: "shots", price: "₹580", originalPrice: "₹700", rating: 5, description: "Branded Company" },
    { id: 25, name: "60 Shot (Company)", category: "shots", price: "₹1150", originalPrice: "₹1400", rating: 5, description: "Branded Company" },
    { id: 26, name: "120 Shot (Company)", category: "shots", price: "₹2050", originalPrice: "₹3100", rating: 5, description: "Branded Company" },
    { id: 27, name: "Hand Lights (10pcs)", category: "Lights", price: "₹150", originalPrice: "₹300", rating: 5, description: "Good For Kids" },
    { id: 28, name: "Baby Candle (50pcs)", category: "Lights", price: "₹65", originalPrice: "₹180", rating: 5, description: "Good For Kids" },
    { id: 29, name: "Customization Fireworks", category: "Customization", price: "DM us", originalPrice: "DM us", rating: 5, description: "Customize as you want" }
  ];


 const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBuyNow = (productName: string) => {
    const message = `Hi! I want to order ${productName}`;
    const whatsappUrl = `https://wa.me/919949257777?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-6">
            Explore Our Crackers Collection
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover our premium collection of fireworks, carefully curated for every celebration and occasion.
          </p>
        </div>

        {/* Important Notice */}
        <div className="mb-12 p-6 bg-yellow-100/10 border border-yellow-500 rounded-xl text-white shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            🛑 Important Notice from Sri Ganapathi Grand Fireworks 🛑
          </h2>
          <p className="mb-2">🎇 In compliance with <span className="font-semibold">Supreme Court guidelines</span>, we kindly inform our customers that <span className="text-red-400 font-semibold">home delivery of fireworks is strictly not available</span>.</p>
          <p className="mb-2">🏪 We welcome you to <span className="font-semibold">visit our store directly</span> for all your purchases.</p>
          <p className="mb-2">💻 This website is only intended to help you <span className="font-semibold">check product prices and details</span>.</p>
          <p className="mb-2">🛍️ Orders can be placed <span className="font-semibold">in-store</span> or via <span className="font-semibold">direct WhatsApp contact only</span>.</p>
          <p className="mt-2">📍 Thank you for understanding and supporting <span className="font-semibold">legal and safe celebrations</span>!</p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="relative p-4">
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}% OFF
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors mb-2">
                      {product.name}
                    </h3>
                    <p className="text-white/70 text-sm">{product.description}</p>
                  </div>

                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < product.rating ? 'text-yellow-400 fill-current' : 'text-white/30'
                        }`}
                      />
                    ))}
                    <span className="text-white/70 text-sm ml-2">({product.rating}.0)</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <span className="text-white/50 line-through">{product.originalPrice}</span>
                  </div>

                  <button
                    onClick={() => handleBuyNow(product.name)}
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full hover:from-green-400 hover:to-green-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No products */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-white/50 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No products found</h3>
            <p className="text-white/70">
              Try adjusting your search criteria to find what you're looking for.
            </p>
          </div>
        )}

        {/* Bulk Orders */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Bulk Orders or Custom Packages?</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Looking for something specific or need large quantities? We offer competitive pricing for bulk orders 
            and can create custom packages tailored to your celebration needs.
          </p>
          <button
            onClick={() => handleBuyNow('Bulk Order Inquiry')}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:from-purple-400 hover:to-pink-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Contact for Bulk Orders
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-white/10 text-center">
        <div className="space-y-2">
          <p className="text-white/60 text-sm">
            © 2025 <span className="text-yellow-400 font-semibold">Sri Ganapathi Grand Fireworks</span>. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Developed by <span className="text-yellow-400 font-semibold">Karthik Dondapati</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;