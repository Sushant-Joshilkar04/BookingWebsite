import React from 'react';
import DataTable from '../Componenets/DataTable';

const BookingHistory = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-red-600">Your Booking History</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <DataTable />
      </div>
    </div>
  );
};

export default BookingHistory; 