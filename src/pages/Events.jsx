import React from 'react';
import GlassIcons from '../Componenets/GlassIcons';
import MasonaryComo from '../Componenets/MasonaryComo';

const Events = () => {
  const eventCategories = [
    {
      icon: "🎭",
      label: "Theatre",
      color: "purple",
      customClass: "cursor-pointer"
    },
    {
      icon: "🎵",
      label: "Music",
      color: "blue",
      customClass: "cursor-pointer"
    },
    {
      icon: "🎪",
      label: "Circus",
      color: "orange",
      customClass: "cursor-pointer"
    },
    {
      icon: "🎨",
      label: "Art",
      color: "green",
      customClass: "cursor-pointer"
    },
    {
      icon: "🎤",
      label: "Comedy",
      color: "red",
      customClass: "cursor-pointer"
    },
    {
      icon: "🎮",
      label: "Gaming",
      color: "indigo",
      customClass: "cursor-pointer"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12">Events</h1>
      
      {/* Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Event Categories</h2>
        <GlassIcons items={eventCategories} />
      </div>

      {/* Events Gallery */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
        <MasonaryComo />
      </section>
    </div>
  );
};

export default Events; 