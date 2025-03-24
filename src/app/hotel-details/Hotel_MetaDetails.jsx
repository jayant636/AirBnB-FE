import Icon from '@/components/ui/icon';
import React from 'react';

const Hotel_MetaDetails = ({ hotel, info }) => {
  console.log(hotel);

  return (
    <>
      <section className="space-y-4">
        <div className="flex space-y-4">
          <div className="flex-1 space-y-1">
            <h1 className="text-2xl font-bold">{hotel.name}</h1>
            <p className="text-muted-foreground">{`${hotel?.contactInfo?.address} , ${hotel.city}`}</p>
          </div>
          <div className="">
            <div className="flex gap-2 items-center bg-blue-300 px-2 py-1 rounded-t-sm text-white">
              <span className="font-bold">4.8</span>
              <Icon className="fill-white" size="14" icon="star" />
            </div>
            <div className="bg-secondary rounded-b-sm px-2 py-1 flex items-center justify-center">
              <span className="text-xs">786 Rating</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-1.5 py-1 rounded bg-gray-100 w-fit font-semibold">
          <Icon size="14" icon="gem" />
          <span className="text-xs">Company Serviced</span>
        </div>
        <div className="flex items-center gap-2 px-2">
          <Icon icon="curve" className="mt-4 stroke-gray-400" />
          <p>5.0 Check-in rating &gt; Delightful experience</p>
        </div>
        <div className="text-orange-500 bg-orange-50 flex gap-1 p-3 items-center border rounded-2xl">
          <Icon icon="heart" />
          <p>
            Located less than 5 km From Medanta Hospital | Located 3kms From MAx
            Celebration Mall
          </p>
        </div>
      </section>
      <section className="space-y-4 my-8">
        <h2 className="text-xl font-bold">Amenities</h2>
        <ul className="flex flex-wrap gap-2">
          {hotel.amenities.map((amenity, index) => (
            <li key={index} className="flex gap-2 items-center min-w-[180px]">
              <Icon icon="check" size="14" className="text-green-600" />
              <span>{amenity}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="space-y-4 my-8">
        <h2 className="text-xl font-bold">About this Property</h2>
        <p className="text-sm leading-relaxed tracking-wide text-muted-foreground">
          {info.description}
        </p>
      </section>
    </>
  );
};

export default Hotel_MetaDetails;
