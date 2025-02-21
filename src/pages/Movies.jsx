import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassIcons from '../Componenets/GlassIcons';

const Movies = () => {
  const navigate = useNavigate();

  const movieCategories = [
    {
      icon: "🎬",
      label: "Action",
      color: "red",
      customClass: "cursor-pointer"
    },
    {
      icon: "🎭",
      label: "Drama",
      color: "purple",
      customClass: "cursor-pointer"
    },
    {
      icon: "😂",
      label: "Comedy",
      color: "orange",
      customClass: "cursor-pointer"
    },
    {
      icon: "👻",
      label: "Horror",
      color: "indigo",
      customClass: "cursor-pointer"
    },
    {
      icon: "❤️",
      label: "Romance",
      color: "red",
      customClass: "cursor-pointer"
    },
    {
      icon: "🌟",
      label: "Fantasy",
      color: "blue",
      customClass: "cursor-pointer"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12">Movies</h1>
      
      {/* Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Categories</h2>
        <GlassIcons items={movieCategories} />
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Add movie cards here */}
      </div>
    </div>
  );
};

export default Movies; 