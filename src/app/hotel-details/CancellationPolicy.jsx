import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Icon } from 'lucide-react';
import React from 'react';

const CancellationPolicy = ({ cancellation }) => {
  return (
    <>
      <HoverCard openDelay={100}>
        <HoverCardTrigger>
          <div className="flex gap-1 text-rose-600 items-center">
            <span>Cancellation Policy</span>
          </div>
        </HoverCardTrigger>
        <HoverCardContent>
          <h3 className="text-base font-semibold">Cancellation Policy</h3>
          <ul className="pl-4 space-y-3 list-disc">
            {cancellation.map((cancel) => (
              <li>{cancel}</li>
            ))}
          </ul>
        </HoverCardContent>
      </HoverCard>
    </>
  );
};

export default CancellationPolicy;
