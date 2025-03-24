import React from 'react';
import Room from './Room';

const Hotel_Rooms = ({ rooms }) => {
  return (
    <>
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Choose your rooms</h2>
        <div className="space-y-4">
          {rooms.map((room) => (
            <Room {...room} key={room.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hotel_Rooms;
