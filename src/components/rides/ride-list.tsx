"use client";

import type { Ride } from "../../lib/type";

interface RideListProps {
  rides: Ride[];
  selectedRideId: string;
  onSelectRide: (rideId: string) => void;
}

export default function RideList({
  rides,
  selectedRideId,
  onSelectRide,
}: RideListProps) {
  return (
    <section className="rounded-2xl border border-[#272d30] bg-[#121518] p-4">
      <h3 className="mb-3 text-sm font-semibold">Your Rides</h3>

      {rides.length === 0 ? (
        <p className="text-sm text-[#929a9a]">
          No rides yet. Create your first ride!
        </p>
      ) : (
        <div className="flex flex-wrap gap-3">
          {rides.map((ride) => (
            <button
              key={ride.id}
              type="button"
              onClick={() => onSelectRide(ride.id)}
              className={`min-w-[180px] rounded-xl border p-3 text-left transition ${
                selectedRideId === ride.id
                  ? "border-[#c6f36a] bg-[#1a2116]"
                  : "border-[#303638] hover:border-[#9bc450]"
              }`}
            >
              <div className="text-sm font-semibold">{ride.name}</div>
              <div className="mt-1 text-xs text-[#929a9a]">
                {ride.destination}
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-wide text-[#c6f36a]">
                {ride.status}
              </div>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
