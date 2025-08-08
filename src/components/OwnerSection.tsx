 

const OwnerSection = () => {
  const owners = [
    {
      name: "V. Satyanarayana Murthy",
      role: "Founder",
      quote: "Every firework we create carries the joy of celebration and the warmth of tradition.",
      image: '/tata.jpg',
      imageClass: 'scale-110 object-[50%_30%]'
    },
    {
      name: "V. Chitti Babu",
      role: "Co-Founder / Owner",
      quote: "We don't just sell fireworks; we craft memories that light up hearts forever.",
      image: '/chi.jpg',
      imageClass: 'scale-110 object-[50%_45%]'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Meet Our Visionaries
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {owners.map((owner, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="w-32 h-32 rounded-full p-[3px] bg-gradient-to-r from-yellow-400 to-red-500">
                      <div className="w-full h-full rounded-full overflow-hidden bg-black/20">
                        <img
                          src={owner.image}
                          alt={owner.name}
                          className={`w-full h-full object-cover ${owner.imageClass ?? ''}`}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{owner.name}</h3>
                    <p className="text-yellow-400 font-medium mb-4">{owner.role}</p>
                  </div>

                  <blockquote className="text-lg italic text-white/80 leading-relaxed">
                    "{owner.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OwnerSection;
