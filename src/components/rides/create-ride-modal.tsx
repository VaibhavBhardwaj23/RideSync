"use client";

import type { ChangeEvent, FormEvent } from "react";
import { Flag, X } from "lucide-react";

interface CreateRideModalProps {
  rideName: string;
  destination: string;
  onRideNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onDestinationChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
}

export default function CreateRideModal({
  rideName,
  destination,
  onRideNameChange,
  onDestinationChange,
  onSubmit,
  onClose,
}: CreateRideModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md rounded-2xl border border-[#303638] bg-[#121518] p-6 shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold">Plan a new ride</h2>
            <p className="mt-1 text-sm text-[#929a9a]">
              Give your next adventure a name.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-lg p-2 text-[#929a9a] hover:bg-[#202427]"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <label className="block text-sm text-[#d4d9d4]">
            Ride name
            <input
              required
              value={rideName}
              onChange={onRideNameChange}
              placeholder="e.g. Sunday mountain run"
              className="mt-2 w-full rounded-xl border border-[#303638] bg-[#0b0d0f] px-4 py-3 text-sm outline-none placeholder:text-[#626b6b] focus:border-[#9bc450]"
            />
          </label>

          <label className="block text-sm text-[#d4d9d4]">
            Destination
            <input
              required
              value={destination}
              onChange={onDestinationChange}
              placeholder="e.g. Shimla, Himachal Pradesh"
              className="mt-2 w-full rounded-xl border border-[#303638] bg-[#0b0d0f] px-4 py-3 text-sm outline-none placeholder:text-[#626b6b] focus:border-[#9bc450]"
            />
          </label>

          <div className="rounded-xl border border-[#303638] bg-[#0d100e] p-3 text-xs leading-5 text-[#929a9a]">
            This is a frontend prototype. Saving rides and inviting members will
            be connected to the backend in a later phase.
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#c6f36a] px-4 py-3 text-sm font-semibold text-[#14190c] hover:bg-[#d5fa8d]"
          >
            <Flag size={16} />
            Create ride
          </button>
        </form>
      </div>
    </div>
  );
}
