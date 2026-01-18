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
                        <div className="mb-6">
                            <h2 className="text-mnit-red font-bold tracking-widest uppercase text-sm mb-2">Who We Are</h2>
                            <h1 className="text-3xl md:text-5xl font-bold text-mnit-blue leading-tight">
                                UNITY AND DISCIPLINE <span className="font-hindi">एकता और अनुशासन</span>
                            </h1>
                        </div>
                        
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-justify">
                            <p>
                                The National Cadet Corps (NCC) is a youth development movement. It has enormous potential for nation-building. NCC IIT Roorkee is one of the oldest NCC units in the country, providing opportunities to the youth for their overall development with a sense of Duty, Commitment, Dedication, Discipline so that they become able leaders and useful citizens.
                            </p>
                            <p>
                                The National Cadet Corps, IIT Roorkee under the 10 UK Bn NCC Composite Technical Regiment National Cadet Corps is a student unit of the Indian Army which aims to develop a sense of discipline, rigour, and unity in the cadets. It provides a platform for the students to develop their personalities by engaging themselves in various events. The Guard of Honour, Indoor and outdoor sports events, firing practice, and Training camps aim to inculcate the values of teamwork and discipline in the cadets and exposure to life in the Army.
                            </p>
                            <p>
                                At the same time, working for the society, the NCC conducts plantation and cleanliness drives, awareness campaigns, and activities for social causes to instill the spirit of service in the young cadets. Currently, the NCC has 420 active members who are continuously guided by the Unit's Commanding Officer and are working towards self-development and nation-building. 'UNITY AND DISCIPLINE,' the motto of the NCC, precisely highlights the aim and culture of the unit.
                            </p>
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
