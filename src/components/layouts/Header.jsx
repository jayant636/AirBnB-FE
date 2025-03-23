import React from 'react';
import { Button } from '../ui/button';
import { ServiceList } from '@/config/app.config';
import Icon from '../ui/icon';

const Header = () => {
  return (
    <header className="bg-blue-500 py-2 ">
      <div className="container flex justify-between">
        <div id="logo-wrapper">
          <a href="#" aria-label="Go to Booking.com">
            <img
              src="/assets/booking.com.svg"
              alt="Logo of Booking.com"
              width={144}
              height={24}
            />
          </a>
        </div>
        <div id="auth" className="flex gap-2">
          {/* Button from shadcn library  */}
          <Button className="bg-white text-blue-500 cursor-pointer rounded-sm hover:bg-blue-300">
            Register
          </Button>
          <Button className="bg-white   text-blue-500 cursor-pointer rounded-sm hover:bg-blue-300">
            Login
          </Button>
        </div>
      </div>
      <div className="container flex gap-1">
        {ServiceList.map((item) => (
          <Button
            key={item.id}
            className={`bg-white   text-blue-500 cursor-pointer rounded-sm hover:bg-blue-300 ${
              item.active && `border border-white bg-white/65`
            } `}
          >
            <Icon icon={item.icon} />
            {item.title}
          </Button>
        ))}
      </div>
    </header>
  );
};

export default Header;
