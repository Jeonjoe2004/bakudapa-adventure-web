interface MountainMapProps {
  latitude: number;
  longitude: number;
  name: string;
}

export function MountainMap({ latitude, longitude, name }: MountainMapProps) {
  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.02}%2C${latitude - 0.01}%2C${longitude + 0.02}%2C${latitude + 0.01}&layer=mapnik&marker=${latitude}%2C${longitude}`;
  const osmLink = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=13/${latitude}/${longitude}`;

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <iframe
        title={`Peta ${name}`}
        src={osmUrl}
        className="w-full border-0"
        style={{ height: "300px" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="px-3 py-2 bg-muted/50 border-t border-border text-xs text-muted-foreground">
        <a href={osmLink} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
          Buka di OpenStreetMap ↗
        </a>
      </div>
    </div>
  );
}
