import React from 'react';
import CancellationPolicy from './CancellationPolicy';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hotel_Checkout = ({ rooms, cancellationPolicy }) => {
  const selectedRoom = rooms.find((item) => item.isSelected);

  return (
    <>
      <div className="space-y-6">
        <div>
          <div className="flex-1 flex gap-2 items-center">
            <span className="text-2xl font-bold">{selectedRoom.price}</span>
            <span className="text-base text-muted-foreground line-through">
              {1.5 * selectedRoom.price}
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Your Savings</span>
              <p className="text-sm font-bold">{0.5 * selectedRoom.price}</p>
            </div>
          </div>

          <Button
            className="w-full h-12 text-base font-semibold mt-3 "
            aria-label="Continue to Book"
          >
            Continue to Book
          </Button>

          <div className="mt-5">
            <Icon
              icon="zap"
              size="16"
              className="mt-[3px] shrink-0 fill-rose-600 text-rose-600"
            />
            <p className="text-sm text-rose-600 font-medium">
              1k+ People booked this OYO in last 6 months
            </p>
          </div>
        </div>
        <CancellationPolicy cancellation={cancellationPolicy} />
      </div>
    </>
  );
};

export default Hotel_Checkout;
