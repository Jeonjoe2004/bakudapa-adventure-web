"use client";

import { useEffect, useRef } from "react";

interface MountainMapProps {
  latitude: number;
  longitude: number;
  name: string;
}

export function MountainMap({ latitude, longitude, name }: MountainMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    async function initMap() {
      const L = (await import("leaflet")).default;

      // @ts-expect-error - default marker icon path issue in Next.js
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!).setView([latitude, longitude], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      L.marker([latitude, longitude]).addTo(map).bindPopup(`<b>${name}</b>`).openPopup();

      mapInstanceRef.current = map;
    }

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
      }
    };
  }, [latitude, longitude, name]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
        integrity="sha512-Zcn6bjR/8RZbLEDCR/+3PWgM1E0VRlC0y5W8cY3Wd2W2G5d9vG2C0fG5K4yOeQ3GQ1vE5Q3K5Q3K5Q5Q5Q5Q=="
        crossOrigin=""
      />
      <div
        ref={mapRef}
        className="h-[300px] w-full rounded-xl border border-border z-0"
      />
    </>
  );
}
