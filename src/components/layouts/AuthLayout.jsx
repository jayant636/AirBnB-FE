import { getAssetPath } from '@/lib/utils';
import React from 'react';

const AuthLayout = ({ children, title, description }) => {
  return (
    <>
      <div className="w-full my-20 flex items-center justify-center">
        <div className=" w-full md:max-w-md rounded-lg shadow-md p-4">
          <div className="space-y-2 flex flex-col gap-3 justify-center items-center">
            <div className="p-3 rounded-lg shadow">
              <img
                width={30}
                height={30}
                src={getAssetPath('bookingcom-icon-logo.svg')}
                alt="Logo"
              />
            </div>
            <h1 className="text-xl font-semibold text-center">{title}</h1>
            <p className="text-sm text-center">{description}</p>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
