import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { DESTINATIONS } from '@/config/app.config';
import React, { useState } from 'react';

const LocationInput = ({ form }) => {
  const city = form.watch('city');
  const [isPopOverOpen, setPopOverOpen] = useState(false);

  function citySelectHandler(e, index) {
    e.preventDefault();
    const selectedDestinations = DESTINATIONS[index];
    console.log(selectedDestinations);
    form.setValue('city', selectedDestinations?.city || '');
    setPopOverOpen(false);
  }

  return (
    <>
      <Popover open={isPopOverOpen} onOpenChange={setPopOverOpen}>
        <PopoverTrigger asChild>
          <div className="flex gap-2 items-center px-4 py-2 rounded bg-background lg:min-w-[360px] h-full ">
            <Icon
              icon="bed"
              size="24"
              className="text-muted-foreground shrink-0 gap-2"
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormControl>
                  <Input
                    type="city"
                    placeholder="Select City"
                    className="h-10 rounded"
                    {...field}
                  />
                </FormControl>
              )}
            />
            <button
              role="button"
              className={city ? '' : 'opacity-0 pointer-events-none'}
              onClick={(e) => {
                e.preventDefault();
                form.setValue('city', '');
              }}
              aria-label="Clear the city input"
            >
              <Icon
                icon="close"
                size="18"
                className="text-muted-foreground shrink-0"
              />
            </button>
          </div>
        </PopoverTrigger>
        <PopoverContent
          onOpenAutoFocus={(e) => e.preventDefault()}
          sideOffset="1"
          align="start"
          className="w-[420px] "
        >
          <div className="p-3">
            <p className="text-sm font-semibold ">Popular Destination Nearby</p>
            <div className="max-h-[300px] overflow-y-auto ">
              {DESTINATIONS.map((destination, index) => (
                <div
                  key={index}
                  className="flex items-center px-3 py-2 hover:bg-accent cursor-pointer"
                  onClick={(e) => citySelectHandler(e, index)}
                >
                  <Icon icon="location" />
                  <div>
                    <p className="text-sm font-semibold">{destination.city}</p>
                    <p className="text-sm text-muted-foreground">
                      {destination.country}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default LocationInput;
