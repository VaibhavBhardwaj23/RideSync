
import type { Ride } from "./type";

export const activeRide: Ride = {
  id: "RS-001",
  name: "Weekend Mountain Run",
  destination: "Shimla, Himachal Pradesh",
  date: "Today",
  status: "active",
  riders: [
    {
      id: "r1",
      name: "You",
      initials: "Y",
      bike: "KTM Duke 390",
      status: "riding",
      distanceKm: 42.8,
      lastSeen: "Just now",
      position: [30.901, 77.025],
      speedKmh: 65,
    },
    {
      id: "r2",
      name: "Arjun Mehta",
      initials: "AM",
      bike: "Royal Enfield Himalayan",
      status: "riding",
      distanceKm: 41.9,
      lastSeen: "Just now",
      position: [30.914, 77.040],
    },
    {
      id: "r3",
      name: "Rohan Singh",
      initials: "RS",
      bike: "KTM Adventure 390",
      status: "stopped",
      distanceKm: 36.2,
      lastSeen: "2 min ago",
      position: [30.940, 77.066],
      speedKmh: 85,
    },
    {
      id: "r4",
      name: "Kabir Sharma",
      initials: "KS",
      bike: "Royal Enfield Himalayan",
      status: "disconnected",
      distanceKm: 35.8,
      lastSeen: "8 min ago",
      position: [30.946, 77.071],
    },
  ],
};
