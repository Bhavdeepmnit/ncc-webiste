import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Target, Flag, Music, Users, Shield, Award } from 'lucide-react';

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-mnit-blue mb-4"
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 100 }}
      viewport={{ once: true }}
      className="h-1 bg-mnit-red mx-auto rounded-full"
    />
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        delay={0.2}
        className="mt-4 text-gray-600 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const FeatureCard = ({ icon: Icon, title, children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
  >
    <div className="w-14 h-14 bg-mnit-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-mnit-blue group-hover:text-white transition-colors duration-300">
      <Icon className="w-8 h-8 text-mnit-blue group-hover:text-white transition-colors duration-300" />
    </div>
    <h3 className="text-xl font-bold text-mnit-blue mb-4">{title}</h3>
    <div className="text-gray-600 leading-relaxed">
      {children}
    </div>
  </motion.div>
);

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />



      {/* Aims & Pledge Section */}
      <section className="py-24 bg-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
          <SectionHeader title="Our Vision & Values" />
          
          <div className="flex flex-col space-y-16 max-w-5xl mx-auto">
            {/* Aim */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden"
            >
               <div className="relative z-10">
                 <h3 className="text-3xl font-bold text-mnit-blue flex items-center gap-3 mb-8">
                  <Target className="w-8 h-8 text-mnit-red" /> Our Aim
                </h3>
                
                <p className="text-gray-600 italic border-l-4 border-mnit-red pl-6 py-4 mb-10 bg-gray-50/50 rounded-r-xl text-lg leading-relaxed">
                  "The Aims of the NCC laid out in 1988 have stood the test of time and continue to meet the requirements of the current socio-economic scenario."
                </p>
                
                <ul className="space-y-8">
                  <li className="flex items-start gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-mnit-blue/5 rounded-2xl flex items-center justify-center mt-1 group-hover:bg-mnit-blue group-hover:text-white transition-all duration-300">
                      <Users className="w-6 h-6 text-mnit-blue group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-mnit-blue transition-colors">Human Resource</h4>
                      <p className="text-gray-600 leading-relaxed">To Create a Human Resource of Organized, Trained and Motivated Youth, to Provide Leadership in all Walks of life and be Always Available for the Service of the Nation.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-mnit-blue/5 rounded-2xl flex items-center justify-center mt-1 group-hover:bg-mnit-blue group-hover:text-white transition-all duration-300">
                      <Shield className="w-6 h-6 text-mnit-blue group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-mnit-blue transition-colors">Motivation</h4>
                      <p className="text-gray-600 leading-relaxed">To Provide a Suitable Environment to Motivate the Youth to Take Up a Career in the Armed Forces.</p>
                    </div>
                  </li>
                  
                   <li className="flex items-start gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-mnit-blue/5 rounded-2xl flex items-center justify-center mt-1 group-hover:bg-mnit-blue group-hover:text-white transition-all duration-300">
                      <Award className="w-6 h-6 text-mnit-blue group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-mnit-blue transition-colors">Character Building</h4>
                      <p className="text-gray-600 leading-relaxed">To Develop Character, Comradeship, Discipline, Leadership, Secular Outlook, Spirit of Adventure, and Ideals of Selfless Service amongst the Youth.</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
                  <span className="text-xs text-gray-400 font-medium bg-gray-50 px-4 py-1.5 rounded-full border border-gray-100">Source: indiancc.nic.in</span>
                </div>
               </div>
            </motion.div>

            {/* Pledge */}
            <div className="h-full">
               <h3 className="text-3xl font-bold text-mnit-blue flex items-center gap-3 mb-8">
                <Flag className="w-8 h-8 text-mnit-red" /> Our Pledge
              </h3>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-mnit-blue to-[#001530] p-10 rounded-3xl shadow-2xl text-white h-fit relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-mnit-red/20 rounded-full blur-3xl"></div>
                
                <p className="relative z-10 text-xl md:text-2xl font-light italic leading-relaxed text-center opacity-90">
                  "We the cadets of the National Cadet Corps, do solemnly pledge that we shall always uphold the unity of India. We resolve to be disciplined and responsible citizens of our nation. We shall undertake positive community service in the spirit of selflessness and concern for our fellow beings."
                </p>
                <div className="relative z-10 mt-8 flex justify-center">
                    <div className="h-1 w-20 bg-mnit-gold rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* NCC Song Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-mnit-blue/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-mnit-red/5 rounded-full blur-[100px]"></div>

        <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10">
          <SectionHeader title="NCC Song" />
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="space-y-12 max-w-4xl mx-auto"
          >
            <div className="text-xl md:text-2xl leading-relaxed text-gray-700 font-medium tracking-wide text-center mx-auto">
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-8">
                Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain<br />
                Apni Manzil Ek Hai, Ha, Ha, Ha, Ek Hai, Ho, Ho, Ho, Ek Hai.<br />
                <span className="text-mnit-red block mt-2 font-bold">Hum Sab Bharatiya Hain.</span>
              </motion.p>
              
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-8">
                Kashmir Ki Dharti Rani Hai, Sartaj Himalaya Hai,<br />
                Saadiyon Se Humne Isko Apne Khoon Se Pala Hai<br />
                Desh Ki Raksha Ki Khatir Hum Shamshir Utha Lenge,<br />
                <span className="text-mnit-red block mt-2 font-bold">Hum Shamshir Utha Lenge.</span>
              </motion.p>
              
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-8">
                Bikhre Bikhre Taare Hain Hum Lekin Jhilmil Ek Hai,<br />
                Ha, Ha, Ha, Ek Hai, Hum Sab Bharatiya Hai.<br />
                Mandir Gurudwaare Bhi Hain Yahan, Aur Masjid Bhi Hai Yahan<br />
                Girija Ka Hai Ghariyaal Kahin, Mullah ki Kahin Hai Ajaan
              </motion.p>

              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                Ek Hee Apna Ram Hain, Ek hi Allah Taala Hai,<br />
                Ek Hee Allah Taala Hain, Raang Birange Deepak Hain Hum,<br />
                lekin Jagmag Ek Hai, Ha Ha Ha Ek Hai, Ho Ho Ho Ek Hai.<br />
                <span className="text-mnit-red block mt-2 text-3xl font-extrabold">Hum Sab Bharatiya Hain.</span>
              </motion.p>
            </div>
            
            <motion.div 
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="inline-flex items-center gap-2 text-gray-500 text-sm border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors cursor-default"
            >
               <Music className="w-4 h-4" />
               Source: indiancc.nic.in
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
