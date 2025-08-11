"use client";
import { Timeline } from "@/components/timeline/Timeline";
import { timelineEvents } from "@/data/events";
import { motion } from "motion/react";
import Link from "next/link";
import { IconArrowLeft, IconHeart } from "@tabler/icons-react";

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-neutral-300 hover:text-pink-400 transition-colors"
            >
              <IconArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <IconHeart className="w-5 h-5 text-pink-500" />
              <span className="text-neutral-300">Our Timeline</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Timeline Content */}
      <div className="pt-16">
        <Timeline data={timelineEvents} />
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-neutral-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.p 
            className="text-neutral-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Made with ❤️ for Nandika
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
