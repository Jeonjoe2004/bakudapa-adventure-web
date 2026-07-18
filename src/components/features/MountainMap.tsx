"use client";

import { Navigation } from "lucide-react";

interface MountainMapProps {
  latitude: number;
  longitude: number;
  name: string;
  mapQuery?: string;
}

export function MountainMap({ latitude, longitude, name, mapQuery }: MountainMapProps) {
  const query = mapQuery || `${latitude},${longitude}`;
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;

  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-border overflow-hidden">
        <iframe
          title={`Peta ${name}`}
          src={embedUrl}
          className="w-full border-0"
          style={{ height: "300px" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <a
        href={routeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-forest-500 text-white px-4 py-3 rounded-xl font-medium hover:bg-forest-600 transition-colors"
      >
        <Navigation className="h-4 w-4" />
        Rute ke {name} via Google Maps
      </a>
    </div>
  );
}
