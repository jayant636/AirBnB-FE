import { trending_Destination } from '@/config/app.config';
import { getAssetPath } from '@/lib/utils';
import React from 'react';

const Trending_Destination = () => {
  return (
    <>
      <div className="container my-16">
        <div className="mb-4 space-y-1">
          <h2>Trending Destination</h2>
          <p className="text-based text-muted-foreground">
            Most popular choices for traveller from India
          </p>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {trending_Destination.map((dest, index) => (
            <div
              key={index}
              className={`
            h-[270px] rounded-lg overflow-hidden relative ${dest.className}`}
            >
              <img
                className="object-cover size-full rounded-5xl"
                src={getAssetPath(dest.image)}
                alt={dest.title}
              />
              <div className="absolute from-70% to-100% inset-0 size- bg-gradient-to-t from-transparent to-blue-800">
                <div className="p-3">
                  <h3 className="text-xl font-semibold text-white">
                    {dest.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trending_Destination;
