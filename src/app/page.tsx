"use client";

import { useState } from "react";
import RiderList from "../components/rider-list";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  Bike,
  ChevronDown,
  CircleHelp,
  Clock3,
  Compass,
  Flag,
  Gauge,
  MapPin,
  Menu,
  Plus,
  Radio,
  Settings,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";

import MapLoader from "@/components/map-loader";
import { activeRide } from "@/lib/mock-data";
import type { ChangeEvent, FormEvent } from "react";

export default function Home() {
  const [showCreate, setShowCreate] = useState(false);
  const [rideName, setRideName] = useState("");
  const [destination, setDestination] = useState("");
  const [notice, setNotice] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isCreateRideOpen, setIsCreateRideOpen] = useState(false);
  const [selectedRiderId, setSelectedRiderId] = useState<string | null>(null);

  const riders = activeRide.riders;
  const disconnected = riders.filter(
    (rider) => rider.status === "disconnected",
  ).length;
  const stopped = riders.filter((rider) => rider.status === "stopped").length;

  //
  function handleRideNameChange(event: ChangeEvent<HTMLInputElement>) {
    setRideName(event.target.value);
  }
  //

  function createRide(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!rideName.trim() || !destination.trim()) {
      alert("Please enter a ride name and destination.");
      return;
    }
    alert(`Ride "${rideName}" to ${destination} is ready to create!`);

    // setShowCreate(false);
    // setNotice(
    //   `“${rideName}” is ready to configure. Ride creation is currently a frontend demo.`,
    // );
    // setRideName("");
    // setDestination("");
  }

  return (
    <main className="min-h-screen bg-[#0b0d0f] text-[#f2f4f1]">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={`${mobileMenu ? "flex" : "hidden"} fixed inset-y-0 left-0 z-30 w-64 flex-col border-r border-[#272d30] bg-[#101315] p-5 md:sticky md:top-0 md:flex md:h-screen md:shrink-0`}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c6f36a] text-[#11150c]">
              <Bike size={23} strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight">
                Ride<span className="text-[#c6f36a]">Sync</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#929a9a]">
                Ride together
              </div>
            </div>
            <button
              className="ml-auto text-[#929a9a] md:hidden"
              onClick={() => setMobileMenu(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mt-10 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#687171]">
            Workspace
          </div>

          <nav className="mt-3 space-y-1">
            <a
              href="#overview"
              className="flex items-center gap-3 rounded-xl bg-[#202720] px-3 py-3 text-sm font-medium text-[#c6f36a]"
            >
              <Activity size={18} /> Overview
            </a>
            <a
              href="#live-ride"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#a4aaaa] transition hover:bg-[#191d20] hover:text-white"
            >
              <Radio size={18} /> Live ride
              <span className="ml-auto h-2 w-2 rounded-full bg-[#c6f36a]" />
            </a>
            <a
              href="#riders"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#a4aaaa] transition hover:bg-[#191d20] hover:text-white"
            >
              <Users size={18} /> My riders
            </a>
            <button
              onClick={() => setShowCreate(true)}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#a4aaaa] transition hover:bg-[#191d20] hover:text-white"
            >
              <Compass size={18} /> Plan a ride
            </button>
          </nav>

          <div className="mt-9 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#687171]">
            Preferences
          </div>

          <nav className="mt-3 space-y-1">
            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#a4aaaa] hover:bg-[#191d20]">
              <Settings size={18} /> Settings
            </button>
            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#a4aaaa] hover:bg-[#191d20]">
              <CircleHelp size={18} /> Help & support
            </button>
          </nav>

          <div className="mt-auto rounded-2xl border border-[#30382a] bg-[#171c15] p-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheck size={17} className="text-[#c6f36a]" />
              Ride safe
            </div>
            <p className="mt-2 text-xs leading-5 text-[#929a9a]">
              Keep your crew connected. Stop somewhere safe before checking your
              phone.
            </p>
          </div>

          <div className="mt-5 flex items-center gap-3 border-t border-[#272d30] pt-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#313b31] text-xs font-bold text-[#c6f36a]">
              VB
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium">Ride Captain</div>
              <div className="text-xs text-[#929a9a]">Demo account</div>
            </div>
            <ChevronDown size={16} className="text-[#929a9a]" />
          </div>
        </aside>

        {/* Main content */}
        <section id="overview" className="min-w-0 flex-1">
          <header className="flex h-[76px] items-center justify-between border-b border-[#272d30] px-4 sm:px-7 lg:px-9">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenu(true)}
                className="text-[#929a9a] md:hidden"
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
              <div>
                <div className="text-sm text-[#929a9a]">
                  Thursday, October 15
                </div>
                <h1 className="text-lg font-semibold tracking-tight sm:text-xl">
                  Ride overview
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-full border border-[#272d30] px-3 py-2 text-xs text-[#a4aaaa] sm:flex">
                <span className="h-2 w-2 rounded-full bg-[#c6f36a]" />
                Demo mode
              </div>
              <button
                aria-label="Notifications"
                className="relative rounded-xl border border-[#272d30] p-2.5 text-[#a4aaaa] hover:bg-[#191d20]"
              >
                <Bell size={18} />
                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#c6f36a]" />
              </button>
              <button
                onClick={() => setShowCreate(true)}
                className="flex items-center gap-2 rounded-xl bg-[#c6f36a] px-3 py-2.5 text-sm font-semibold text-[#14190c] transition hover:bg-[#d5fa8d] sm:px-4"
              >
                <Plus size={17} />
                <span className="hidden sm:inline">Create ride</span>
                <span className="sm:hidden">Create</span>
              </button>
            </div>
          </header>

          <div className="space-y-7 p-4 sm:p-7 lg:p-9">
            {notice && (
              <div className="flex items-start justify-between gap-3 rounded-xl border border-[#3a472b] bg-[#1a2116] p-4 text-sm text-[#d7e9bd]">
                {notice}
                <button onClick={() => setNotice("")} aria-label="Dismiss">
                  <X size={17} />
                </button>
              </div>
            )}

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#c6f36a]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#c6f36a]" />
                  Your crew is on the move
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Keep the crew together.
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-[#929a9a]">
                  One map, every rider, one shared journey. Here&apos;s
                  what&apos;s happening with your crew.
                </p>
              </div>
              <div className="text-xs text-[#687171]">
                All locations are simulated
              </div>
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
              {[
                {
                  label: "Active riders",
                  value: "04",
                  note: "In this ride",
                  icon: Users,
                },
                {
                  label: "Ride distance",
                  value: "42.8",
                  unit: "km",
                  note: "Captain's distance",
                  icon: Gauge,
                },
                {
                  label: "Need attention",
                  value: String(disconnected + stopped).padStart(2, "0"),
                  note: "Stopped or disconnected",
                  icon: ArrowDownRight,
                },
                {
                  label: "Ride status",
                  value: "Live",
                  note: "Simulated session",
                  icon: Radio,
                },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[#272d30] bg-[#121518] p-4 sm:p-5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs text-[#929a9a] sm:text-sm">
                        {stat.label}
                      </span>
                      <Icon size={17} className="text-[#a0ab91]" />
                    </div>
                    <div className="mt-4 flex items-baseline gap-1.5">
                      <span className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        {stat.value}
                      </span>
                      {"unit" in stat && (
                        <span className="text-xs text-[#929a9a]">
                          {stat.unit}
                        </span>
                      )}
                    </div>
                    <div className="mt-2 text-[11px] text-[#747e7e] sm:text-xs">
                      {stat.note}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Ride heading */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold">{activeRide.name}</h3>
                  <span className="rounded-full border border-[#39472b] bg-[#1c2615] px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-[#c6f36a]">
                    Active
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#929a9a]">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {activeRide.destination}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={14} />
                    {riders.length} riders
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock3 size={14} />
                    Started 9:30 AM
                  </span>
                </div>
              </div>
              <button
                onClick={() =>
                  setNotice(
                    "Invite links will be enabled when ride rooms are implemented.",
                  )
                }
                className="flex items-center gap-2 rounded-xl border border-[#303638] px-3 py-2.5 text-xs font-medium text-[#d0d5d1] hover:bg-[#191d20]"
              >
                <Users size={15} />
                Invite riders
              </button>
            </div>

            {/* Map and rider list */}
            <div
              id="live-ride"
              className="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1fr)_310px]"
            >
              <div className="min-w-0 overflow-hidden rounded-2xl border border-[#272d30] bg-[#121518]">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#272d30] px-4 py-4 sm:px-5">
                  <div>
                    <div className="text-sm font-semibold">Live ride map</div>
                    <div className="mt-1 text-xs text-[#929a9a]">
                      Rider positions and route preview
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#929a9a]">
                    <span className="h-2 w-2 rounded-full bg-[#c6f36a]" />
                    2 riding
                    <span className="ml-2 h-2 w-2 rounded-full bg-[#bd914e]" />1
                    stopped
                  </div>
                </div>
                <div className="h-[350px] sm:h-[440px]">
                  <MapLoader />
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-[#272d30] px-4 py-3 text-[11px] text-[#7e8787] sm:px-5">
                  <span className="flex items-center gap-2">
                    <MapPin size={14} />
                    Shimla region · Sample coordinates
                  </span>
                  <span>OpenStreetMap</span>
                </div>
              </div>

              <div
                id="riders"
                className="overflow-hidden rounded-2xl border border-[#272d30] bg-[#121518]"
              >
                <div className="flex items-center justify-between border-b border-[#272d30] px-4 py-4">
                  <div>
                    <div className="text-sm font-semibold">Your riders</div>
                    <div className="mt-1 text-xs text-[#929a9a]">
                      {riders.length} members in this ride
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      setNotice(
                        "Rider invitations will be available with ride rooms.",
                      )
                    }
                    aria-label="Add riders"
                    className="rounded-lg border border-[#303638] p-2 text-[#aab0ac] hover:bg-[#191d20]"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <p>Selected rider: {selectedRiderId ?? "None"}</p>

                <RiderList riders={riders} onSelectRider={setSelectedRiderId} />

                <div className="m-3 rounded-xl border border-[#423528] bg-[#201a14] p-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#e5bc71]">
                    <ArrowUpRight size={15} />
                    Rider attention
                  </div>
                  <p className="mt-2 text-xs leading-5 text-[#b3a596]">
                    {disconnected} disconnected and {stopped} stopped. These are
                    simulated statuses, not live alerts.
                  </p>
                </div>
              </div>
            </div>

            <footer className="flex flex-col justify-between gap-2 border-t border-[#272d30] pt-5 text-[11px] text-[#687171] sm:flex-row">
              <span>RideSync © 2026 · Built for the journey.</span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={13} /> Ride safe. Ride together.
              </span>
            </footer>
          </div>
        </section>
      </div>

      {/* Create ride modal */}
      {showCreate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setShowCreate(false);
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
                onClick={() => setShowCreate(false)}
                aria-label="Close dialog"
                className="rounded-lg p-2 text-[#929a9a] hover:bg-[#202427]"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={createRide} className="mt-6 space-y-4">
              <label className="block text-sm text-[#d4d9d4]">
                Ride name
                <input
                  required
                  value={rideName}
                  onChange={handleRideNameChange}
                  placeholder="e.g. Sunday mountain run"
                  className="mt-2 w-full rounded-xl border border-[#303638] bg-[#0b0d0f] px-4 py-3 text-sm outline-none placeholder:text-[#626b6b] focus:border-[#9bc450]"
                />
              </label>

              <label className="block text-sm text-[#d4d9d4]">
                Destination
                <input
                  required
                  value={destination}
                  onChange={(event) => setDestination(event.target.value)}
                  placeholder="e.g. Shimla, Himachal Pradesh"
                  className="mt-2 w-full rounded-xl border border-[#303638] bg-[#0b0d0f] px-4 py-3 text-sm outline-none placeholder:text-[#626b6b] focus:border-[#9bc450]"
                />
              </label>

              <div className="rounded-xl border border-[#303638] bg-[#0d100e] p-3 text-xs leading-5 text-[#929a9a]">
                This is a frontend prototype. Saving rides and inviting members
                will be connected to the backend in a later phase.
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
      )}
    </main>
  );
}
