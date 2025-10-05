'use client';

import { useState, useEffect } from 'react'; // ✅ Removed unused useRef
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';
import L from 'leaflet';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

// --- Fix for default Leaflet icons (no `any` used) ---
const defaultIcon = L.icon({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = defaultIcon;
// ----------------------------------------------------

interface Event {
  id: number;
  name: string;
  lat: number;
  lng: number;
  date: string;
  description: string;
  images: string[];
  locationSlug: string;
}

function MapNavigator() {
  const map = useMap();
  const searchParams = useSearchParams();
  const location = searchParams.get('location');

  useEffect(() => {
    if (location) {
      const events: Event[] = [
        {
          id: 1,
          name: "California Superbloom",
          lat: 35.1891,
          lng: -119.7931,
          date: "2024-03-15",
          description: "After a wet winter, Carrizo Plain, Antelope Valley, and Anza-Borrego erupt in colorful wildflowers, creating stunning landscapes that can even be seen from space.",
          images: ["/caf1.webp"],
          locationSlug: "california",
        },
        {
          id: 2,
          name: "Atacama Desert Bloom",
          lat: -28.15,
          lng: -70.6833,
          date: "2024-08-10",
          description: "Rare rains trigger a spectacular bloom of over 200 wildflower species in this normally arid desert, creating the 'Desierto Florido' phenomenon.",
          images: ["/florido1.jpg"],
          locationSlug: "chile",
        },
        {
          id: 3,
          name: "Namaqualand Flowers",
          lat: -30.5595,
          lng: 17.9375,
          date: "2024-08-20",
          description: "In spring, the semi-desert Succulent Karoo transforms into vibrant hills of wildflowers, home to many endemic plant species.",
          images: ["/Nam1.jpg"],
          locationSlug: "namaqualand",
        },
      ];

      const targetEvent = events.find((event) => event.locationSlug === location);

      if (targetEvent) {
        map.setView([targetEvent.lat, targetEvent.lng], 6, {
          animate: true,
          duration: 1,
        });

        setTimeout(() => {
          const markerElement = document.querySelector(`[data-location="${location}"]`);
          if (markerElement) {
            (markerElement as HTMLElement).click();
          }
        }, 500);
      }
    }
  }, [location, map]);

  return null;
}

const EventMap = () => {
  const [events] = useState<Event[]>([
    {
      id: 1,
      name: "California Superbloom",
      lat: 35.1891,
      lng: -119.7931,
      date: "2024-03-15",
      description: "After a wet winter, Carrizo Plain, Antelope Valley, and Anza-Borrego erupt in colorful wildflowers, creating stunning landscapes that can even be seen from space.",
      images: ["/caf1.webp"],
      locationSlug: "california",
    },
    {
      id: 2,
      name: "Atacama Desert Bloom",
      lat: -28.15,
      lng: -70.6833,
      date: "2024-08-10",
      description: "Rare rains trigger a spectacular bloom of over 200 wildflower species in this normally arid desert, creating the 'Desierto Florido' phenomenon.",
      images: ["/florido1.jpg"],
      locationSlug: "chile",
    },
    {
      id: 3,
      name: "Namaqualand Flowers",
      lat: -30.5595,
      lng: 17.9375,
      date: "2024-08-20",
      description: "In spring, the semi-desert Succulent Karoo transforms into vibrant hills of wildflowers, home to many endemic plant species.",
      images: ["/Nam1.jpg"],
      locationSlug: "namaqualand",
    },
  ]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (!isClient) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-xl">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
        zoomControl={false}
        scrollWheelZoom
      >
        <MapNavigator />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {events.map((event) => (
          <Marker
            key={event.id}
            position={[event.lat, event.lng]}
            data-location={event.locationSlug}
          >
            <Popup>
              <div className="w-64">
                {event.images?.[0] && (
                  <div className="mb-3">
                    <div className="relative h-32 w-full">
                      <Image
                        src={event.images[0]}
                        alt={event.name}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                )}
                <h3 className="font-bold text-lg text-green-800 mb-2">{event.name}</h3>
                <div className="text-green-600 font-semibold mb-2">
                  {formatDate(event.date)}
                </div>
                <p className="text-gray-700 text-sm mb-3">{event.description}</p>
                <Link
                  href={`/${event.locationSlug}`}
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors no-underline"
                >
                  View Location Details
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default EventMap;
