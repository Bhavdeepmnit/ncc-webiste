import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { eventsData } from '../data/events';



const Events = () => {
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  return (
    <div className="min-h-screen bg-white py-20">
      
      {/* Header with Lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16">
        <div className="flex items-center gap-4">
           <div className="h-0.5 bg-mnit-blue flex-1 opacity-20"></div>
           <h1 className="text-3xl md:text-5xl font-bold text-mnit-blue uppercase tracking-widest text-center">
             Past Events
           </h1>
           <div className="h-0.5 bg-mnit-blue flex-1 opacity-20"></div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {eventsData.map((event) => (
            <motion.div
              key={event.id}
              layoutId={`card-${event.id}`}
              onClick={() => setSelectedEvent(event)}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-gray-50">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                {/* Overlay Title on Hover */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="text-white text-center w-full">
                       <p className="font-bold text-lg mb-1">{event.date.split(',')[0]}</p>
                       <p className="text-xs uppercase tracking-wider">View Details</p>
                   </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                 <h3 className="text-lg font-bold text-mnit-blue line-clamp-1">{event.title}</h3>
                 <p className="text-sm text-gray-500">{event.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              layoutId={`card-${selectedEvent.id}`}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div 
                className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl pointer-events-auto flex flex-col md:flex-row overflow-hidden"
              >
                 {/* Modal Image */}
                 <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                    <img 
                      src={selectedEvent.image} 
                      alt={selectedEvent.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-mnit-blue font-bold text-sm shadow-lg">
                           {selectedEvent.date}
                        </span>
                    </div>
                 </div>

                 {/* Modal Content */}
                 <div className="w-full md:w-1/2 p-8 md:p-12 bg-white relative">
                    <button 
                        onClick={() => setSelectedEvent(null)}
                        className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <span className="sr-only">Close</span>
                        <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <h2 className="text-3xl font-bold text-mnit-blue mb-2">{selectedEvent.title}</h2>
                    <div className="flex items-center gap-2 text-mnit-red font-medium mb-8">
                        <MapPin className="w-4 h-4" />
                        {selectedEvent.location}
                    </div>

                    <div className="space-y-4 text-gray-600 leading-relaxed overflow-y-auto max-h-[40vh] pr-2 custom-scrollbar">
                         {selectedEvent.description.map((p, i) => (
                             <p key={i}>{p}</p>
                         ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <button 
                            onClick={() => setSelectedEvent(null)}
                            className="w-full py-3 bg-mnit-blue text-white rounded-xl font-bold uppercase tracking-wide hover:bg-blue-900 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                 </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
