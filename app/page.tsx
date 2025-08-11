"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { IconHeart, IconMusic, IconTimeline, IconMail } from "@tabler/icons-react";

export default function Home() {
  const sites = [
    {
      title: "Our Timeline",
      description: "A beautiful journey through our love story",
      href: "/timeline",
      icon: IconTimeline,
      gradient: "from-pink-500 to-rose-500",
      available: true
    },
    {
      title: "Love Letter",
      description: "Words from my heart to yours",
      href: "/love-letter", 
      icon: IconMail,
      gradient: "from-purple-500 to-pink-500",
      available: false
    },
    {
      title: "Our Playlist",
      description: "Songs that tell our story",
      href: "/playlist",
      icon: IconMusic,
      gradient: "from-blue-500 to-purple-500", 
      available: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-800 font-sans">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mb-8"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <IconHeart className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-pink-500 to-rose-500 bg-clip-text text-transparent mb-6">
            For Nandika
          </h1>
          <p className="text-neutral-300 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Hope you love this little gift I made for you ❤️ 
          </p>
        </motion.div>

        {/* Site Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sites.map((site, index) => (
            <motion.div
              key={site.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              {site.available ? (
                <Link href={site.href}>
                  <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 border border-neutral-700 hover:border-pink-500/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-pink-500/20 cursor-pointer">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${site.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <site.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                      {site.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      {site.description}
                    </p>
                    
                    <div className="mt-6 flex items-center text-pink-400 group-hover:text-pink-300 transition-colors">
                      <span className="text-sm font-medium">Explore now</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-2xl p-8 border border-neutral-700/50 cursor-not-allowed">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${site.gradient} opacity-50 rounded-xl mb-6`}>
                    <site.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-neutral-500 mb-3">
                    {site.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {site.description}
                  </p>
                  
                  <div className="mt-6 flex items-center text-neutral-600">
                    <span className="text-sm font-medium">Coming soon...</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer Message */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-neutral-400 text-lg italic">
            "Every love story is beautiful, but ours is my favorite"
          </p>
          <p className="text-pink-400 text-sm mt-4">
            For the love of my life ❤️ 
          </p>
        </motion.div>
      </div>
    </div>
  );
}
