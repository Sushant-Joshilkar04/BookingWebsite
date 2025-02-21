import React, { useState, useEffect } from 'react';
import ScrollVelocity from '../Componenets/ScrollVelocity';
import BounceCompo from '../Componenets/BounceCompo';
import MasonaryComo from '../Componenets/MasonaryComo';
import TimeLine from '../Componenets/TimeLine';
import Accordian from '../Componenets/Accordian';
import DataTable from '../Componenets/DataTable';
import { Spinner } from 'flowbite-react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner size="xl" color="failure" />
      </div>
    );
  }

  return (
    <div className="space-y-12 py-8">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-screen bg-gradient-to-r from-purple-900 to-indigo-800 flex items-center justify-center overflow-hidden">
        <ScrollVelocity
          texts={['Book your Tickets Now!', 'Movies • Events • Shows']}
          velocity={50}
          className="text-white font-bold"
        />
      </section>

      {/* Featured Movies Section */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Movies</h2>
        <BounceCompo />
      </section>

      {/* Events Gallery */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
        <MasonaryComo />
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 bg-gray-50 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-red-600">Latest Releases & Events</h2>
        <TimeLine />
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-red-600">Frequently Asked Questions</h2>
        <Accordian />
      </section>

     
    </div>
  );
};

export default Home; 