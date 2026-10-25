import type { Rider } from "../lib/type";
import { formatSpeed } from "../lib/format-speed";

interface RiderListProps {
  riders: Rider[];
  onSelectRider: (riderId: string) => void;
}

export default function RiderList({ riders, onSelectRider }: RiderListProps) {
  return (
    <div className="divide-y divide-[#272d30]">
      {riders.map((rider, index) => (
        <div
          key={rider.id}
          onClick={() => onSelectRider(rider.id)}
          className="p-4 cursor-pointer~"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#20291b] text-xs font-bold text-[#c6f36a]">
              {rider.initials}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="truncate text-sm font-medium">
                  {rider.name}
                </span>

                {index === 0 && (
                  <span className="rounded bg-[#262b27] px-1.5 py-0.5 text-[9px] uppercase text-[#a9b1a6]">
                    Lead
                  </span>
                )}
              </div>

              <div className="mt-1 truncate text-xs text-[#818b8b]">
                {rider.bike}
              </div>
              <div className="mt-1 text-xs text-[#929a9a]">
                Speed: {formatSpeed(rider.speedKmh)}
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <span
                  className={`text-[11px] ${
                    rider.status === "riding"
                      ? "text-[#c6f36a]"
                      : rider.status === "stopped"
                        ? "text-[#e5bc71]"
                        : "text-[#e49a78]"
                  }`}
                >
                  ●{" "}
                  {rider.status === "riding"
                    ? "Riding"
                    : rider.status === "stopped"
                      ? "Stopped"
                      : "Disconnected"}
                </span>

                <span className="text-[11px] text-[#818b8b]">
                  {rider.distanceKm} km
                </span>
              </div>

              <div className="mt-2 text-[10px] text-[#687171]">
                Last update: {rider.lastSeen}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
