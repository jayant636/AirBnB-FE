import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import React from 'react';

const Room = ({ id, type, amenities, price, photos, isSelected }) => {
  return (
    <article>
      {isSelected && (
        <div className="flex items-center gap-1 px-5 py-1 rounded-1-lg  bg-blue-500">
          <Icon icon="star" size="12" className="fill-amber-500" />
          <p className="text-xs font-bold text-white uppercase">
            Selected Category
          </p>
        </div>
      )}
      <div className="flex border border-border p-4 rounded-3xl">
        <div className="flex-1 space-y-4 ">
          <div className="flex gap-4 items-center">
            <h3 className="text-lg font-semibold">{type}</h3>
            {isSelected && (
              <Icon
                size="26"
                icon="circleCheck"
                className="fill-green-600 text-white"
              />
            )}
          </div>
          <div>
            <ul className="flex flex-wrap gap-2">
              {amenities.map((amenity, index) => (
                <li
                  key={index}
                  className="flex gap-2 items-center min-w-[180px]"
                >
                  <Icon icon="check" size="18" className="text-green-600" />
                  <span className="text-sm font-medium text-muted-foreground">
                    {amenity}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[180px] h-[120px]">
          <img src={photos[0]} alt={type} />
        </div>
      </div>

      <div className="flex border-x border-b p-4 rounded-b-lg">
        <div className="flex flex-1 gap-2 items-center">
          <span className="text-lg font-bold ">{`Rs ${price}`}</span>
          <span className="text-sm line-through">{`Rs ${price * 1.5}`}</span>
        </div>
        <Button
          disabled={isSelected}
          variant="outline"
          className="cursor-pointer h-12 font-semibold gap-1 w-[180px] disabled:opacity-70"
        >
          {isSelected && (
            <Icon icon="circleCheck" className="fill-green-600 text-white" />
          )}
          {isSelected ? 'Selected' : 'Select'}
        </Button>
      </div>
    </article>
  );
};

export default Room;
