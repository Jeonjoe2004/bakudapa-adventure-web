"use client";

import { Navigation } from "lucide-react";

interface MountainMapProps {
  latitude: number;
  longitude: number;
  name: string;
}

export function MountainMap({ latitude, longitude, name }: MountainMapProps) {
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d200!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid`;
  const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

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
