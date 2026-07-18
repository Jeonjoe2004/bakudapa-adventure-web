interface MountainMapProps {
  latitude: number;
  longitude: number;
  name: string;
}

export function MountainMap({ latitude, longitude, name }: MountainMapProps) {
  const mapsUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d200!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid`;
  const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <iframe
        title={`Peta ${name}`}
        src={mapsUrl}
        className="w-full border-0"
        style={{ height: "300px" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="px-3 py-2 bg-muted/50 border-t border-border text-xs text-muted-foreground">
        <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
          Buka di Google Maps ↗
        </a>
      </div>
    </div>
  );
}
