import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const eventsData = [
  {
    id: 3,
    title: "Republic Day Celebration",
    date: "January 26, 2026",
    time: "08:00",
    location: "MNIT Campus, Jaipur",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=2676&auto=format&fit=crop",
    description: [
      "The 77th Republic Day was celebrated with great patriotic fervor at MNIT Jaipur. The event began with the unfurling of the National Flag by the Director, followed by the National Anthem.",
      "NCC cadets performed a spectacular march-past, demonstrating impeccable coordination and discipline. The event also featured cultural performances by students, aimed at promoting national integration and showcasing India's rich cultural diversity.",
      "The Director addressed the gathering, emphasizing the role of youth in nation-building and urging everyone to uphold the values enshrined in the Constitution."
    ]
  },
  {
    id: 2,
    title: "Army Day Parade Rehearsal",
    date: "January 11, 2026",
    time: "09:00",
    location: "Mahal Road, Jaipur",
    image: "https://images.unsplash.com/photo-1579961667104-d5763b0a688b?q=80&w=2670&auto=format&fit=crop", 
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
    image: "https://images.unsplash.com/photo-1579961667087-9bb3a628172c?q=80&w=2835&auto=format&fit=crop", 
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
    <div className="min-h-screen bg-white">
      {/* Cinematic Hero Section - White Theme */}
      <div className="w-full bg-white pt-40 pb-20">
        <div className="relative z-10 w-full flex flex-col justify-center items-center text-center px-4">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
          >
              <h1 className="text-6xl md:text-8xl font-bold text-mnit-blue mb-4 tracking-tighter">
                Our Saga
              </h1>
              <div className="h-1 w-24 bg-mnit-red mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
                 Moments of <span className="font-semibold text-mnit-red">Valor</span>, <span className="font-semibold text-mnit-blue">Honor</span>, and <span className="font-semibold text-mnit-red">Pride</span>.
              </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 pb-32">
        {/* Events Timeline */}
        <div className="space-y-32">
          {eventsData.map((event, index) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                
                {/* Decorative Offset Border */}
                <div className={`absolute -inset-4 border-2 border-gray-100 rounded-3xl -z-10 hidden md:block transition-transform duration-500 group-hover:scale-105 ${index % 2 === 0 ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'}`}></div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl md:text-6xl font-bold text-mnit-blue mb-6 leading-none tracking-tight">
                  {event.title}
                </h2>

                <div className="flex flex-wrap gap-6 mb-10 text-sm md:text-base text-gray-400 font-medium uppercase tracking-widest border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-mnit-red" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-mnit-red" />
                    {event.location}
                  </div>
                </div>

                <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                  {event.description.map((paragraph, i) => (
                    <p key={i}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="mt-12 flex items-center gap-4 group cursor-pointer w-fit opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-sm font-bold text-mnit-red uppercase tracking-widest">Share this moment</span>
                    <div className="h-px w-12 bg-mnit-red group-hover:w-20 transition-all"></div>
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
