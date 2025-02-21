import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Datepickers from '../Componenets/Datepicker';
import { Button, Spinner } from 'flowbite-react';

const BookingPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading movie/event details
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner size="xl" color="failure" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-red-600">Book Tickets</h1>
        <Link to="/booking-history">
          <Button color="gray" className="hover:bg-gray-200">
            View Booking History
          </Button>
        </Link>
      </div>
      
      {/* Movie/Event Details */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Movie Title</h2>
        <p className="text-gray-600 mb-4">Movie description and details...</p>
      </div>

      {/* Booking Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6">Select Date & Time</h3>
        
        <div className="space-y-6">
          <Datepickers />
          
          {/* Time Slots */}
          <div>
            <h4 className="font-medium mb-3">Available Times</h4>
            <div className="grid grid-cols-3 gap-4">
              {['10:00 AM', '2:00 PM', '6:00 PM', '9:00 PM'].map((time) => (
                <Button key={time} color="light">
                  {time}
                </Button>
              ))}
            </div>
          </div>

          {/* Seats Selection */}
          <div>
            <h4 className="font-medium mb-3">Number of Seats</h4>
            <input
              type="number"
              min="1"
              max="10"
              className="w-24 p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500"
              defaultValue="1"
            />
          </div>

          <Button color="failure" size="lg">
            Proceed to Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage; 