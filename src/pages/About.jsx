import React from 'react';
import { motion } from 'framer-motion';
import cleanlinessImg from '../assets/Cleanliness campaign_.jpg';
import plantationImg from '../assets/Plantation_.jpg';
import armyDayImg from '../assets/Army day event_.jpg';

const About = () => {
    return (
        <div className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col lg:flex-row gap-16 items-start"
                >
                    {/* Text Section */}
                    <div className="lg:w-1/2">
                        <div className="mb-6">~
                            <h2 className="text-mnit-red font-bold tracking-widest uppercase text-sm mb-2">Who We Are</h2>
                            <h1 className="text-3xl md:text-5xl font-bold text-mnit-blue leading-tight">
                                UNITY AND DISCIPLINE <span className="font-hindi">एकता और अनुशासन</span>
                            </h1>
                        </div>
                        
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-justify">
                            <p>
                                The National Cadet Corps (NCC) is a premier youth organization dedicated to character building, leadership development, and nation-building. With its core values of discipline, integrity, and service, the NCC plays a vital role in shaping responsible and motivated citizens of the country.                               </p>
                            <p>
                                The NCC unit at Malaviya National Institute of Technology (MNIT) Jaipur, established recently in 2025, marks an important step toward fostering a culture of discipline, unity, and social responsibility among the students of the institute. Affiliated to the 8 Raj Bn NCC Jaipur, the unit commenced its journey with 18 enthusiastic cadets in its first year, with a total sanctioned strength of 54 cadets, and aligns with the institute’s vision of holistic student development in accordance with the National Education Policy (NEP) 2020.
                            </p>
                            <p>
                                The unit provides a structured platform for cadets to develop leadership qualities, physical fitness, and a strong sense of duty through military-oriented training and character-building activities. Through drills, physical training, camps, and participation in institutional and national events, the MNIT Jaipur NCC aims to inculcate teamwork, confidence, and resilience, while offering exposure to the ethos and values of the armed forces.
                            </p>
                            <p>
                                Alongside training, the unit actively engages in social outreach activities such as cleanliness drives, plantation programs, and awareness campaigns, nurturing a spirit of service and civic responsibility among young cadets. Guided by dedicated officers and instructors, the MNIT Jaipur NCC is steadily growing and working towards its vision of developing disciplined leaders and responsible citizens, truly embodying the NCC motto — “Unity and Discipline.”                            </p>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-12">
                             <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                                <img 
                                    src={cleanlinessImg} 
                                    alt="Cleanliness Drive" 
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                             </div>
                        </div>
                         <div className="space-y-4">
                             <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                                <img 
                                    src={plantationImg} 
                                    alt="Tree Plantation" 
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                             </div>
                             <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                                <img 
                                    src={armyDayImg} 
                                    alt="Army Day Event" 
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                             </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
