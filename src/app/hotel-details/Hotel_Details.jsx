import React from 'react';
import Property_View_Carousel from './Property_View_Carousel';
import Hotel_MetaDetails from './Hotel_MetaDetails';
import Hotel_Rooms from './Hotel_Rooms';
import Hotel_Policy from './Hotel_Policy';
import Hotel_Checkout from './Hotel_Checkout';
import { HOTEL_DATA, HOTEL_INFO } from './hotel-details-dummy-data';

const Hotel_Details = () => {
  const hotelData = HOTEL_DATA;
  const hotelInfo = HOTEL_INFO;

  return (
    <div className="container mt-6 mb-12">
      <Property_View_Carousel images={hotelData.hotel.photos} />
      <div className="flex gap-6 mt-6">
        <div className="flex-1 space-y-8">
          <Hotel_MetaDetails hotel={hotelData.hotel} info={hotelInfo} />
          <Hotel_Rooms rooms={hotelData.rooms} />
          <Hotel_Policy policy={hotelInfo.hotelPolicy} />
        </div>
        <aside className="w-[340px] shrink-0 p-4 border border-border shadow-md rounded-2xl sticky top-6 h-min">
          <Hotel_Checkout
            rooms={hotelData.rooms}
            cancellationPolicy={hotelInfo.cancellationPolicy}
          />
        </aside>
      </div>
    </div>
  );
};

export default Hotel_Details;
