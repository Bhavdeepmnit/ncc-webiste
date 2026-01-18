import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const eventsData = [
  {
    id: 2,
    title: "Army Day Parade Rehearsal",
    date: "January 11, 2026",
    time: "09:00",
    location: "Mahal Road, Jaipur",
    image: "https://images.unsplash.com/photo-1579961667104-d5763b0a688b?q=80&w=2670&auto=format&fit=crop", // Army/Parade placeholder
    description: [
      "Eight SD and four SW NCC cadets from Malviya National Institute of Technology (MNIT) Jaipur, along with Dr. Anup Malik, CTO (NCC), attended the Army Day Parade Rehearsal held at Mahal Road, Jaipur, on 11 January 2026, starting at 9:00 AM.",
      "The rehearsal showcased an impressive and well-coordinated display by the Indian Army, including ceremonial march-past contingents, military bands, mechanized columns, and aerial flypasts by Army helicopters, reflecting the Army’s discipline, precision, and operational preparedness.",
      "Various combat and support arms demonstrated their roles through formations and equipment displays, offering a comprehensive glimpse into the Army’s capabilities.",
      "Attending the rehearsal provided NCC cadets with first-hand exposure to military traditions, leadership, teamwork, and discipline, while instilling a sense of patriotism and pride.",
      "The event proved highly motivating for the cadets, enhancing their understanding of defence services and reinforcing the core values of the NCC such as unity, integrity, and selfless service to the nation."
    ]
  },
  {
    id: 1,
    title: "Shaurya Sandhya",
    date: "January 10, 2026",
    time: "16:00",
    location: "Sawai Mansingh Stadium (SMS), Jaipur",
    image: "https://images.unsplash.com/photo-1579961667087-9bb3a628172c?q=80&w=2835&auto=format&fit=crop", // Patriotic placeholder
    description: [
      "Six SD and four SW NCC cadets from Malviya National Institute of Technology (MNIT) Jaipur, as well as Dr. Anup Malik (NCC, CTO), attended the Shaurya Sandhya event at Sawai Mansingh Stadium (SMS), Jaipur.",
      "General Officer Commanding-in-Chief South Western Command Lieutenant General Manjinder Singh officially opened the ceremony. The event was held at SMS stadium in order to allow a huge number of people to witness and relate to the spirit of patriotism.",
      "With a focus on themes of bravery, sacrifice, unity, and national pride, the event featured a big cultural and patriotic presentation that portrayed India's history from 1947 to the present.",
      "An energetic Mallakhamb display, a theme-based act on Operation Sindoor, a visually stunning drone show, Kalaripayattu with live musical beats, and fire acts with mouth-blast fire and pillar feats were among the program's outstanding performances.",
      "For MNIT NCC cadets, it was an incredibly motivating educational experience. It inspired us to make constructive contributions to the country by strengthening our sense of discipline, patriotism, solidarity, and respect for the armed forces."
    ]
  }
];

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-mnit-blue"
          >
            Latest Events
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-xl text-gray-600"
          >
            Updates from NCC MNIT Jaipur
          </motion.p>
        </div>

        {/* Events List */}
        <div className="space-y-20">
          {eventsData.map((event, index) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row"
            >
              {/* Image Section */}
              <div className="lg:w-2/5 h-96 lg:h-auto relative overflow-hidden group">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10"></div>
                
                {/* Overlay Date for visual interest */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-center shadow-lg">
                  <span className="block text-2xl font-bold text-mnit-red leading-none">{event.date.split(' ')[1].replace(',', '')}</span>
                  <span className="block text-xs font-bold text-gray-600 uppercase tracking-widest">{event.date.split(' ')[0]}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500 font-medium">
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                    <Calendar className="w-4 h-4 text-mnit-blue" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                    <Clock className="w-4 h-4 text-mnit-blue" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                    <MapPin className="w-4 h-4 text-mnit-blue" />
                    {event.location}
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {event.title}
                </h2>

                <div className="prose prose-lg text-gray-600 leading-relaxed mb-6">
                  {event.description.map((paragraph, i) => (
                    <p key={i} className="mb-4 text-base md:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
