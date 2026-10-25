
"use client";

import dynamic from "next/dynamic";

const RideMap = dynamic(() => import("./ride-map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center bg-[#e8e9e4] text-sm text-gray-600">
      Loading ride map...
    </div>
  ),
});

export default function MapLoader() {
  return <RideMap />;
}
