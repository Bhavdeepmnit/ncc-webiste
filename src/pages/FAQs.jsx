import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "What is National Cadet Corps ?",
    answer: "The National Cadet Corps (NCC) is the youth wing of the Indian Armed Forces with its headquarters in New Delhi, India. It is open to school and college students on voluntary basis as a Tri-Services Organization, comprising the Army, the Navy and the Air Wing, engaged in grooming the youth of the country into disciplined and patriotic citizens."
  },
  {
    question: "When did National Cadet Corps Come into existence?",
    answer: "The NCC came into existence on 16th July, 1948 under the NCC Act XXXI of 1948."
  },
  {
    question: "What is the nature of the NCC Programme - compulsory or voluntary?",
    answer: "The NCC is a voluntary organization."
  },
  {
    question: "Is the NCC Programme part of the Educational activity or is it a part of military activity?",
    answer: "NCC is part of the educational activity and is considered an extra-curricular activity."
  },
  {
    question: "What is/are the Aim(s) of NCC?",
    answer: "To develop character, comradeship, discipline, leadership, secular outlook, spirit of adventure, and ideals of selfless service amongst the youth of the country."
  },
  {
    question: "What is the Motto of NCC?",
    answer: "Unity and Discipline."
  },
  {
    question: "What is the NCC symbol/insignia?",
    answer: "The NCC flag contains the NCC crest in gold in the middle, with the letters 'NCC' encircled by a wreath of seventeen lotus with a background in Red, Blue and Light Blue."
  },
  {
    question: "What does the colour Red depicts in the NCC Crest?",
    answer: "Red depicts the Indian Army."
  },
  {
    question: "What do the colours Dark Blue and Light blue in the NCC Crest depict?",
    answer: "Dark Blue depicts the Indian Navy and Light Blue depicts the Indian Air Force."
  },
  {
    question: "What do the Lotus flowers depicts in NCC Crest?",
    answer: "The seventeen lotuses represent the 17 State Directorates."
  },
  {
    question: "What are the different Certificate provided by NCC?",
    answer: "'A' Certificate, 'B' Certificate, and 'C' Certificate."
  }
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQs = faqData.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-3 bg-mnit-blue/10 rounded-full mb-4"
          >
            <HelpCircle className="w-8 h-8 text-mnit-blue" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            How can we help you?
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-xl text-gray-600"
          >
            Frequently Asked Questions
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mb-12"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Type keyword to find answers..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 shadow-sm focus:border-mnit-blue focus:ring-4 focus:ring-mnit-blue/10 transition-all outline-none text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className={`text-lg font-semibold pr-8 ${activeIndex === index ? 'text-mnit-blue' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeIndex === index ? 'bg-mnit-blue text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {activeIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              No results found for "{searchQuery}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
