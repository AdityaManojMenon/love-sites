"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
 
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  date?: string;
  image?: string;
}
 
export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
 
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);
 
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });
 
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
 
  return (
    <div
      className="w-full bg-gradient-to-br from-neutral-900 via-black to-neutral-800 font-sans md:px-10 min-h-screen"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-pink-500 to-rose-500 bg-clip-text text-transparent mb-6">
            Our Love Story
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A timeline of beautiful moments shared together, each memory a chapter in our love story.
          </p>
        </motion.div>
      </div>
 
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <motion.div 
                className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-500/25"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-6 w-6 rounded-full bg-white border-2 border-pink-200" />
              </motion.div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text">
                {item.title}
              </h3>
            </div>
 
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <motion.div
                className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-700 hover:border-pink-500/30 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.25)" }}
              >
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-transparent bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text">
                  {item.title}
                </h3>
                {item.date && (
                  <div className="text-pink-400 text-sm font-medium mb-4 flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                    {item.date}
                  </div>
                )}
                {item.image && (
                  <div className="mb-6 rounded-xl overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="text-neutral-200 leading-relaxed">
                  {item.content}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-transparent via-neutral-600 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-pink-500 via-pink-400 to-rose-400 rounded-full shadow-lg shadow-pink-500/50"
          />
        </div>
      </div>
    </div>
  );
};
