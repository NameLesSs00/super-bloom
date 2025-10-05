'use client';

import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues with Leaflet
const EventMap = dynamic(() => import('./EventMap'), {
  ssr: false,
  loading: () => (
    <div className="h-screen flex items-center justify-center">
      <div className="text-xl">Loading map...</div>
    </div>
  )
});

export default function WorldMapPage() {
  return <EventMap />;
}