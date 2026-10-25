export type RiderStatus = "riding" | "stopped" | "disconnected";

export type Coordinates = [latitude: number, longitude: number];

export interface Rider {
  id: string;
  name: string;
  initials: string;
  bike: string;
  status: RiderStatus;
  distanceKm: number;
  lastSeen: string;
  position: Coordinates;
  speedKmh?: number;
}

export interface Ride {
  id: string;
  name: string;
  destination: string;
  date: string;
  status: "active" | "upcoming";
  riders: Rider[];
}

export interface RideStats {
  totalDistanceKm: number;
  averageSpeedKmh?: number;
  ridersCount: number;
}

export const todayStats: RideStats = {
  totalDistanceKm: 86.4,
  ridersCount: 4,
};

export interface CreateRideForm {
  name: string;
  destination: string;
  maxRiders: number;
}
