import React from "react";

export interface TimelineEvent {
  title: string;
  content: React.ReactNode;
  date?: string;
  image?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    title: "First Meeting",
    date: "January 2024",
    content: React.createElement("div", { className: "space-y-4" }, [
      React.createElement("p", { className: "text-lg", key: "p1" }, 
        "The day our paths crossed and everything changed. What started as a simple conversation became the beginning of something beautiful."
      ),
      React.createElement("p", { className: "text-neutral-300", key: "p2" }, 
        "I still remember the way you smiled that day - it lit up the entire room and my heart."
      )
    ]),
    image: "/images/first-meeting.jpg"
  },
  {
    title: "First Date",
    date: "February 2024", 
    content: React.createElement("div", { className: "space-y-4" }, [
      React.createElement("p", { className: "text-lg", key: "p1" }, 
        "Our first official date - nervous butterflies, endless conversations, and the realization that I never wanted the evening to end."
      ),
      React.createElement("p", { className: "text-neutral-300", key: "p2" }, 
        "The way you laughed at my terrible jokes made me fall for you even more."
      )
    ]),
    image: "/images/first-date.jpg"
  },
  {
    title: "First 'I Love You'",
    date: "March 2024",
    content: React.createElement("div", { className: "space-y-4" }, [
      React.createElement("p", { className: "text-lg", key: "p1" }, 
        "Three little words that changed everything. The moment when my heart found its home in yours."
      ),
      React.createElement("p", { className: "text-neutral-300", key: "p2" }, 
        "I was so nervous to say it first, but seeing your face light up made it all worth it."
      ),
      React.createElement("div", { 
        className: "bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-lg p-4 mt-4",
        key: "quote"
      }, 
        React.createElement("p", { className: "text-pink-300 italic text-center" }, 
          '"I love you too" - the most beautiful words I\'ve ever heard'
        )
      )
    ]),
    image: "/images/first-love.jpg"
  },
  {
    title: "Our First Trip",
    date: "April 2024",
    content: React.createElement("div", { className: "space-y-4" }, [
      React.createElement("p", { className: "text-lg", key: "p1" }, 
        "Adventures together, creating memories that will last a lifetime. Every moment with you feels like a beautiful dream."
      ),
      React.createElement("p", { className: "text-neutral-300", key: "p2" }, 
        "From sunrise walks to late-night conversations under the stars - every second was magical."
      )
    ]),
    image: "/images/first-trip.jpg"
  },
  {
    title: "Moving In Together",
    date: "June 2024",
    content: React.createElement("div", { className: "space-y-4" }, [
      React.createElement("p", { className: "text-lg", key: "p1" }, 
        "Making a home together, sharing daily moments, and building a life side by side. Every ordinary day became extraordinary with you."
      ),
      React.createElement("p", { className: "text-neutral-300", key: "p2" }, 
        "From morning coffee together to goodnight kisses - home is wherever you are."
      )
    ]),
    image: "/images/moving-in.jpg"
  },
  {
    title: "Our Anniversary",
    date: "December 2024",
    content: React.createElement("div", { className: "space-y-4" }, [
      React.createElement("p", { className: "text-lg", key: "p1" }, 
        "Celebrating our love and looking forward to all the beautiful tomorrows ahead. Thank you for being my everything, Nandika."
      ),
      React.createElement("p", { className: "text-neutral-300", key: "p2" }, 
        "Here's to many more years of laughter, love, and endless adventures together."
      ),
      React.createElement("div", { 
        className: "bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-lg p-4 mt-4",
        key: "quote"
      }, 
        React.createElement("p", { className: "text-pink-300 italic text-center" }, 
          '"Every love story is beautiful, but ours is my favorite" ✨'
        )
      )
    ]),
    image: "/images/anniversary.jpg"
  }
];
