import Icon from '@/components/ui/icon';
import React from 'react';

const Hotel_Policy = ({ policy }) => {
  return (
    <>
      <section>
        <h2 className="text-xl font-bold">Hotel Policy</h2>
        <div className="space-y-4 mt-4">
          <div className="flex gap-4 mx-5">
            <div className="border-r border-border pr-4">
              <span className="text-sm">Check-In</span>
              <div>{policy.checkIn}</div>
            </div>
            <div className="border-r border-border pr-4">
              <span className="text-sm">Check-Out</span>
              <div>{policy.checkout}</div>
            </div>
          </div>
          <ul>
            {policy.rules.map((rule, index) => (
              <li key={index} className="text-sm text-muted-foreground ">
                <i class="fa-solid fa-circle-dot">{rule}</i>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Hotel_Policy;
