
"use client";

import { useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { activeRide } from "@/lib/mock-data";

const route = [
  [30.946, 77.071],
  [30.940, 77.066],
  [30.914, 77.040],
  [30.901, 77.025],
] as [number, number][];

function FitRiders() {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(
      activeRide.riders.map((rider) => rider.position)
    );

    map.fitBounds(bounds, { padding: [55, 55] });
  }, [map]);

  return null;
}

function makeIcon(initials: string, stopped: boolean) {
  return L.divIcon({
    className: "",
    html: `<div class="rider-marker ${stopped ? "is-stopped" : ""}">${initials}</div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  });
}

export default function RideMap() {
  return (
    <MapContainer
      center={[30.92, 77.05]}
      zoom={12}
      scrollWheelZoom
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FitRiders />

      <Polyline
        positions={route}
        pathOptions={{
          color: "#7a9c38",
          weight: 4,
          opacity: 0.85,
        }}
      />

      {activeRide.riders.map((rider) => (
        <Marker
          key={rider.id}
          position={rider.position}
          icon={makeIcon(
            rider.initials,
            rider.status === "stopped"
          )}
        >
          <Popup>
            <strong>{rider.name}</strong>
            <br />
            {rider.bike}
            <br />
            {rider.status === "disconnected"
              ? "Connection lost"
              : rider.status === "stopped"
                ? "Stopped"
                : "Riding"}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
