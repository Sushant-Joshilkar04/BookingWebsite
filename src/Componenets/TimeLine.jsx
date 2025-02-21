import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import React from 'react'

const TimeLine = () => {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>December 2023</Timeline.Time>
          <Timeline.Title className="text-red-600">Avengers: Secret Wars - Premiere</Timeline.Title>
          <Timeline.Body>
            Don't miss the most anticipated superhero movie of the year! Pre-booking starts next week.
            Special offers for early birds.
          </Timeline.Body>
          <Button color="red" className="mt-4">
            Book Now
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>November 2023</Timeline.Time>
          <Timeline.Title className="text-red-600">International Film Festival</Timeline.Title>
          <Timeline.Body>
            Experience cinema from around the world. Over 50 award-winning films from 20 countries.
            Festival passes available now!
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>October 2023</Timeline.Time>
          <Timeline.Title className="text-red-600">Broadway Musical Night</Timeline.Title>
          <Timeline.Body>
            A spectacular evening of music, dance, and drama. Featured performances from top Broadway stars.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

export default TimeLine;
