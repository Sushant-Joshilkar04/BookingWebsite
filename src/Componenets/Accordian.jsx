import { Accordion } from "flowbite-react";
import React from 'react'

const Accordian = () => {
  return (
    <Accordion className="divide-y divide-gray-200">
      <Accordion.Panel>
        <Accordion.Title className="text-gray-900 hover:text-red-600">
          How do I book movie tickets?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-600">
            Booking tickets is easy! Simply follow these steps:
            <ul className="list-disc pl-5 mt-2">
              <li>Select your movie or event</li>
              <li>Choose your preferred date and showtime</li>
              <li>Select your seats</li>
              <li>Choose your snacks (optional)</li>
              <li>Proceed to payment</li>
            </ul>
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title className="text-gray-900 hover:text-red-600">
          What are the benefits of booking online?
        </Accordion.Title>
        <Accordion.Content>
          <p className="text-gray-600">
            Online booking offers several advantages:
            <ul className="list-disc pl-5 mt-2">
              <li>Skip the queue at the theater</li>
              <li>Get exclusive online discounts</li>
              <li>Choose the best seats in advance</li>
              <li>Easy cancellation options</li>
              <li>Earn reward points on every booking</li>
            </ul>
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title className="text-gray-900 hover:text-red-600">
          What's your cancellation policy?
        </Accordion.Title>
        <Accordion.Content>
          <p className="text-gray-600">
            Our cancellation policy is customer-friendly:
            <ul className="list-disc pl-5 mt-2">
              <li>Full refund if cancelled 24 hours before show</li>
              <li>50% refund if cancelled 12 hours before show</li>
              <li>No refund for cancellations within 2 hours of show</li>
              <li>Refunds processed within 5-7 business days</li>
            </ul>
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title className="text-gray-900 hover:text-red-600">
          Do you offer any discounts?
        </Accordion.Title>
        <Accordion.Content>
          <p className="text-gray-600">
            Yes, we offer various discounts:
            <ul className="list-disc pl-5 mt-2">
              <li>Student discount (20% off with valid ID)</li>
              <li>Senior citizen discount (25% off)</li>
              <li>Early bird booking discount (15% off)</li>
              <li>Group booking offers (10+ tickets)</li>
              <li>Special prices on Tuesday shows</li>
            </ul>
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default Accordian;
